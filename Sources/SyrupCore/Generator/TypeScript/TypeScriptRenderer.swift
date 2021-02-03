/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2020 Shopify Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

import Foundation
import Stencil
import PathKit
import CommonCrypto

final class TypeScriptRenderer: Renderer {
	override class func customExtensions(config: Config) -> [Extension] {
		[
			TypeScriptRenderer.customExtension(),
			ReservedWordsExtension(reservedWords: config.template.specification.reservedWords),
			ArgumentRendererExtension<TypeScriptVariableTypeRenderer>(
					reservedWords: config.template.specification.reservedWords,
					null: config.template.specification.nullString),
			TypeScriptInternalRendererExtension(config: config),
			SelectionSetExtension()
		]
	}

	override func renderOperation(
		operation: IntermediateRepresentation.OperationDefinition,
		intermediateRepresentation: IntermediateRepresentation,
		operationSelections: SelectionSetVisitor.Operation
	) throws -> String {
		let queryString = intermediateRepresentation.fullQueryString(for: operation).removingLeadingSpaces.removingNewLines

        let referencedImportsForOperation = referencedImports(
            selections: operation.selections,
            intermediateRepresentation: intermediateRepresentation,
            variables: operation.variables
        )
		let collectionResults = try intermediateRepresentation.collectFields(for: operation)
		let fields = collectionResults.fields.scopedTo(parentFragment: nil)
		let topLevelFragmentSpreads = IntermediateRepresentation.fragments(from: collectionResults.fragmentSpreads, onConcreteType: operation.typeName)
		let operationTypeName = "\(operation.type)".capitalized
		let name = "\(operation.name)\(operationTypeName)Data"

		let context: [String: Any] = [
			"operation": operation,
			"encryptedId": queryString.sha256(),
			"name": name,
			"fieldPrefix": name + ".",
			"queryString": queryString,
			"fields": fields,
			"topLevelFragmentNames": topLevelFragmentSpreads.map { $0.name },
            "allReferencedFragments": referencedImportsForOperation.fragments,
            "allReferencedEnums": referencedImportsForOperation.enums,
            "allReferencedInputTypes": referencedImportsForOperation.inputs,
			"selections": operationSelections.selectionSet
		]

		return try render(template: "Operation", asFile: true, context: context)
	}
    
    override func renderInputTypes(intermediateRepresentation: IntermediateRepresentation) throws -> [String] {
        var rendered: [String] = []

        for inputType in intermediateRepresentation.referencedInputTypes {
            var inputImports: [String] = []
            var enumImports: [String] = []
            
            for inputField in inputType.inputFields {
                addEnumAndInputImportIfFound(variableType: inputField.type, &inputImports, &enumImports)
            }
            
            let context: [String: Any] = [
                "inputType": inputType,
                "inputImports": inputImports,
                "enumImports": enumImports,
                "moduleName": config.project.moduleName,
                "importEnums": true
            ]
            rendered.append(try render(template: "InputType", asFile: true, context: context))
        }
        return rendered
    }

	func renderGraphApi() throws -> String {
		try render(template: "GraphApi", context: [:])
	}

	func renderEnumEntryPoint(intermediateRepresentation: IntermediateRepresentation) throws -> String {
		let context: [String: Any] = ["enumNames": intermediateRepresentation.referencedEnums.map { $0.name }.sorted()]
		return try render(template: "EnumTypeIndex", asFile: true, context: context)
	}
	
	func renderInputTypeEntryPoint(intermediateRepresentation: IntermediateRepresentation) throws -> String {
		let context: [String: Any] = ["inputNames": intermediateRepresentation.referencedInputTypes.map { $0.name }.sorted()]
		return try render(template: "InputTypeIndex", asFile: true, context: context)
	}
	
	func renderFragmentEntryPoint(intermediateRepresentation: IntermediateRepresentation) throws -> String {
		let context: [String: Any] = ["fragmentNames": intermediateRepresentation.fragmentDefinitions.map { $0.name }.sorted()]
		return try render(template: "FragmentIndex", asFile: true, context: context)
	}

	func renderResponseType(
		name: String,
        typeName: String,
		fields: [CollectedField],
		fragmentNames: [String],
		fragmentSelections: SelectionSetVisitor.FragmentDefinition? = nil,
		asFile: Bool = false,
        referencedResponseImports: (fragments: [String], enums: [String]) = (fragments: [], enums: [])
	) throws -> String {
        var context: [String: Any] = [
			"name": name,
            "fieldPrefix": "\(name).",
            "hasInternalDefinitions": hasInternalDefinitions(fields: fields),
            "typeName": typeName,
			"fields": fields,
			"fragmentNames": fragmentNames,
            "fileReferencedFragments": referencedResponseImports.fragments,
            "fileReferencedEnums": referencedResponseImports.enums,
			"fragmentSelections": fragmentSelections?.selectionSet ?? []
		]
		if asFile {
			let containsFragment = !fragmentNames.isEmpty || checkContainsFragment(fields: fields)
			context["containsFragment"] = containsFragment
		}
		return try render(template: "ResponseType", asFile: asFile, context: context)
	}

	func renderFragmentDefinitions(intermediateRepresentation: IntermediateRepresentation, selectionSets: SelectionSetVisitor.Results) throws -> [String] {
		var rendered: [String] = []
		for fragment in intermediateRepresentation.fragmentDefinitions {
            let referencedImportsForFragment = referencedImports(selections: fragment.selections, intermediateRepresentation: intermediateRepresentation)
			let collectionResults = try intermediateRepresentation.collectFields(for: fragment)
			let fields = collectionResults.fields.scopedTo(parentFragment: fragment.name)
            let fragmentName = "\(fragment.name)FragmentData"
			let definition: String
			switch fragment.typeCondition {
			case .interface(let interfaceType):
				let fragmentSelections = selectionSets.fragmentDefinition(named: fragment.name)
				let groupedFragmentSpreads = IntermediateRepresentation.groupedFragmentSpreads(fragmentSpreads: collectionResults.fragmentSpreads, inheritedType: interfaceType)
				definition = try renderInterfaceWrapper(name: fragmentName, scopedFields: fields, collectedFields: collectionResults.fields, interfaceTypeName: interfaceType, groupedFragmentSpreads: groupedFragmentSpreads, fragmentSelections: fragmentSelections, asFile: true, referencedResponseImports: (fragments: referencedImportsForFragment.fragments, enums: referencedImportsForFragment.enums))
			case .union(let unionType):
				let fragmentSelections = selectionSets.fragmentDefinition(named: fragment.name)
				let groupedFragmentSpreads = IntermediateRepresentation.groupedFragmentSpreads(fragmentSpreads: collectionResults.fragmentSpreads, inheritedType: unionType)
				definition = try renderUnionWrapper(name: fragmentName, unionTypeName: unionType, collectedFields: fields, groupedFragmentSpreads: groupedFragmentSpreads, fragmentSelections: fragmentSelections, asFile: true, referencedResponseImports: (fragments: referencedImportsForFragment.fragments, enums: referencedImportsForFragment.enums))
			case .object:
				let fragmentSelections = selectionSets.fragmentDefinition(named: fragment.name)
				let fragmentSpreads = IntermediateRepresentation.fragments(from: collectionResults.fragmentSpreads, onConcreteType: fragment.typeCondition.name)
                definition = try renderResponseType(name: fragmentName, typeName: fragment.typeCondition.name, fields: fields, fragmentNames: fragmentSpreads.map {
					$0.name
                }, fragmentSelections: fragmentSelections, asFile: true, referencedResponseImports: (fragments: referencedImportsForFragment.fragments, enums: referencedImportsForFragment.enums))
			}
			rendered.append(definition)
		}
		return rendered
	}

	//check if any of the fields or nested fields contains a fragment path
	func checkContainsFragment(fields: [CollectedField]) -> Bool {
		for field in fields {
			if field.parentFragment != nil {
				return true
			}
			if let nestedField = field as? IntermediateRepresentation.CollectedObjectField {
				if checkContainsFragment(fields: nestedField.collectedFields) {
					return true
				}
			} else if let nestedField = field as? IntermediateRepresentation.CollectedUnionField {
				if checkContainsFragment(fields: nestedField.collectedFields) {
					return true
				}
			} else if let nestedField = field as? IntermediateRepresentation.CollectedInterfaceField {
				if checkContainsFragment(fields: nestedField.collectedFields) {
					return true
				}
			}
		}
		return false
	}

	func renderUnionWrapper(
		name: String,
		unionTypeName: String,
		collectedFields: [CollectedField],
		groupedFragmentSpreads: [String: [IntermediateRepresentation.SelectionPath.PathComponent.Fragment]],
		fragmentSelections: SelectionSetVisitor.FragmentDefinition? = nil,
		asFile: Bool = false,
        referencedResponseImports: (fragments: [String], enums: [String]) = (fragments: [], enums: [])
	) throws -> String {
		let groupedFields = collectedFields.groupedFields(fromUnionType: unionTypeName)
		var concreteTypeNames = groupedFields.map {
			$0.key
		}
		concreteTypeNames.append(contentsOf: groupedFragmentSpreads.keys.filter {
			$0 != unionTypeName
		})
		concreteTypeNames = concreteTypeNames.unique.sorted()
		let fragmentSpreads = groupedFragmentSpreads[unionTypeName] ?? []

		let context: [String: Any] = [
			"name": name,
            "fieldPrefix": "\(name).",
			"unionTypeName": unionTypeName,
			"concreteTypeNames": concreteTypeNames,
			"fragmentSpreads": fragmentSpreads,
			"groupedFragmentSpreads": groupedFragmentSpreads,
			"collectedFields": collectedFields,
			"package": "fragments",
            "fileReferencedFragments": referencedResponseImports.fragments,
            "fileReferencedEnums": referencedResponseImports.enums,
			"fragmentSelections": fragmentSelections?.selectionSet ?? []
		]
		return try render(template: "UnionWrapper", asFile: asFile, context: context)
	}

	func renderInterfaceWrapper(
		name: String,
		scopedFields: [CollectedField],
		collectedFields: [CollectedField],
		interfaceTypeName: String,
		groupedFragmentSpreads: [String: [IntermediateRepresentation.SelectionPath.PathComponent.Fragment]],
		fragmentSelections: SelectionSetVisitor.FragmentDefinition? = nil,
		asFile: Bool = false,
        referencedResponseImports: (fragments: [String], enums: [String]) = (fragments: [], enums: [])
	) throws -> String {
		let groupedFields = try scopedFields.groupedFields(fromInterfaceType: interfaceTypeName)
		let baseFields = scopedFields.baseFields(fromInterfaceType: interfaceTypeName)
		var concreteTypeNames = groupedFields.map {
			$0.key
		}
		concreteTypeNames.append(contentsOf: groupedFragmentSpreads.keys.filter {
			$0 != interfaceTypeName
		})
		concreteTypeNames = concreteTypeNames.unique.sorted()
		let fragmentSpreads = groupedFragmentSpreads[interfaceTypeName] ?? []
		let context: [String: Any] = [
			"name": name,
            "fieldPrefix": "\(name).",
            "hasInternalDefinitions": hasInternalDefinitions(fields: scopedFields),
			"baseFields": baseFields,
			"collectedFields": scopedFields,
			"concreteTypeNames": concreteTypeNames,
			"fragmentSpreads": fragmentSpreads,
			"groupedFragmentSpreads": groupedFragmentSpreads,
			"fragmentSelections": fragmentSelections?.selectionSet ?? [],
            "fileReferencedFragments": referencedResponseImports.fragments,
            "fileReferencedEnums": referencedResponseImports.enums
		]
		return try render(template: "InterfaceWrapper", asFile: asFile, context: context)
	}
    
    private func hasInternalDefinitions(fields: [CollectedField]) -> Bool {
        return fields.contains { field in
            return field is IntermediateRepresentation.CollectedObjectField
                || field is IntermediateRepresentation.CollectedUnionField
                || field is IntermediateRepresentation.CollectedInterfaceField
        }
    }
    
    private func referencedImports(
        selections: [IntermediateRepresentation.Selection],
        intermediateRepresentation: IntermediateRepresentation,
        variables: [IntermediateRepresentation.Variable] = []
    ) -> (
        fragments: [String],
        enums: [String],
        inputs: [String]
    ) {
        func readFieldType(fieldType: IntermediateRepresentation.FieldType , _ fragmentImports: inout [String], _ enumImports: inout [String]) {
            switch fieldType {
            case .nonNull(let fieldType):
                readFieldType(fieldType: fieldType, &fragmentImports, &enumImports)
            case .list(let fieldType):
                readFieldType(fieldType: fieldType, &fragmentImports, &enumImports)
            case .enum(let enumName):
                enumImports.append(enumName)
            case .interface(let interface):
                let imports = referencedImports(selections: interface.selectionSet, intermediateRepresentation: intermediateRepresentation)
                fragmentImports.append(contentsOf: imports.fragments)
                enumImports.append(contentsOf: imports.enums)
            case .union(let union):
                let imports = referencedImports(selections: union.selectionSet, intermediateRepresentation: intermediateRepresentation)
                fragmentImports.append(contentsOf: imports.fragments)
                enumImports.append(contentsOf: imports.enums)
            case .object(let object):
                let imports = referencedImports(selections: object.selectionSet, intermediateRepresentation: intermediateRepresentation)
                fragmentImports.append(contentsOf: imports.fragments)
                enumImports.append(contentsOf: imports.enums)
            default:
                break
            }
        }
        
        var fragments: [String] = []
        var enums: [String] = []
        var inputs: [String] = []
        
        for variable in variables {
            addEnumAndInputImportIfFound(variableType: variable.type, &inputs, &enums)
        }
        
        for selection in selections {
            switch selection {
            case .field(let field):
                readFieldType(fieldType: field.type, &fragments, &enums)
            case .fragmentSpread(let fragment):
                fragments.append(fragment.name)
            case .inlineFragment(let inlineFragment):
                let imports = referencedImports(selections: inlineFragment.selectionSet, intermediateRepresentation: intermediateRepresentation)
                fragments.append(contentsOf: imports.fragments)
                enums.append(contentsOf: imports.enums)
            }
        }
        
        return (
            fragments: fragments.unique,
            enums: enums.unique,
            inputs: inputs.unique
        )
    }
    
    private func addEnumAndInputImportIfFound(variableType: IntermediateRepresentation.Variable.VariableType, _ inputImports: inout [String], _ enumImports: inout [String]) {
        switch variableType {
        case .enum(let enumName):
            enumImports.append(enumName)
        case .input(let inputName):
            inputImports.append(inputName)
        case .nonNull(let wrappedType):
            addEnumAndInputImportIfFound(variableType: wrappedType, &inputImports, &enumImports)
        case .list(let wrappedType):
            addEnumAndInputImportIfFound(variableType: wrappedType, &inputImports, &enumImports)
        default:
            break
        }
    }

	private static func customExtension() -> Extension {
		let customExtension = Extension()

		customExtension.registerFilter("renderPropertyDeclaration") { (value, args) -> Any? in
            func produceFieldName(field: CollectedField) -> String {
                if (field.type.isNonNull) {
                    return field.name
                } else {
                    return "\(field.name)?"
                }
            }
            
            let prefix = args.first as? String

			if let field = value as? IntermediateRepresentation.CollectedObjectField {
                return "\(produceFieldName(field: field)): \(TypeScriptTypeAnnotationRenderer.render(objectField: field, prefix: prefix))"
			} else if let field = value as? IntermediateRepresentation.CollectedScalarField {
				return "\(produceFieldName(field: field)): \(TypeScriptTypeAnnotationRenderer.render(scalarField: field))"
			} else if let field = value as? IntermediateRepresentation.CollectedUnionField {
				return "\(produceFieldName(field: field)): \(TypeScriptTypeAnnotationRenderer.render(unionWrapper: field, prefix: prefix))"
			} else if let field = value as? IntermediateRepresentation.CollectedInterfaceField {
				return "\(produceFieldName(field: field)): \(TypeScriptTypeAnnotationRenderer.render(interfaceWrapper: field, prefix: prefix))"
			}
			return nil
		}

		return customExtension
	}
}

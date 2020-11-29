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

	func renderGraphApi() throws -> String {
		try render(template: "GraphApi", context: [:])
	}
	
	func renderScalarResolver() throws -> String {
		try render(template: "ScalarResolver", context: [:])
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
		return try render(template: "InterfaceWrapperIndex", asFile: true, context: context)
	}

	func renderResponseTypes(intermediateRepresentation: IntermediateRepresentation) throws -> [String] {
		var rendered: [String] = []
		let importEnums = intermediateRepresentation.referencedEnums.isEmpty == false
		for operation in intermediateRepresentation.operations {
			let name = "\(operation.name)Response"
			let graphQLName: String = operation.typeName
			let collectionResults = try intermediateRepresentation.collectFields(for: operation)
			let fields = collectionResults.fields.scopedTo(parentFragment: nil)
			let fragmentSpreads = IntermediateRepresentation.fragments(from: collectionResults.fragmentSpreads, onConcreteType: graphQLName)

			rendered.append(try renderResponseType(name: name, graphQLName: graphQLName, fields: fields, fragmentNames: fragmentSpreads.map {
				$0.name
			}, asFile: true, importEnums: importEnums))
		}
		return rendered
	}

	func renderResponseType(name: String, graphQLName: String, fields: [CollectedField], fragmentNames: [String], fragmentSelections: SelectionSetVisitor.FragmentDefinition? = nil, superclassOverride: String = "", asFile: Bool = false, importEnums: Bool = false) throws -> String {
		var context: [String: Any] = [
			"name": name,
			"graphQLName": graphQLName,
			"fields": fields,
			"superclassOverride": superclassOverride,
			"fragmentNames": fragmentNames,
			"importEnums": importEnums,
			"fragmentSelections": fragmentSelections?.selectionSet ?? []
		]
		if asFile {
			let containsFragment = !fragmentNames.isEmpty || checkContainsFragment(fields: fields)
			context["containsFragment"] = containsFragment
		}
		return try render(template: "ResponseType", asFile: asFile, context: context)
	}

	func renderTypeScriptInputTypes(intermediateRepresentation: IntermediateRepresentation) throws -> [String] {
		var rendered: [String] = []
		let importEnums = intermediateRepresentation.referencedEnums.isEmpty == false
		for inputType in intermediateRepresentation.referencedInputTypes {
			let requiresCustomEncoder = inputType.inputFields.contains(where: { $0.type.nestedScalar() is IntermediateRepresentation.CustomCodedScalar })
			let context: [String: Any] = [
				"inputType": inputType,
				"requiresCustomEncoder": requiresCustomEncoder,
				"moduleName": config.project.moduleName,
				"importEnums": importEnums
			]
			rendered.append(try render(template: "InputType", asFile: true, context: context))
		}
		return rendered
	}

	func renderFragmentDefinitions(intermediateRepresentation: IntermediateRepresentation, selectionSets: SelectionSetVisitor.Results) throws -> [String] {
		var rendered: [String] = []
		let importEnums = intermediateRepresentation.referencedEnums.isEmpty == false
		for fragment in intermediateRepresentation.fragmentDefinitions {
			let collectionResults = try intermediateRepresentation.collectFields(for: fragment)
			let fields = collectionResults.fields.scopedTo(parentFragment: fragment.name)
			let definition: String
			switch fragment.typeCondition {
			case .interface(let interfaceType):
				let fragmentSelections = selectionSets.fragmentDefinition(named: fragment.name)
				let groupedFragmentSpreads = IntermediateRepresentation.groupedFragmentSpreads(fragmentSpreads: collectionResults.fragmentSpreads, inheritedType: interfaceType)
				definition = try renderInterfaceWrapper(name: fragment.name, scopedFields: fields, collectedFields: collectionResults.fields, interfaceTypeName: interfaceType, groupedFragmentSpreads: groupedFragmentSpreads, fragmentSelections: fragmentSelections, asFile: true, importEnums: importEnums)
			case .union(let unionType):
				let fragmentSelections = selectionSets.fragmentDefinition(named: fragment.name)
				let groupedFragmentSpreads = IntermediateRepresentation.groupedFragmentSpreads(fragmentSpreads: collectionResults.fragmentSpreads, inheritedType: unionType)
				definition = try renderUnionWrapper(name: fragment.name, unionTypeName: unionType, collectedFields: fields, groupedFragmentSpreads: groupedFragmentSpreads, fragmentSelections: fragmentSelections, asFile: true, importEnums: importEnums)
			case .object:
				let fragmentSelections = selectionSets.fragmentDefinition(named: fragment.name)
				let fragmentSpreads = IntermediateRepresentation.fragments(from: collectionResults.fragmentSpreads, onConcreteType: fragment.typeCondition.name)
				definition = try renderResponseType(name: fragment.name, graphQLName: fragment.typeCondition.name, fields: fields, fragmentNames: fragmentSpreads.map {
					$0.name
				}, fragmentSelections: fragmentSelections, asFile: true, importEnums: importEnums)
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

	func renderUnionWrapper(name: String, unionTypeName: String, collectedFields: [CollectedField], groupedFragmentSpreads: [String: [IntermediateRepresentation.SelectionPath.PathComponent.Fragment]], fragmentSelections: SelectionSetVisitor.FragmentDefinition? = nil, asFile: Bool = false, importEnums: Bool = false) throws -> String {
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
			"unionTypeName": unionTypeName,
			"concreteTypeNames": concreteTypeNames,
			"fragmentSpreads": fragmentSpreads,
			"groupedFragmentSpreads": groupedFragmentSpreads,
			"collectedFields": collectedFields,
			"package": "fragments",
			"importEnums": importEnums,
			"fragmentSelections": fragmentSelections?.selectionSet ?? []
		]
		return try render(template: "UnionWrapper", asFile: asFile, context: context)
	}

	func renderInterfaceWrapper(name: String, scopedFields: [CollectedField], collectedFields: [CollectedField], interfaceTypeName: String, groupedFragmentSpreads: [String: [IntermediateRepresentation.SelectionPath.PathComponent.Fragment]], fragmentSelections: SelectionSetVisitor.FragmentDefinition? = nil, asFile: Bool = false, importEnums: Bool = false) throws -> String {
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
			"baseFields": baseFields,
			"collectedFields": scopedFields,
			"interfaceTypeName": interfaceTypeName,
			"concreteTypeNames": concreteTypeNames,
			"fragmentSpreads": fragmentSpreads,
			"groupedFragmentSpreads": groupedFragmentSpreads,
			"fragmentSelections": fragmentSelections?.selectionSet ?? [],
			"importEnums": importEnums
		]
		return try render(template: "InterfaceWrapper", asFile: asFile, context: context)
	}

	private static func customExtension() -> Extension {
		let customExtension = Extension()

		customExtension.registerFilter("renderPropertyDeclaration") { (value, args) -> Any? in
			let prefix = args.first as? String

			if let field = value as? IntermediateRepresentation.CollectedObjectField {
				return "\(field.name): \(TypeScriptTypeAnnotationRenderer.render(objectField: field, prefix: prefix))"
			} else if let field = value as? IntermediateRepresentation.CollectedScalarField {
				return "\(field.name): \(TypeScriptTypeAnnotationRenderer.render(scalarField: field))"
			} else if let field = value as? IntermediateRepresentation.CollectedUnionField {
				return "\(field.name): \(TypeScriptTypeAnnotationRenderer.render(unionWrapper: field, prefix: prefix))"
			} else if let field = value as? IntermediateRepresentation.CollectedInterfaceField {
				return "\(field.name): \(TypeScriptTypeAnnotationRenderer.render(interfaceWrapper: field, prefix: prefix))"
			}
			return nil
		}

		customExtension.registerFilter("decodeField") { (value, args) -> Any? in
			guard let field = value as? CollectedField else {
				return nil
			}

			let prefix = args.first as? String
			let fieldName: String
			let typeAnnotation: String
			if let scalarField = field as? IntermediateRepresentation.CollectedScalarField {
				typeAnnotation = TypeScriptRenderer.decodeJsonScalarField(collectedScalarField: scalarField, nonNull: false, fieldName: field.name)
				fieldName = field.name
			} else if let objectField = field as? IntermediateRepresentation.CollectedObjectField {
				typeAnnotation = TypeScriptRenderer.decodeJsonObjectField(collectedObjectFieldType: objectField, nonNull: false, fieldName: field.name, prefix: prefix)
				fieldName = field.name
			} else if let interfaceField = field as? IntermediateRepresentation.CollectedInterfaceField {
				typeAnnotation = TypeScriptRenderer.decodeInterfaceTypeField(collectedInterfaceField: interfaceField, fieldName: interfaceField.name, nonNull: false, prefix: prefix)
				fieldName = field.name
			} else if let unionField = field as? IntermediateRepresentation.CollectedUnionField {
				typeAnnotation = TypeScriptRenderer.decodeUnionTypeField(collectedUnionField: unionField, fieldName: unionField.name, nonNull: false, prefix: prefix)
				fieldName = field.name
			} else {
				fatalError("Unable to determine type annotation \(field)")
			}
			return "\(fieldName): \(typeAnnotation)"
		}
		return customExtension
	}

	static func decodeJsonScalarField(collectedScalarField: IntermediateRepresentation.CollectedScalarField, nonNull: Bool, fieldName: String) -> String {
		decodeJsonScalarField(field: collectedScalarField, fieldType: collectedScalarField.type, fieldName: fieldName, nonNull: nonNull)
	}

	static func decodeJsonScalarField(field: IntermediateRepresentation.CollectedScalarField, fieldType: FieldTypeProtocol, fieldName: String, nonNull: Bool) -> String {
		switch fieldType {
		case let fieldType as IntermediateRepresentation.ScalarFieldType:
			let scalar = fieldType.scalar
			if let _ = scalar as? IntermediateRepresentation.CustomCodedScalar {
				let representation = "ScalarResolver.getTypeAdapter<\(scalar.nativeType)>(\(scalar.nativeType).name).deserialize(jsonObject[\"\(fieldName)\"])"
        
				if nonNull {
					return representation
				} else {
					return "jsonObject[\"\(fieldName)\"] != undefined && jsonObject[\"\(fieldName)\"] != null ? \(representation) : undefined"
				}
			} else {
				if nonNull {
					return "jsonObject[\"\(fieldName)\"]"
				}
				
				return "jsonObject[\"\(fieldName)\"] != undefined && jsonObject[\"\(fieldName)\"] != null ? jsonObject[\"\(fieldName)\"] : undefined"
				
			}
		case _ as IntermediateRepresentation.ListFieldType:
			return decodeScalarFieldArray(field: field, fieldname: fieldName, nonNull: nonNull)
		case let fieldType as IntermediateRepresentation.NonNullFieldType:
			let nested = fieldType.nestedType
			return decodeJsonScalarField(field: field, fieldType: nested, fieldName: fieldName, nonNull: true)
		case let fieldType as IntermediateRepresentation.EnumFieldType:
			let rendered: String = "Enums.\(fieldType.graphQLName)Util.safeValueOf(jsonObject[\"\(fieldName)\"])"
			if nonNull {
				return rendered
			} else {
				return "jsonObject[\"\(fieldName)\"] != undefined && jsonObject[\"\(fieldName)\"] != null ? \(rendered) : undefined"
			}
		default: return ""
		}
	}

	//Decode Object Type fields
	static func decodeJsonObjectField(collectedObjectFieldType: IntermediateRepresentation.CollectedObjectField, nonNull: Bool, fieldName: String, prefix: String?) -> String {
		decodeJsonObjectField(collectedObjectField: collectedObjectFieldType, objectFieldType: collectedObjectFieldType.type, nonNull: nonNull, fieldName: fieldName, prefix: prefix)
	}

	static func decodeJsonObjectField(collectedObjectField: IntermediateRepresentation.CollectedObjectField?, objectFieldType: FieldTypeProtocol, nonNull: Bool, fieldName: String, prefix: String?) -> String {
		switch objectFieldType {
		case let fieldType as IntermediateRepresentation.NonNullFieldType:
			let nested = fieldType.nestedType
			if nested.isList {
				var rendered: String = ""
				if nested.nestedScalar != nil {
					rendered = decodeJsonObjectField(collectedObjectFieldType: collectedObjectField!, nonNull: true, fieldName: fieldName, prefix: prefix)
				} else if nested.isObject {
					let typeAnnotation: String = "\(TypeScriptTypeAnnotationRenderer.render(objectField: collectedObjectField!, prefix: prefix))"
					rendered = decodeObjectArray(typeAnnotation: typeAnnotation, objectField: collectedObjectField!.type, fieldName: fieldName, isNonNullList: collectedObjectField!.type.isNonNull, prefix: prefix)
				}
				return rendered
			} else {
				return "\(applyPrefix(name: fieldName, prefix: prefix)).fromJson(jsonObject[\"\(fieldName)\"])"
			}
		case is IntermediateRepresentation.ListFieldType:
			let typeAnnotation: String = "\(TypeScriptTypeAnnotationRenderer.render(objectField: collectedObjectField!, prefix: prefix)))"
			return decodeObjectArray(typeAnnotation: typeAnnotation, objectField: collectedObjectField!.type, fieldName: fieldName, isNonNullList: objectFieldType.isNonNull, prefix: prefix)
		case is IntermediateRepresentation.ScalarFieldType:
			return "jsonObject[\"\(fieldName)\"]"
		case is IntermediateRepresentation.EnumFieldType:
			let rendered: String = "Enums.\(objectFieldType.graphQLName)Util.safeValueOf(jsonObject[\"\(fieldName)\"])"
			return rendered
		case is IntermediateRepresentation.ObjectFieldType:
			var rendered: String
			if !nonNull {
				rendered = "jsonObject[\"\(fieldName)\"] != undefined && jsonObject[\"\(fieldName)\"] != null ? \(applyPrefix(name: fieldName, prefix: prefix)).fromJson(jsonObject[\"\(fieldName)\"]) : undefined"
			} else {
				rendered = decodeJsonObjectField(collectedObjectField: collectedObjectField, objectFieldType: objectFieldType, nonNull: true, fieldName: fieldName, prefix: prefix)
			}
			return rendered
		default:
			return "\(applyPrefix(name: fieldName, prefix: prefix)).fromJson(jsonObject[\"\(fieldName)\"])"
		}
	}

	static func decodeInterfaceTypeField(collectedInterfaceField: IntermediateRepresentation.CollectedInterfaceField, fieldName: String, nonNull: Bool, prefix: String?) -> String {
		switch collectedInterfaceField.type {
		case is IntermediateRepresentation.ScalarFieldType:
			return "Scalar"
		case let fieldType as IntermediateRepresentation.NonNullFieldType:
			let nested = fieldType.nestedType
			var rendered = ""
			if nested.isList {
				if nested.nestedScalar != nil {
					rendered = "jsonObject[\"\(fieldName)\"]"
				} else {
					let arrayTypeAnnotation = TypeScriptTypeAnnotationRenderer.render(interfaceWrapper: collectedInterfaceField)
					rendered = decodeObjectArray(typeAnnotation: arrayTypeAnnotation, objectField: collectedInterfaceField.type, fieldName: fieldName, isNonNullList: collectedInterfaceField.type.isNonNull, prefix: prefix)
				}
			} else {
				rendered = "\(applyPrefix(name: fieldName, prefix: prefix)).fromJson(jsonObject[\"\(fieldName)\"])"
			}
			return rendered
		case is IntermediateRepresentation.ListFieldType:
			let arrayTypeAnnotation = TypeScriptTypeAnnotationRenderer.render(interfaceWrapper: collectedInterfaceField)
			return decodeObjectArray(typeAnnotation: arrayTypeAnnotation, objectField: collectedInterfaceField.type, fieldName: fieldName, isNonNullList: collectedInterfaceField.type.isNonNull, prefix: prefix)
		case is IntermediateRepresentation.ObjectFieldType:
			return "Object that can be null"
		case is IntermediateRepresentation.NonNullFieldType:
			return decodeInterfaceTypeField(collectedInterfaceField: collectedInterfaceField, fieldName: fieldName, nonNull: true, prefix: prefix)
		default:
			return "jsonObject[\"\(fieldName)\"] != undefined && jsonObject[\"\(fieldName)\"] != null ? \(applyPrefix(name: fieldName, prefix: prefix)).fromJson(jsonObject[\"\(fieldName)\"]) : undefined"
		}
	}

	static func decodeUnionTypeField(collectedUnionField: IntermediateRepresentation.CollectedUnionField, fieldName: String, nonNull: Bool, prefix: String?) -> String {
		switch collectedUnionField.type {
		case is IntermediateRepresentation.ScalarFieldType:
			return "Scalar"
		case let fieldType as IntermediateRepresentation.NonNullFieldType:
			let nested = fieldType.nestedType
			var rendered = ""
			if nested.isList {
				if nested.nestedScalar != nil {
					rendered = "jsonObject[\"\(fieldName)\"]"
				} else {
					let arrayTypeAnnotation = TypeScriptTypeAnnotationRenderer.render(unionWrapper: collectedUnionField)
					rendered = decodeObjectArray(typeAnnotation: arrayTypeAnnotation, objectField: collectedUnionField.type, fieldName: fieldName, isNonNullList: collectedUnionField.type.isNonNull, prefix: prefix)
				}
			} else {
				rendered = "\(applyPrefix(name: fieldName, prefix: prefix)).fromJson(jsonObject[\"\(fieldName)\"])"
			}
			return rendered
		case is IntermediateRepresentation.ListFieldType:
			let arrayTypeAnnotation = TypeScriptTypeAnnotationRenderer.render(unionWrapper: collectedUnionField)
			return decodeObjectArray(typeAnnotation: arrayTypeAnnotation, objectField: collectedUnionField.type, fieldName: fieldName, isNonNullList: collectedUnionField.type.isNonNull, prefix: prefix)
		case is IntermediateRepresentation.ObjectFieldType:
			return "Object that can be null"
		case is IntermediateRepresentation.NonNullFieldType:
			return decodeUnionTypeField(collectedUnionField: collectedUnionField, fieldName: fieldName, nonNull: true, prefix: prefix)
		default:
			return "jsonObject[\"\(fieldName)\"] != undefined && jsonObject[\"\(fieldName)\"] != null ? \(applyPrefix(name: fieldName, prefix: prefix)).fromJson(jsonObject[\"\(fieldName)\"]) : null"
		}
	}

	//Decode Primitive Arrays
	static func decodeScalarFieldArray(field: IntermediateRepresentation.CollectedScalarField, fieldname: String, nonNull: Bool) -> String {
		let scalar = field.type.nestedScalar

		var fieldDecodingTemplate = ""
		if scalar != nil {
			switch scalar {
			case is IntermediateRepresentation.CustomCodedScalar:
				let typeAnnotation = TypeScriptTypeAnnotationRenderer.render(scalarField: field)
				fieldDecodingTemplate = "Array.from(jsonObject[\"\(fieldname)\"], x => ScalarResolver.getTypeAdapter<\(typeAnnotation)>(\(typeAnnotation).name).deserialize(x)"
				break
			default:
				fieldDecodingTemplate = "jsonObject[\"\(fieldname)\"]"
			}
		} else {
			fieldDecodingTemplate = "Array.from(jsonObject[\"\(fieldname)\"], x => Enums.\(field.type.graphQLName)Util.safeValueOf(x as string))"
		}

		if nonNull {
			return fieldDecodingTemplate
		} else {
			return "jsonObject[\"\(fieldname)\"] != undefined && jsonObject[\"\(fieldname)\"] != null ? \(fieldDecodingTemplate) : undefined"
		}
	}

	static func decodeObjectArray(typeAnnotation: String, objectField: FieldTypeProtocol, fieldName: String, isNonNullList: Bool, prefix: String?) -> String {
		let isListObjectNonNull = isNonNullListObject(objectType: objectField, parentNonNull: isNonNullList)

		let listObjectNullabilityMarker = "\(isListObjectNonNull ? "" : " | undefined")"

		var listInitializer = ""

		if isNonNullList {
			listInitializer = "Array<\(applyPrefix(name: fieldName, prefix: prefix))\(listObjectNullabilityMarker)>()"
		} else {
			listInitializer = "undefined"
		}

		var objectDeserializerExpression = ""
		if isListObjectNonNull {
			objectDeserializerExpression = "\(applyPrefix(name: fieldName, prefix: prefix)).fromJson(x)"
		} else {
			objectDeserializerExpression = "jsonObject[\"\(fieldName)\"] == undefined || jsonObject[\"\(fieldName)\"] == null ? undefined : \(applyPrefix(name: fieldName, prefix: prefix)).fromJson(x)"
		}

		return "jsonObject[\"\(fieldName)\"] == undefined || jsonObject[\"\(fieldName)\"] == null ? \(listInitializer) : Array.from(jsonObject[\"\(fieldName)\"], x => \(objectDeserializerExpression))"
	}

	private static func applyPrefix(name: String, prefix: String?) -> String {
		if let prefix = prefix {
			return "\(prefix)_\(name.capitalizedFirstLetter)"
		}
		
		return name.capitalizedFirstLetter
	}

	private static func isNonNullListObject(objectType: FieldTypeProtocol, parentNonNull: Bool) -> Bool {
		let nonNull: Bool
		switch objectType {
		case is IntermediateRepresentation.ObjectFieldType, is IntermediateRepresentation.InterfaceFieldType, is IntermediateRepresentation.UnionFieldType:
			nonNull = objectType.isNonNull
		case let listType as IntermediateRepresentation.ListFieldType:
			nonNull = listType.elementType.isNonNull
		case let nonNullType as IntermediateRepresentation.NonNullFieldType:
			nonNull = isNonNullListObject(objectType: nonNullType.nestedType, parentNonNull: true)
		default:
			fatalError("Encountered unexpected type \(objectType)")
		}

		return nonNull
	}
}

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

final class TypeScriptInternalRendererExtension: Extension {
	private let config: Config
	init(config: Config) {
		self.config = config
		super.init()
		
		registerFilter("internalTypeDefinition") { (value, args) -> Any? in
			guard let field = value as? IntermediateRepresentation.CollectedObjectField else { return nil }
			let parentTypeName = args.first as? String ?? ""
			let fields = field.collectedFields.scopedTo(parentFragment: field.parentFragment?.name)
			let fragmentSpreads = IntermediateRepresentation.fragments(from: field.fragmentSpreads, onConcreteType: field.type.graphQLName)
			let renderer = TypeScriptRenderer(config: config)
			if fields.isEmpty && fragmentSpreads.isEmpty { return nil }

			return try! renderer.renderResponseType(
				name: "\(parentTypeName)\(field.name.capitalizedFirstLetter)",
				fields: fields,
				fragmentNames: fragmentSpreads.map { $0.name }
			)
		}
		
		registerFilter("internalInterfaceWrapper") { (value, args) -> Any? in
			guard let field = value as? IntermediateRepresentation.CollectedInterfaceField else { return nil }
			let parentTypeName = args.first as? String ?? ""
			let renderer = TypeScriptRenderer(config: config)
			let scopedFields = field.collectedFields.scopedTo(parentFragment: field.parentFragment?.name)
			let groupedFragmentSpreads = IntermediateRepresentation.groupedFragmentSpreads(fragmentSpreads: field.fragmentSpreads, inheritedType: field.type.graphQLName)
			
			return try! renderer.renderInterfaceWrapper(
				name: "\(parentTypeName)\(field.name.capitalizedFirstLetter)",
				scopedFields: scopedFields,
				collectedFields: field.collectedFields,
				interfaceTypeName: field.type.graphQLName,
				groupedFragmentSpreads: groupedFragmentSpreads
			)
		}
		
		registerFilter("internalUnionWrapper") { (value, args) -> Any? in
			guard let field = value as? IntermediateRepresentation.CollectedUnionField else { return nil }
			let parentTypeName = args.first as? String ?? ""
			let renderer = TypeScriptRenderer(config: config)
			let unionTypeName = field.type.graphQLName
			let groupedFragmentSpreads = IntermediateRepresentation.groupedFragmentSpreads(fragmentSpreads: field.fragmentSpreads, inheritedType: unionTypeName)
			let collectedFields = field.collectedFields.scopedTo(parentFragment: field.parentFragment?.name)
			
			return try! renderer.renderUnionWrapper(
				name: "\(parentTypeName)\(field.name.capitalizedFirstLetter)",
				unionTypeName: unionTypeName,
				collectedFields: collectedFields,
				groupedFragmentSpreads: groupedFragmentSpreads
			)
		}
		
		registerFilter("internalInterfaceTypeDefinitions") { (value, args) -> Any? in
			var rendered = ""
			guard let collectedFields = value as? [CollectedField], let interfaceTypeName = args.first as? String, let groupedFragmentSpreads = args.dropFirst().first as? [String: [IntermediateRepresentation.SelectionPath.PathComponent.Fragment]], let concreteTypeNames = args.dropFirst(2).first as? [String] else { return nil }
			let groupedFields = try collectedFields.groupedFields(fromInterfaceType: interfaceTypeName)
			concreteTypeNames.forEach { concreteType in
				let graphQLName = concreteType
				let fields = groupedFields[concreteType] ?? []
				var protocolConformances = groupedFragmentSpreads[concreteType] ?? []
				protocolConformances.append(contentsOf: groupedFragmentSpreads[interfaceTypeName] ?? [])
				
				let renderer = TypeScriptRenderer(config: config)
				rendered += try! renderer.renderResponseType(name: "\(interfaceTypeName)Realized\(graphQLName)", fields: fields, fragmentNames: protocolConformances.unique.map { $0.name })
			}
			return rendered
		}
		
		registerFilter("internalUnionTypeDefinitions") { (value, args) -> Any? in
			var rendered = ""
			guard let collectedFields = value as? [CollectedField], let unionTypeName = args.first as? String, let groupedProtocolConformances = args.dropFirst().first as? [String: [IntermediateRepresentation.SelectionPath.PathComponent.Fragment]], let concreteTypeNames = args.dropFirst(2).first as? [String] else { return nil }
			let groupedFields = collectedFields.groupedFields(fromUnionType: unionTypeName)
			
			concreteTypeNames.forEach { concreteType in
				let graphQLName = concreteType
				let fields = groupedFields[concreteType] ?? []
				let protocolConformances = groupedProtocolConformances[concreteType] ?? []
				let renderer = TypeScriptRenderer(config: config)
				rendered += try! renderer.renderResponseType(name: "\(unionTypeName)Realized\(graphQLName)", fields: fields, fragmentNames: protocolConformances.map { $0.name })
			}
			return rendered
		}
	}
}

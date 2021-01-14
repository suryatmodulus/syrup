import { ID, GraphSelection, SyrupOperation, copyWithTypeCondtion } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"
import * as Fragments from "../Fragments"

export namespace NodeInterfacesQueryData {
  export interface Variables {
    nodeId: ID
  }

export interface Node {
  realized: NodeRealizedProduct | {},
  nodeId: Fragments.NodeId 
}
export interface NodeRealizedProduct {
  nodeId: Fragments.NodeId,
  productNodeTitle: Fragments.ProductNodeTitle
}

}

export interface NodeInterfacesQueryData {

  /**
   * Returns a specific node by ID.
   */
  node: NodeInterfacesQueryData.Node | undefined
}

const document: SyrupOperation<NodeInterfacesQueryData, NodeInterfacesQueryData.Variables> = {
  id: "0f655c5eadd67518dc83675127dfbe028058931618ee1ae4dc6095228489f540",
  name: "NodeInterfaces",
  source: "fragment NodeId on Node { __typename id } fragment ProductNodeTitle on Product { __typename title } query NodeInterfaces(\$nodeId: ID!) { __typename node(id: \$nodeId) { __typename ... NodeId ... on Product { __typename ... ProductNodeTitle } } }",
  operationType: 'query',
  selections: [
{
name: "node",
type: { name: "Node", definedType: "Interface" },
arguments: { id: { type: "OperationVariableKey", value: "nodeId" } },
passedGID: "nodeId",
typeCondition: { name: "QueryRoot", definedType: "Object" },
directive: null,
selections: [].concat(Fragments.nodeIdSelections).concat(Fragments.productNodeTitleSelections)}]
}
export default document

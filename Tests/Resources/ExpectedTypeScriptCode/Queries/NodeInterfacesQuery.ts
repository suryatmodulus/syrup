
import { ID, GraphSelection, Query } from "../GraphApi"
import { NodeInterfacesResponse } from "../Responses/NodeInterfacesResponse"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"
import * as Fragments from "../Fragments"

export interface NodeInterfacesQueryArguments {
  nodeId: ID
}

export class NodeInterfacesQuery extends Query<NodeInterfacesResponse> {
    constructor(operationVariables: NodeInterfacesQueryArguments) {
      super(
        "fragment NodeId on Node { __typename id } fragment ProductNodeTitle on Product { __typename title } query NodeInterfaces(\$nodeId: ID!) { __typename node(id: \$nodeId) { __typename ... NodeId ... on Product { __typename ... ProductNodeTitle } } }",
        {
          "nodeId": `${operationVariables.nodeId}`
        },
        new Array<GraphSelection>(
new GraphSelection({
name: "node",
type: "Node",
cacheKey: `node(id: ${operationVariables["nodeId"]})`,
passedGID: `${operationVariables["nodeId"]}`,
typeCondition: "QueryRoot",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>().concat(Fragments.NodeId.getSelections({})).concat(Fragments.ProductNodeTitle.getSelections({}))}))
      )
    }

    decodeResponse(jsonObject: Object): NodeInterfacesResponse {
      return NodeInterfacesResponse.fromJson(jsonObject)
    }
}
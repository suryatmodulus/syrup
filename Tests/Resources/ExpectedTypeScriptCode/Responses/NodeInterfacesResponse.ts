
import { ID, Response, GraphSelection } from "../GraphApi"
import * as Enums from "../Enums"
import * as Fragments from "../Fragments"

export interface NodeInterfacesResponse_Arguments {

  /**
   * Returns a specific node by ID.
   */
  node: NodeInterfacesResponse_Node | undefined
}

export class NodeInterfacesResponse implements Response {
  readonly node: NodeInterfacesResponse_Node | undefined

  constructor(responseArguments: NodeInterfacesResponse_Arguments) {
    this.node = responseArguments.node
  }

  static fromJson(jsonObject: any): NodeInterfacesResponse {
    return new this({
      node: jsonObject["node"] != undefined && jsonObject["node"] != null ? NodeInterfacesResponse_Node.fromJson(jsonObject["node"]) : undefined
    })
  }

}

export interface NodeInterfacesResponse_Node_Arguments {
  realized: NodeInterfacesResponse_Node_Realized,
  nodeId: Fragments.NodeId
}
export class NodeInterfacesResponse_Node implements Response {
  readonly realized: NodeInterfacesResponse_Node_Realized
  readonly nodeId: Fragments.NodeId
  constructor(responseArguments: NodeInterfacesResponse_Node_Arguments) {
    this.realized = responseArguments.realized
  }
  static fromJson(jsonObject: any) {
    return new this({
      realized: function(typename: string): NodeInterfacesResponse_Node_Realized {
        switch(typename) {
          case "Product": 
            NodeInterfacesResponse_Node_Realized_Product.fromJson(jsonObject)
          default:
            return new NodeInterfacesResponse_Node_Realized_Other()
        }
      }(jsonObject["__typename"]),
      nodeId: Fragments.NodeId.fromJson(jsonObject)
    })
  }
  static typeName(): string {
    return "Node"
  }
  static getSelections(operationVariables: Record<string, any>): Array<GraphSelection> {
    return new Array<GraphSelection>()
  }
}
export interface NodeInterfacesResponse_Node_Realized {}
export interface NodeInterfacesResponse_Node_Realized_Product_Arguments {
  nodeId: Fragments.NodeId,
  productNodeTitle: Fragments.ProductNodeTitle
}
export class NodeInterfacesResponse_Node_Realized_Product implements NodeInterfacesResponse_Node_Realized {
  readonly nodeId: Fragments.NodeId
  readonly productNodeTitle: Fragments.ProductNodeTitle
  constructor(responseArguments: NodeInterfacesResponse_Node_Realized_Product_Arguments) {
    this.nodeId = responseArguments.nodeId
    this.productNodeTitle = responseArguments.productNodeTitle
  }
  static fromJson(jsonObject: any): NodeInterfacesResponse_Node_Realized_Product {
    return new this({
      nodeId: Fragments.NodeId.fromJson(jsonObject),
      productNodeTitle: Fragments.ProductNodeTitle.fromJson(jsonObject)
    })
  }
}
export class NodeInterfacesResponse_Node_Realized_Other implements NodeInterfacesResponse_Node_Realized {}


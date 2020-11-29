
import { ID, Response, GraphSelection } from "../GraphApi"
import * as Enums from "../Enums"

export interface NodeId_Arguments {
  realized: NodeId_Realized,

  /**
   * Globally unique identifier.
   */
  id: ID
}

export class NodeId implements Response {
  readonly realized: NodeId_Realized
  readonly id: ID

  constructor(responseArguments: NodeId_Arguments) {
    this.realized = responseArguments.realized
    this.id = responseArguments.id
  }

  static fromJson(jsonObject: any) {
    return new this({
      realized: function(typename: string): NodeId_Realized {
        switch(typename) {
          default:
            return new NodeId_Realized_Other()
        }
      }(jsonObject["__typename"]),
      id: jsonObject["id"]
    })
  }

  static typeName(): string {
    return "Node"
  }

  static getSelections(operationVariables: Record<string, any>): Array<GraphSelection> {
    return new Array<GraphSelection>(
new GraphSelection({
name: "id",
type: "ID",
cacheKey: `id`,
passedGID: null,
typeCondition: "Node",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}))
  }
}

export interface NodeId_Realized {}

export class NodeId_Realized_Other implements NodeId_Realized {}


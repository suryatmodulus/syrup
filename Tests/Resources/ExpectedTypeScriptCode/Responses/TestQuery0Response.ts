
import { ID, Response, GraphSelection } from "../GraphApi"
import * as Enums from "../Enums"
import * as Fragments from "../Fragments"

export interface TestQuery0Response_Arguments {

  /**
   * Returns the list of nodes with the given IDs.
   */
  nodes: Array<TestQuery0Response_Nodes | undefined>
}

export class TestQuery0Response implements Response {
  readonly nodes: Array<TestQuery0Response_Nodes | undefined>

  constructor(responseArguments: TestQuery0Response_Arguments) {
    this.nodes = responseArguments.nodes
  }

  static fromJson(jsonObject: any): TestQuery0Response {
    return new this({
      nodes: jsonObject["nodes"] == undefined || jsonObject["nodes"] == null ? Array<TestQuery0Response_Nodes | undefined>() : Array.from(jsonObject["nodes"], x => jsonObject["nodes"] == undefined || jsonObject["nodes"] == null ? undefined : TestQuery0Response_Nodes.fromJson(x))
    })
  }

}

export interface TestQuery0Response_Nodes_Arguments {
  realized: TestQuery0Response_Nodes_Realized,
  /**
   * Globally unique identifier.
   */
  id: ID
}
export class TestQuery0Response_Nodes implements Response {
  readonly realized: TestQuery0Response_Nodes_Realized
  readonly id: ID
  constructor(responseArguments: TestQuery0Response_Nodes_Arguments) {
    this.realized = responseArguments.realized
    this.id = responseArguments.id
  }
  static fromJson(jsonObject: any) {
    return new this({
      realized: function(typename: string): TestQuery0Response_Nodes_Realized {
        switch(typename) {
          default:
            return new TestQuery0Response_Nodes_Realized_Other()
        }
      }(jsonObject["__typename"]),
      id: jsonObject["id"]
    })
  }
  static typeName(): string {
    return "Node"
  }
  static getSelections(operationVariables: Record<string, any>): Array<GraphSelection> {
    return new Array<GraphSelection>()
  }
}
export interface TestQuery0Response_Nodes_Realized {}
export class TestQuery0Response_Nodes_Realized_Other implements TestQuery0Response_Nodes_Realized {}


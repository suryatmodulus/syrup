
import { ID, Response, GraphSelection } from "../GraphApi"
import * as Enums from "../Enums"
import * as Fragments from "../Fragments"

export interface TestQuery11Response_Arguments {

  /**
   * Returns a specific node by ID.
   */
  node: TestQuery11Response_Node | undefined
}

export class TestQuery11Response implements Response {
  readonly node: TestQuery11Response_Node | undefined

  constructor(responseArguments: TestQuery11Response_Arguments) {
    this.node = responseArguments.node
  }

  static fromJson(jsonObject: any): TestQuery11Response {
    return new this({
      node: jsonObject["node"] != undefined && jsonObject["node"] != null ? TestQuery11Response_Node.fromJson(jsonObject["node"]) : undefined
    })
  }

}

export interface TestQuery11Response_Node_Arguments {
  realized: TestQuery11Response_Node_Realized
}
export class TestQuery11Response_Node implements Response {
  readonly realized: TestQuery11Response_Node_Realized
  constructor(responseArguments: TestQuery11Response_Node_Arguments) {
    this.realized = responseArguments.realized
  }
  static fromJson(jsonObject: any) {
    return new this({
      realized: function(typename: string): TestQuery11Response_Node_Realized {
        switch(typename) {
          case "Product": 
            TestQuery11Response_Node_Realized_Product.fromJson(jsonObject)
          case "ProductOption": 
            TestQuery11Response_Node_Realized_ProductOption.fromJson(jsonObject)
          default:
            return new TestQuery11Response_Node_Realized_Other()
        }
      }(jsonObject["__typename"])
    })
  }
  static typeName(): string {
    return "Node"
  }
  static getSelections(operationVariables: Record<string, any>): Array<GraphSelection> {
    return new Array<GraphSelection>()
  }
}
export interface TestQuery11Response_Node_Realized {}
export interface TestQuery11Response_Node_Realized_Product_Arguments {
  /**
   * Globally unique identifier.
   */
  id: ID,
  /**
   * A list of the collections that include the product.
   */
  collections: TestQuery11Response_Node_Realized_Product_Collections
}
export class TestQuery11Response_Node_Realized_Product implements TestQuery11Response_Node_Realized {
  readonly id: ID
  readonly collections: TestQuery11Response_Node_Realized_Product_Collections
  constructor(responseArguments: TestQuery11Response_Node_Realized_Product_Arguments) {
    this.id = responseArguments.id
    this.collections = responseArguments.collections
  }
  static fromJson(jsonObject: any): TestQuery11Response_Node_Realized_Product {
    return new this({
      id: jsonObject["id"],
      collections: TestQuery11Response_Node_Realized_Product_Collections.fromJson(jsonObject["collections"])
    })
  }
}
export interface TestQuery11Response_Node_Realized_Product_Collections_Arguments {
  /**
   * A list of edges.
   */
  edges: Array<TestQuery11Response_Node_Realized_Product_Collections_Edges>
}
export class TestQuery11Response_Node_Realized_Product_Collections implements Response {
  readonly edges: Array<TestQuery11Response_Node_Realized_Product_Collections_Edges>
  constructor(responseArguments: TestQuery11Response_Node_Realized_Product_Collections_Arguments) {
    this.edges = responseArguments.edges
  }
  static fromJson(jsonObject: any): TestQuery11Response_Node_Realized_Product_Collections {
    return new this({
      edges: jsonObject["edges"] == undefined || jsonObject["edges"] == null ? Array<TestQuery11Response_Node_Realized_Product_Collections_Edges>() : Array.from(jsonObject["edges"], x => TestQuery11Response_Node_Realized_Product_Collections_Edges.fromJson(x))
    })
  }
}
export interface TestQuery11Response_Node_Realized_Product_Collections_Edges_Arguments {
  /**
   * The item at the end of CollectionEdge.
   */
  node: TestQuery11Response_Node_Realized_Product_Collections_Edges_Node
}
export class TestQuery11Response_Node_Realized_Product_Collections_Edges implements Response {
  readonly node: TestQuery11Response_Node_Realized_Product_Collections_Edges_Node
  constructor(responseArguments: TestQuery11Response_Node_Realized_Product_Collections_Edges_Arguments) {
    this.node = responseArguments.node
  }
  static fromJson(jsonObject: any): TestQuery11Response_Node_Realized_Product_Collections_Edges {
    return new this({
      node: TestQuery11Response_Node_Realized_Product_Collections_Edges_Node.fromJson(jsonObject["node"])
    })
  }
}
export interface TestQuery11Response_Node_Realized_Product_Collections_Edges_Node_Arguments {
  /**
   * Globally unique identifier.
   */
  id: ID,
  /**
   * The title of the collection.
   */
  title: string
}
export class TestQuery11Response_Node_Realized_Product_Collections_Edges_Node implements Response {
  readonly id: ID
  readonly title: string
  constructor(responseArguments: TestQuery11Response_Node_Realized_Product_Collections_Edges_Node_Arguments) {
    this.id = responseArguments.id
    this.title = responseArguments.title
  }
  static fromJson(jsonObject: any): TestQuery11Response_Node_Realized_Product_Collections_Edges_Node {
    return new this({
      id: jsonObject["id"],
      title: jsonObject["title"]
    })
  }
}
export interface TestQuery11Response_Node_Realized_ProductOption_Arguments {
  /**
   * Globally unique identifier.
   */
  id: ID
}
export class TestQuery11Response_Node_Realized_ProductOption implements TestQuery11Response_Node_Realized {
  readonly id: ID
  constructor(responseArguments: TestQuery11Response_Node_Realized_ProductOption_Arguments) {
    this.id = responseArguments.id
  }
  static fromJson(jsonObject: any): TestQuery11Response_Node_Realized_ProductOption {
    return new this({
      id: jsonObject["id"]
    })
  }
}
export class TestQuery11Response_Node_Realized_Other implements TestQuery11Response_Node_Realized {}


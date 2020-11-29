
import { ID, Response, GraphSelection } from "../GraphApi"
import * as Enums from "../Enums"
import * as Fragments from "../Fragments"

export interface TestQuery9Response_Arguments {

  /**
   * Returns a Shop resource corresponding to access token used in request.
   */
  shop: TestQuery9Response_Shop
}

export class TestQuery9Response implements Response {
  readonly shop: TestQuery9Response_Shop

  constructor(responseArguments: TestQuery9Response_Arguments) {
    this.shop = responseArguments.shop
  }

  static fromJson(jsonObject: any): TestQuery9Response {
    return new this({
      shop: TestQuery9Response_Shop.fromJson(jsonObject["shop"])
    })
  }

}

export interface TestQuery9Response_Shop_Arguments {
  /**
   * Customer accounts associated to the shop.
   *
   * @deprecated Use `QueryRoot.customers` instead.
   */
  customers: TestQuery9Response_Shop_Customers
}
export class TestQuery9Response_Shop implements Response {
  readonly customers: TestQuery9Response_Shop_Customers
  constructor(responseArguments: TestQuery9Response_Shop_Arguments) {
    this.customers = responseArguments.customers
  }
  static fromJson(jsonObject: any): TestQuery9Response_Shop {
    return new this({
      customers: TestQuery9Response_Shop_Customers.fromJson(jsonObject["customers"])
    })
  }
}
export interface TestQuery9Response_Shop_Customers_Arguments {
  /**
   * A list of edges.
   */
  edges: Array<TestQuery9Response_Shop_Customers_Edges>
}
export class TestQuery9Response_Shop_Customers implements Response {
  readonly edges: Array<TestQuery9Response_Shop_Customers_Edges>
  constructor(responseArguments: TestQuery9Response_Shop_Customers_Arguments) {
    this.edges = responseArguments.edges
  }
  static fromJson(jsonObject: any): TestQuery9Response_Shop_Customers {
    return new this({
      edges: jsonObject["edges"] == undefined || jsonObject["edges"] == null ? Array<TestQuery9Response_Shop_Customers_Edges>() : Array.from(jsonObject["edges"], x => TestQuery9Response_Shop_Customers_Edges.fromJson(x))
    })
  }
}
export interface TestQuery9Response_Shop_Customers_Edges_Arguments {
  /**
   * The item at the end of CustomerEdge.
   */
  node: TestQuery9Response_Shop_Customers_Edges_Node
}
export class TestQuery9Response_Shop_Customers_Edges implements Response {
  readonly node: TestQuery9Response_Shop_Customers_Edges_Node
  constructor(responseArguments: TestQuery9Response_Shop_Customers_Edges_Arguments) {
    this.node = responseArguments.node
  }
  static fromJson(jsonObject: any): TestQuery9Response_Shop_Customers_Edges {
    return new this({
      node: TestQuery9Response_Shop_Customers_Edges_Node.fromJson(jsonObject["node"])
    })
  }
}
export interface TestQuery9Response_Shop_Customers_Edges_Node_Arguments {
  /**
   * Globally unique identifier.
   */
  id: ID,
  basicFragment: Fragments.BasicFragment
}
export class TestQuery9Response_Shop_Customers_Edges_Node implements Response {
  readonly id: ID
  readonly basicFragment: Fragments.BasicFragment
  constructor(responseArguments: TestQuery9Response_Shop_Customers_Edges_Node_Arguments) {
    this.id = responseArguments.id
    this.basicFragment = responseArguments.basicFragment
  }
  static fromJson(jsonObject: any): TestQuery9Response_Shop_Customers_Edges_Node {
    return new this({
      id: jsonObject["id"],
      basicFragment: Fragments.BasicFragment.fromJson(jsonObject)
    })
  }
}


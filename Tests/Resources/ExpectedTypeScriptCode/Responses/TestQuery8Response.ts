
import { ID, Response, GraphSelection } from "../GraphApi"
import * as Enums from "../Enums"
import * as Fragments from "../Fragments"

export interface TestQuery8Response_Arguments {

  /**
   * Returns a Shop resource corresponding to access token used in request.
   */
  shop: TestQuery8Response_Shop
}

export class TestQuery8Response implements Response {
  readonly shop: TestQuery8Response_Shop

  constructor(responseArguments: TestQuery8Response_Arguments) {
    this.shop = responseArguments.shop
  }

  static fromJson(jsonObject: any): TestQuery8Response {
    return new this({
      shop: TestQuery8Response_Shop.fromJson(jsonObject["shop"])
    })
  }

}

export interface TestQuery8Response_Shop_Arguments {
  /**
   * Globally unique identifier.
   */
  id: ID,
  /**
   * List of the shop's products.
   *
   * @deprecated Use `QueryRoot.products`.
   */
  firstProduct: TestQuery8Response_Shop_FirstProduct,
  /**
   * List of the shop's products.
   *
   * @deprecated Use `QueryRoot.products`.
   */
  lastProduct: TestQuery8Response_Shop_LastProduct
}
export class TestQuery8Response_Shop implements Response {
  readonly id: ID
  readonly firstProduct: TestQuery8Response_Shop_FirstProduct
  readonly lastProduct: TestQuery8Response_Shop_LastProduct
  constructor(responseArguments: TestQuery8Response_Shop_Arguments) {
    this.id = responseArguments.id
    this.firstProduct = responseArguments.firstProduct
    this.lastProduct = responseArguments.lastProduct
  }
  static fromJson(jsonObject: any): TestQuery8Response_Shop {
    return new this({
      id: jsonObject["id"],
      firstProduct: TestQuery8Response_Shop_FirstProduct.fromJson(jsonObject["firstProduct"]),
      lastProduct: TestQuery8Response_Shop_LastProduct.fromJson(jsonObject["lastProduct"])
    })
  }
}
export interface TestQuery8Response_Shop_FirstProduct_Arguments {
  /**
   * A list of edges.
   */
  edges: Array<TestQuery8Response_Shop_FirstProduct_Edges>
}
export class TestQuery8Response_Shop_FirstProduct implements Response {
  readonly edges: Array<TestQuery8Response_Shop_FirstProduct_Edges>
  constructor(responseArguments: TestQuery8Response_Shop_FirstProduct_Arguments) {
    this.edges = responseArguments.edges
  }
  static fromJson(jsonObject: any): TestQuery8Response_Shop_FirstProduct {
    return new this({
      edges: jsonObject["edges"] == undefined || jsonObject["edges"] == null ? Array<TestQuery8Response_Shop_FirstProduct_Edges>() : Array.from(jsonObject["edges"], x => TestQuery8Response_Shop_FirstProduct_Edges.fromJson(x))
    })
  }
}
export interface TestQuery8Response_Shop_FirstProduct_Edges_Arguments {
  /**
   * A cursor for use in pagination.
   */
  cursor: string,
  /**
   * The item at the end of ProductEdge.
   */
  node: TestQuery8Response_Shop_FirstProduct_Edges_Node
}
export class TestQuery8Response_Shop_FirstProduct_Edges implements Response {
  readonly cursor: string
  readonly node: TestQuery8Response_Shop_FirstProduct_Edges_Node
  constructor(responseArguments: TestQuery8Response_Shop_FirstProduct_Edges_Arguments) {
    this.cursor = responseArguments.cursor
    this.node = responseArguments.node
  }
  static fromJson(jsonObject: any): TestQuery8Response_Shop_FirstProduct_Edges {
    return new this({
      cursor: jsonObject["cursor"],
      node: TestQuery8Response_Shop_FirstProduct_Edges_Node.fromJson(jsonObject["node"])
    })
  }
}
export interface TestQuery8Response_Shop_FirstProduct_Edges_Node_Arguments {
  /**
   * The title of the product.
   */
  title: string
}
export class TestQuery8Response_Shop_FirstProduct_Edges_Node implements Response {
  readonly title: string
  constructor(responseArguments: TestQuery8Response_Shop_FirstProduct_Edges_Node_Arguments) {
    this.title = responseArguments.title
  }
  static fromJson(jsonObject: any): TestQuery8Response_Shop_FirstProduct_Edges_Node {
    return new this({
      title: jsonObject["title"]
    })
  }
}
export interface TestQuery8Response_Shop_LastProduct_Arguments {
  /**
   * A list of edges.
   */
  edges: Array<TestQuery8Response_Shop_LastProduct_Edges>
}
export class TestQuery8Response_Shop_LastProduct implements Response {
  readonly edges: Array<TestQuery8Response_Shop_LastProduct_Edges>
  constructor(responseArguments: TestQuery8Response_Shop_LastProduct_Arguments) {
    this.edges = responseArguments.edges
  }
  static fromJson(jsonObject: any): TestQuery8Response_Shop_LastProduct {
    return new this({
      edges: jsonObject["edges"] == undefined || jsonObject["edges"] == null ? Array<TestQuery8Response_Shop_LastProduct_Edges>() : Array.from(jsonObject["edges"], x => TestQuery8Response_Shop_LastProduct_Edges.fromJson(x))
    })
  }
}
export interface TestQuery8Response_Shop_LastProduct_Edges_Arguments {
  /**
   * A cursor for use in pagination.
   */
  cursor: string,
  /**
   * The item at the end of ProductEdge.
   */
  node: TestQuery8Response_Shop_LastProduct_Edges_Node
}
export class TestQuery8Response_Shop_LastProduct_Edges implements Response {
  readonly cursor: string
  readonly node: TestQuery8Response_Shop_LastProduct_Edges_Node
  constructor(responseArguments: TestQuery8Response_Shop_LastProduct_Edges_Arguments) {
    this.cursor = responseArguments.cursor
    this.node = responseArguments.node
  }
  static fromJson(jsonObject: any): TestQuery8Response_Shop_LastProduct_Edges {
    return new this({
      cursor: jsonObject["cursor"],
      node: TestQuery8Response_Shop_LastProduct_Edges_Node.fromJson(jsonObject["node"])
    })
  }
}
export interface TestQuery8Response_Shop_LastProduct_Edges_Node_Arguments {
  /**
   * The title of the product.
   */
  title: string
}
export class TestQuery8Response_Shop_LastProduct_Edges_Node implements Response {
  readonly title: string
  constructor(responseArguments: TestQuery8Response_Shop_LastProduct_Edges_Node_Arguments) {
    this.title = responseArguments.title
  }
  static fromJson(jsonObject: any): TestQuery8Response_Shop_LastProduct_Edges_Node {
    return new this({
      title: jsonObject["title"]
    })
  }
}


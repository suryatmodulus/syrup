
import { ID, Response, GraphSelection } from "../GraphApi"
import * as Enums from "../Enums"
import * as Fragments from "../Fragments"

export interface ProductsListResponse_Arguments {

  /**
   * List of products.
   */
  products: ProductsListResponse_Products
}

export class ProductsListResponse implements Response {
  readonly products: ProductsListResponse_Products

  constructor(responseArguments: ProductsListResponse_Arguments) {
    this.products = responseArguments.products
  }

  static fromJson(jsonObject: any): ProductsListResponse {
    return new this({
      products: ProductsListResponse_Products.fromJson(jsonObject["products"])
    })
  }

}

export interface ProductsListResponse_Products_Arguments {
  /**
   * A list of edges.
   */
  edges: Array<ProductsListResponse_Products_Edges>
}
export class ProductsListResponse_Products implements Response {
  readonly edges: Array<ProductsListResponse_Products_Edges>
  constructor(responseArguments: ProductsListResponse_Products_Arguments) {
    this.edges = responseArguments.edges
  }
  static fromJson(jsonObject: any): ProductsListResponse_Products {
    return new this({
      edges: jsonObject["edges"] == undefined || jsonObject["edges"] == null ? Array<ProductsListResponse_Products_Edges>() : Array.from(jsonObject["edges"], x => ProductsListResponse_Products_Edges.fromJson(x))
    })
  }
}
export interface ProductsListResponse_Products_Edges_Arguments {
  /**
   * The item at the end of ProductEdge.
   */
  node: ProductsListResponse_Products_Edges_Node,
  /**
   * A cursor for use in pagination.
   */
  cursor: string
}
export class ProductsListResponse_Products_Edges implements Response {
  readonly node: ProductsListResponse_Products_Edges_Node
  readonly cursor: string
  constructor(responseArguments: ProductsListResponse_Products_Edges_Arguments) {
    this.node = responseArguments.node
    this.cursor = responseArguments.cursor
  }
  static fromJson(jsonObject: any): ProductsListResponse_Products_Edges {
    return new this({
      node: ProductsListResponse_Products_Edges_Node.fromJson(jsonObject["node"]),
      cursor: jsonObject["cursor"]
    })
  }
}
export interface ProductsListResponse_Products_Edges_Node_Arguments {
  /**
   * Globally unique identifier.
   */
  id: ID,
  /**
   * The title of the product.
   */
  title: string,
  /**
   * A stripped description of the product, single line with HTML tags removed.
   */
  description: string
}
export class ProductsListResponse_Products_Edges_Node implements Response {
  readonly id: ID
  readonly title: string
  readonly description: string
  constructor(responseArguments: ProductsListResponse_Products_Edges_Node_Arguments) {
    this.id = responseArguments.id
    this.title = responseArguments.title
    this.description = responseArguments.description
  }
  static fromJson(jsonObject: any): ProductsListResponse_Products_Edges_Node {
    return new this({
      id: jsonObject["id"],
      title: jsonObject["title"],
      description: jsonObject["description"]
    })
  }
}



import { ID, Response, GraphSelection } from "../GraphApi"
import * as Enums from "../Enums"
import * as Fragments from "../Fragments"

export interface TestQuery4Response_Arguments {

  /**
   * Returns a Shop resource corresponding to access token used in request.
   */
  shop: TestQuery4Response_Shop
}

export class TestQuery4Response implements Response {
  readonly shop: TestQuery4Response_Shop

  constructor(responseArguments: TestQuery4Response_Arguments) {
    this.shop = responseArguments.shop
  }

  static fromJson(jsonObject: any): TestQuery4Response {
    return new this({
      shop: TestQuery4Response_Shop.fromJson(jsonObject["shop"])
    })
  }

}

export interface TestQuery4Response_Shop_Arguments {
  /**
   * Globally unique identifier.
   */
  id: ID,
  /**
   * List of sales channels not currently installed on the shop.
   */
  availableChannelApps: TestQuery4Response_Shop_AvailableChannelApps
}
export class TestQuery4Response_Shop implements Response {
  readonly id: ID
  readonly availableChannelApps: TestQuery4Response_Shop_AvailableChannelApps
  constructor(responseArguments: TestQuery4Response_Shop_Arguments) {
    this.id = responseArguments.id
    this.availableChannelApps = responseArguments.availableChannelApps
  }
  static fromJson(jsonObject: any): TestQuery4Response_Shop {
    return new this({
      id: jsonObject["id"],
      availableChannelApps: TestQuery4Response_Shop_AvailableChannelApps.fromJson(jsonObject["availableChannelApps"])
    })
  }
}
export interface TestQuery4Response_Shop_AvailableChannelApps_Arguments {
  /**
   * A list of edges.
   */
  edges: Array<TestQuery4Response_Shop_AvailableChannelApps_Edges>
}
export class TestQuery4Response_Shop_AvailableChannelApps implements Response {
  readonly edges: Array<TestQuery4Response_Shop_AvailableChannelApps_Edges>
  constructor(responseArguments: TestQuery4Response_Shop_AvailableChannelApps_Arguments) {
    this.edges = responseArguments.edges
  }
  static fromJson(jsonObject: any): TestQuery4Response_Shop_AvailableChannelApps {
    return new this({
      edges: jsonObject["edges"] == undefined || jsonObject["edges"] == null ? Array<TestQuery4Response_Shop_AvailableChannelApps_Edges>() : Array.from(jsonObject["edges"], x => TestQuery4Response_Shop_AvailableChannelApps_Edges.fromJson(x))
    })
  }
}
export interface TestQuery4Response_Shop_AvailableChannelApps_Edges_Arguments {
  /**
   * The item at the end of AppEdge.
   */
  node: TestQuery4Response_Shop_AvailableChannelApps_Edges_Node
}
export class TestQuery4Response_Shop_AvailableChannelApps_Edges implements Response {
  readonly node: TestQuery4Response_Shop_AvailableChannelApps_Edges_Node
  constructor(responseArguments: TestQuery4Response_Shop_AvailableChannelApps_Edges_Arguments) {
    this.node = responseArguments.node
  }
  static fromJson(jsonObject: any): TestQuery4Response_Shop_AvailableChannelApps_Edges {
    return new this({
      node: TestQuery4Response_Shop_AvailableChannelApps_Edges_Node.fromJson(jsonObject["node"])
    })
  }
}
export interface TestQuery4Response_Shop_AvailableChannelApps_Edges_Node_Arguments {
  /**
   * Globally unique identifier.
   */
  id: ID,
  /**
   * Name of the app.
   */
  title: string
}
export class TestQuery4Response_Shop_AvailableChannelApps_Edges_Node implements Response {
  readonly id: ID
  readonly title: string
  constructor(responseArguments: TestQuery4Response_Shop_AvailableChannelApps_Edges_Node_Arguments) {
    this.id = responseArguments.id
    this.title = responseArguments.title
  }
  static fromJson(jsonObject: any): TestQuery4Response_Shop_AvailableChannelApps_Edges_Node {
    return new this({
      id: jsonObject["id"],
      title: jsonObject["title"]
    })
  }
}


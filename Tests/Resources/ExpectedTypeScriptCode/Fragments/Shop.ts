
import { ID, Response, GraphSelection } from "../GraphApi"
import * as Enums from "../Enums"
import * as Fragments from "../Fragments"

export interface Shop_Arguments {

  /**
   * Returns a Shop resource corresponding to access token used in request.
   */
  shop: Shop_Shop
}

export class Shop implements Response {
  readonly shop: Shop_Shop

  constructor(responseArguments: Shop_Arguments) {
    this.shop = responseArguments.shop
  }

  static fromJson(jsonObject: any): Shop {
    return new this({
      shop: Shop_Shop.fromJson(jsonObject["shop"])
    })
  }

  static getSelections(operationVariables: Record<string, any>): Array<GraphSelection> {
      return new Array<GraphSelection>(
new GraphSelection({
name: "shop",
type: "Shop",
cacheKey: `shop`,
passedGID: null,
typeCondition: "QueryRoot",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "availableChannelApps",
type: "AppConnection",
cacheKey: `availableChannelApps(first: ${operationVariables["first"]})`,
passedGID: null,
typeCondition: "Shop",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "edges",
type: "AppEdge",
cacheKey: `edges`,
passedGID: null,
typeCondition: "AppConnection",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "node",
type: "App",
cacheKey: `node`,
passedGID: null,
typeCondition: "AppEdge",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "id",
type: "ID",
cacheKey: `id`,
passedGID: null,
typeCondition: "App",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}))}))}))}))}))
  }
}

export interface Shop_Shop_Arguments {
  /**
   * List of sales channels not currently installed on the shop.
   */
  availableChannelApps: Shop_Shop_AvailableChannelApps
}
export class Shop_Shop implements Response {
  readonly availableChannelApps: Shop_Shop_AvailableChannelApps
  constructor(responseArguments: Shop_Shop_Arguments) {
    this.availableChannelApps = responseArguments.availableChannelApps
  }
  static fromJson(jsonObject: any): Shop_Shop {
    return new this({
      availableChannelApps: Shop_Shop_AvailableChannelApps.fromJson(jsonObject["availableChannelApps"])
    })
  }
}
export interface Shop_Shop_AvailableChannelApps_Arguments {
  /**
   * A list of edges.
   */
  edges: Array<Shop_Shop_AvailableChannelApps_Edges>
}
export class Shop_Shop_AvailableChannelApps implements Response {
  readonly edges: Array<Shop_Shop_AvailableChannelApps_Edges>
  constructor(responseArguments: Shop_Shop_AvailableChannelApps_Arguments) {
    this.edges = responseArguments.edges
  }
  static fromJson(jsonObject: any): Shop_Shop_AvailableChannelApps {
    return new this({
      edges: jsonObject["edges"] == undefined || jsonObject["edges"] == null ? Array<Shop_Shop_AvailableChannelApps_Edges>() : Array.from(jsonObject["edges"], x => Shop_Shop_AvailableChannelApps_Edges.fromJson(x))
    })
  }
}
export interface Shop_Shop_AvailableChannelApps_Edges_Arguments {
  /**
   * The item at the end of AppEdge.
   */
  node: Shop_Shop_AvailableChannelApps_Edges_Node
}
export class Shop_Shop_AvailableChannelApps_Edges implements Response {
  readonly node: Shop_Shop_AvailableChannelApps_Edges_Node
  constructor(responseArguments: Shop_Shop_AvailableChannelApps_Edges_Arguments) {
    this.node = responseArguments.node
  }
  static fromJson(jsonObject: any): Shop_Shop_AvailableChannelApps_Edges {
    return new this({
      node: Shop_Shop_AvailableChannelApps_Edges_Node.fromJson(jsonObject["node"])
    })
  }
}
export interface Shop_Shop_AvailableChannelApps_Edges_Node_Arguments {
  /**
   * Globally unique identifier.
   */
  id: ID
}
export class Shop_Shop_AvailableChannelApps_Edges_Node implements Response {
  readonly id: ID
  constructor(responseArguments: Shop_Shop_AvailableChannelApps_Edges_Node_Arguments) {
    this.id = responseArguments.id
  }
  static fromJson(jsonObject: any): Shop_Shop_AvailableChannelApps_Edges_Node {
    return new this({
      id: jsonObject["id"]
    })
  }
}



import { ID, Response, GraphSelection } from "../GraphApi"
import * as Enums from "../Enums"
import * as Fragments from "../Fragments"

export interface TestQuery7Response_Arguments {

  /**
   * Returns a Shop resource corresponding to access token used in request.
   */
  shop: TestQuery7Response_Shop
}

export class TestQuery7Response implements Response {
  readonly shop: TestQuery7Response_Shop

  constructor(responseArguments: TestQuery7Response_Arguments) {
    this.shop = responseArguments.shop
  }

  static fromJson(jsonObject: any): TestQuery7Response {
    return new this({
      shop: TestQuery7Response_Shop.fromJson(jsonObject["shop"])
    })
  }

}

export interface TestQuery7Response_Shop_Arguments {
  /**
   * The shop's name.
   */
  name: string,
  /**
   * The three letter code for the shop's currency.
   */
  currencyCode: Enums.CurrencyCode,
  /**
   * The shop's primary unit of weight for products and shipping.
   */
  weightUnit: Enums.WeightUnit,
  /**
   * The shop's billing address information.
   */
  billingAddress: TestQuery7Response_Shop_BillingAddress,
  /**
   * List of the shop's installed fulfillment services.
   */
  fulfillmentServices: Array<TestQuery7Response_Shop_FulfillmentServices>,
  /**
   * List of orders placed on the shop.
   *
   * @deprecated Use `QueryRoot.orders` instead.
   */
  orders: TestQuery7Response_Shop_Orders
}
export class TestQuery7Response_Shop implements Response {
  readonly name: string
  readonly currencyCode: Enums.CurrencyCode
  readonly weightUnit: Enums.WeightUnit
  readonly billingAddress: TestQuery7Response_Shop_BillingAddress
  readonly fulfillmentServices: Array<TestQuery7Response_Shop_FulfillmentServices>
  readonly orders: TestQuery7Response_Shop_Orders
  constructor(responseArguments: TestQuery7Response_Shop_Arguments) {
    this.name = responseArguments.name
    this.currencyCode = responseArguments.currencyCode
    this.weightUnit = responseArguments.weightUnit
    this.billingAddress = responseArguments.billingAddress
    this.fulfillmentServices = responseArguments.fulfillmentServices
    this.orders = responseArguments.orders
  }
  static fromJson(jsonObject: any): TestQuery7Response_Shop {
    return new this({
      name: jsonObject["name"],
      currencyCode: Enums.CurrencyCodeUtil.safeValueOf(jsonObject["currencyCode"]),
      weightUnit: Enums.WeightUnitUtil.safeValueOf(jsonObject["weightUnit"]),
      billingAddress: TestQuery7Response_Shop_BillingAddress.fromJson(jsonObject["billingAddress"]),
      fulfillmentServices: jsonObject["fulfillmentServices"] == undefined || jsonObject["fulfillmentServices"] == null ? Array<TestQuery7Response_Shop_FulfillmentServices>() : Array.from(jsonObject["fulfillmentServices"], x => TestQuery7Response_Shop_FulfillmentServices.fromJson(x)),
      orders: TestQuery7Response_Shop_Orders.fromJson(jsonObject["orders"])
    })
  }
}
export interface TestQuery7Response_Shop_BillingAddress_Arguments {
  /**
   * The name of the city, district, village, or town.
   */
  city: string | undefined,
  /**
   * The name of the customer's company or organization.
   */
  company: string | undefined,
  /**
   * The latitude coordinate of the customer address.
   */
  latitude: number | undefined,
  /**
   * The longitude coordinate of the customer address.
   */
  longitude: number | undefined
}
export class TestQuery7Response_Shop_BillingAddress implements Response {
  readonly city: string | undefined
  readonly company: string | undefined
  readonly latitude: number | undefined
  readonly longitude: number | undefined
  constructor(responseArguments: TestQuery7Response_Shop_BillingAddress_Arguments) {
    this.city = responseArguments.city
    this.company = responseArguments.company
    this.latitude = responseArguments.latitude
    this.longitude = responseArguments.longitude
  }
  static fromJson(jsonObject: any): TestQuery7Response_Shop_BillingAddress {
    return new this({
      city: jsonObject["city"] != undefined && jsonObject["city"] != null ? jsonObject["city"] : undefined,
      company: jsonObject["company"] != undefined && jsonObject["company"] != null ? jsonObject["company"] : undefined,
      latitude: jsonObject["latitude"] != undefined && jsonObject["latitude"] != null ? jsonObject["latitude"] : undefined,
      longitude: jsonObject["longitude"] != undefined && jsonObject["longitude"] != null ? jsonObject["longitude"] : undefined
    })
  }
}
export interface TestQuery7Response_Shop_FulfillmentServices_Arguments {
  /**
   * The name of the fulfillment service as seen by merchants.
   */
  serviceName: string,
  /**
   * Human-readable unique identifier for this fulfillment service.
   */
  handle: string
}
export class TestQuery7Response_Shop_FulfillmentServices implements Response {
  readonly serviceName: string
  readonly handle: string
  constructor(responseArguments: TestQuery7Response_Shop_FulfillmentServices_Arguments) {
    this.serviceName = responseArguments.serviceName
    this.handle = responseArguments.handle
  }
  static fromJson(jsonObject: any): TestQuery7Response_Shop_FulfillmentServices {
    return new this({
      serviceName: jsonObject["serviceName"],
      handle: jsonObject["handle"]
    })
  }
}
export interface TestQuery7Response_Shop_Orders_Arguments {
  /**
   * A list of edges.
   */
  edges: Array<TestQuery7Response_Shop_Orders_Edges>
}
export class TestQuery7Response_Shop_Orders implements Response {
  readonly edges: Array<TestQuery7Response_Shop_Orders_Edges>
  constructor(responseArguments: TestQuery7Response_Shop_Orders_Arguments) {
    this.edges = responseArguments.edges
  }
  static fromJson(jsonObject: any): TestQuery7Response_Shop_Orders {
    return new this({
      edges: jsonObject["edges"] == undefined || jsonObject["edges"] == null ? Array<TestQuery7Response_Shop_Orders_Edges>() : Array.from(jsonObject["edges"], x => TestQuery7Response_Shop_Orders_Edges.fromJson(x))
    })
  }
}
export interface TestQuery7Response_Shop_Orders_Edges_Arguments {
  /**
   * The item at the end of OrderEdge.
   */
  node: TestQuery7Response_Shop_Orders_Edges_Node
}
export class TestQuery7Response_Shop_Orders_Edges implements Response {
  readonly node: TestQuery7Response_Shop_Orders_Edges_Node
  constructor(responseArguments: TestQuery7Response_Shop_Orders_Edges_Arguments) {
    this.node = responseArguments.node
  }
  static fromJson(jsonObject: any): TestQuery7Response_Shop_Orders_Edges {
    return new this({
      node: TestQuery7Response_Shop_Orders_Edges_Node.fromJson(jsonObject["node"])
    })
  }
}
export interface TestQuery7Response_Shop_Orders_Edges_Node_Arguments {
  /**
   * Unique identifier for the order that appears on the order.
   * For example, _#1000_ or _Store1001.
   * This value is not unique across multiple stores.
   */
  name: string,
  /**
   * Fulfillment status for the order that can be shown to the merchant.
   * This field does not capture all the possible details of an order's fulfillment state. It should only be used for display summary purposes.
   */
  displayFulfillmentStatus: Enums.OrderDisplayFulfillmentStatus,
  /**
   * List of shipments for the order.
   */
  fulfillments: Array<TestQuery7Response_Shop_Orders_Edges_Node_Fulfillments>
}
export class TestQuery7Response_Shop_Orders_Edges_Node implements Response {
  readonly name: string
  readonly displayFulfillmentStatus: Enums.OrderDisplayFulfillmentStatus
  readonly fulfillments: Array<TestQuery7Response_Shop_Orders_Edges_Node_Fulfillments>
  constructor(responseArguments: TestQuery7Response_Shop_Orders_Edges_Node_Arguments) {
    this.name = responseArguments.name
    this.displayFulfillmentStatus = responseArguments.displayFulfillmentStatus
    this.fulfillments = responseArguments.fulfillments
  }
  static fromJson(jsonObject: any): TestQuery7Response_Shop_Orders_Edges_Node {
    return new this({
      name: jsonObject["name"],
      displayFulfillmentStatus: Enums.OrderDisplayFulfillmentStatusUtil.safeValueOf(jsonObject["displayFulfillmentStatus"]),
      fulfillments: jsonObject["fulfillments"] == undefined || jsonObject["fulfillments"] == null ? Array<TestQuery7Response_Shop_Orders_Edges_Node_Fulfillments>() : Array.from(jsonObject["fulfillments"], x => TestQuery7Response_Shop_Orders_Edges_Node_Fulfillments.fromJson(x))
    })
  }
}
export interface TestQuery7Response_Shop_Orders_Edges_Node_Fulfillments_Arguments {
  /**
   * Human readable reference identifier for this fulfillment.
   */
  name: string,
  /**
   * The date and time when the fulfillment was created.
   */
  createdAt: Date,
  /**
   * The date and time when the fulfillment went into transit.
   */
  inTransitAt: Date | undefined,
  /**
   * The date that this fulfillment was delivered.
   */
  deliveredAt: Date | undefined,
  /**
   * Human readable display status for this fulfillment.
   */
  displayStatus: Enums.FulfillmentDisplayStatus | undefined,
  /**
   * The history of events associated with this fulfillment.
   */
  events: TestQuery7Response_Shop_Orders_Edges_Node_Fulfillments_Events
}
export class TestQuery7Response_Shop_Orders_Edges_Node_Fulfillments implements Response {
  readonly name: string
  readonly createdAt: Date
  readonly inTransitAt: Date | undefined
  readonly deliveredAt: Date | undefined
  readonly displayStatus: Enums.FulfillmentDisplayStatus | undefined
  readonly events: TestQuery7Response_Shop_Orders_Edges_Node_Fulfillments_Events
  constructor(responseArguments: TestQuery7Response_Shop_Orders_Edges_Node_Fulfillments_Arguments) {
    this.name = responseArguments.name
    this.createdAt = responseArguments.createdAt
    this.inTransitAt = responseArguments.inTransitAt
    this.deliveredAt = responseArguments.deliveredAt
    this.displayStatus = responseArguments.displayStatus
    this.events = responseArguments.events
  }
  static fromJson(jsonObject: any): TestQuery7Response_Shop_Orders_Edges_Node_Fulfillments {
    return new this({
      name: jsonObject["name"],
      createdAt: Date.fromJson(jsonObject["createdAt"]),
      inTransitAt: jsonObject["inTransitAt"] != undefined && jsonObject["inTransitAt"] != null ? Date.fromJson(jsonObject["inTransitAt"]) : undefined,
      deliveredAt: jsonObject["deliveredAt"] != undefined && jsonObject["deliveredAt"] != null ? Date.fromJson(jsonObject["deliveredAt"]) : undefined,
      displayStatus: jsonObject["displayStatus"] != undefined && jsonObject["displayStatus"] != null ? Enums.FulfillmentDisplayStatusUtil.safeValueOf(jsonObject["displayStatus"]) : undefined,
      events: TestQuery7Response_Shop_Orders_Edges_Node_Fulfillments_Events.fromJson(jsonObject["events"])
    })
  }
}
export interface TestQuery7Response_Shop_Orders_Edges_Node_Fulfillments_Events_Arguments {
  /**
   * A list of edges.
   */
  edges: Array<TestQuery7Response_Shop_Orders_Edges_Node_Fulfillments_Events_Edges>
}
export class TestQuery7Response_Shop_Orders_Edges_Node_Fulfillments_Events implements Response {
  readonly edges: Array<TestQuery7Response_Shop_Orders_Edges_Node_Fulfillments_Events_Edges>
  constructor(responseArguments: TestQuery7Response_Shop_Orders_Edges_Node_Fulfillments_Events_Arguments) {
    this.edges = responseArguments.edges
  }
  static fromJson(jsonObject: any): TestQuery7Response_Shop_Orders_Edges_Node_Fulfillments_Events {
    return new this({
      edges: jsonObject["edges"] == undefined || jsonObject["edges"] == null ? Array<TestQuery7Response_Shop_Orders_Edges_Node_Fulfillments_Events_Edges>() : Array.from(jsonObject["edges"], x => TestQuery7Response_Shop_Orders_Edges_Node_Fulfillments_Events_Edges.fromJson(x))
    })
  }
}
export interface TestQuery7Response_Shop_Orders_Edges_Node_Fulfillments_Events_Edges_Arguments {
  /**
   * The item at the end of FulfillmentEventEdge.
   */
  node: TestQuery7Response_Shop_Orders_Edges_Node_Fulfillments_Events_Edges_Node
}
export class TestQuery7Response_Shop_Orders_Edges_Node_Fulfillments_Events_Edges implements Response {
  readonly node: TestQuery7Response_Shop_Orders_Edges_Node_Fulfillments_Events_Edges_Node
  constructor(responseArguments: TestQuery7Response_Shop_Orders_Edges_Node_Fulfillments_Events_Edges_Arguments) {
    this.node = responseArguments.node
  }
  static fromJson(jsonObject: any): TestQuery7Response_Shop_Orders_Edges_Node_Fulfillments_Events_Edges {
    return new this({
      node: TestQuery7Response_Shop_Orders_Edges_Node_Fulfillments_Events_Edges_Node.fromJson(jsonObject["node"])
    })
  }
}
export interface TestQuery7Response_Shop_Orders_Edges_Node_Fulfillments_Events_Edges_Node_Arguments {
  /**
   * The status of this fulfillment event.
   */
  status: Enums.FulfillmentEventStatus
}
export class TestQuery7Response_Shop_Orders_Edges_Node_Fulfillments_Events_Edges_Node implements Response {
  readonly status: Enums.FulfillmentEventStatus
  constructor(responseArguments: TestQuery7Response_Shop_Orders_Edges_Node_Fulfillments_Events_Edges_Node_Arguments) {
    this.status = responseArguments.status
  }
  static fromJson(jsonObject: any): TestQuery7Response_Shop_Orders_Edges_Node_Fulfillments_Events_Edges_Node {
    return new this({
      status: Enums.FulfillmentEventStatusUtil.safeValueOf(jsonObject["status"])
    })
  }
}


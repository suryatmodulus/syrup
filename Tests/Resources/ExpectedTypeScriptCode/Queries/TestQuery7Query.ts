import { SimpleDocument } from "graphql-typed"
import { ID, GraphSelection, SyrupOperation, copyWithTypeCondtion } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"
import * as Fragments from "../Fragments"

export namespace TestQuery7QueryData {
  export interface Variables {
    first?: number | undefined
  }
export interface Shop {
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
  billingAddress: ShopBillingAddress,
  /**
   * List of the shop's installed fulfillment services.
   */
  fulfillmentServices: ShopFulfillmentServices[],
  /**
   * List of orders placed on the shop.
   *
   * @deprecated Use `QueryRoot.orders` instead.
   */
  orders: ShopOrders
}
export interface ShopBillingAddress {
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
export interface ShopFulfillmentServices {
  /**
   * The name of the fulfillment service as seen by merchants.
   */
  serviceName: string,
  /**
   * Human-readable unique identifier for this fulfillment service.
   */
  handle: string
}
export interface ShopOrders {
  /**
   * A list of edges.
   */
  edges: ShopOrdersEdges[]
}
export interface ShopOrdersEdges {
  /**
   * The item at the end of OrderEdge.
   */
  node: ShopOrdersEdgesNode
}
export interface ShopOrdersEdgesNode {
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
  fulfillments: ShopOrdersEdgesNodeFulfillments[]
}
export interface ShopOrdersEdgesNodeFulfillments {
  /**
   * Human readable reference identifier for this fulfillment.
   */
  name: string,
  /**
   * The date and time when the fulfillment was created.
   */
  createdAt: string,
  /**
   * The date and time when the fulfillment went into transit.
   */
  inTransitAt: string | undefined,
  /**
   * The date that this fulfillment was delivered.
   */
  deliveredAt: string | undefined,
  /**
   * Human readable display status for this fulfillment.
   */
  displayStatus: Enums.FulfillmentDisplayStatus | undefined,
  /**
   * The history of events associated with this fulfillment.
   */
  events: ShopOrdersEdgesNodeFulfillmentsEvents
}
export interface ShopOrdersEdgesNodeFulfillmentsEvents {
  /**
   * A list of edges.
   */
  edges: ShopOrdersEdgesNodeFulfillmentsEventsEdges[]
}
export interface ShopOrdersEdgesNodeFulfillmentsEventsEdges {
  /**
   * The item at the end of FulfillmentEventEdge.
   */
  node: ShopOrdersEdgesNodeFulfillmentsEventsEdgesNode
}
export interface ShopOrdersEdgesNodeFulfillmentsEventsEdgesNode {
  /**
   * The status of this fulfillment event.
   */
  status: Enums.FulfillmentEventStatus
}

}

export interface TestQuery7QueryData {

  /**
   * Returns a Shop resource corresponding to access token used in request.
   */
  shop: TestQuery7QueryData.Shop
}

const document: SimpleDocument<SyrupOperation, TestQuery7QueryData.Variables> = {
  id: "TestQuery7",
  name: "TestQuery7",
  source: "query TestQuery7(\$first: Int) { __typename shop { __typename name currencyCode weightUnit billingAddress { __typename city company latitude longitude } fulfillmentServices { __typename serviceName handle } orders(first: \$first) { __typename edges { __typename node { __typename name displayFulfillmentStatus fulfillments { __typename name createdAt inTransitAt deliveredAt displayStatus events(first: 10) { __typename edges { __typename node { __typename status } } } } } } } } }",
  __typeData: {
    operationType: 'query',
    selections: [
{
name: "shop",
type: { name: "Shop", definedType: "Object" },
arguments: {},
passedGID: null,
typeCondition: { name: "QueryRoot", definedType: "Object" },
directive: null,
selections: [
{
name: "name",
type: { name: "String", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Shop", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "currencyCode",
type: { name: "CurrencyCode", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Shop", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "weightUnit",
type: { name: "WeightUnit", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Shop", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "billingAddress",
type: { name: "MailingAddress", definedType: "Object" },
arguments: {},
passedGID: null,
typeCondition: { name: "Shop", definedType: "Object" },
directive: null,
selections: [
{
name: "city",
type: { name: "String", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "MailingAddress", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "company",
type: { name: "String", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "MailingAddress", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "latitude",
type: { name: "Float", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "MailingAddress", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "longitude",
type: { name: "Float", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "MailingAddress", definedType: "Object" },
directive: null,
selections: []}]}, 
{
name: "fulfillmentServices",
type: { name: "FulfillmentService", definedType: "Object" },
arguments: {},
passedGID: null,
typeCondition: { name: "Shop", definedType: "Object" },
directive: null,
selections: [
{
name: "serviceName",
type: { name: "String", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "FulfillmentService", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "handle",
type: { name: "String", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "FulfillmentService", definedType: "Object" },
directive: null,
selections: []}]}, 
{
name: "orders",
type: { name: "OrderConnection", definedType: "Object" },
arguments: { first: { isOperationVariable: true, key: "first" } },
passedGID: null,
typeCondition: { name: "Shop", definedType: "Object" },
directive: null,
selections: [
{
name: "edges",
type: { name: "OrderEdge", definedType: "Object" },
arguments: {},
passedGID: null,
typeCondition: { name: "OrderConnection", definedType: "Object" },
directive: null,
selections: [
{
name: "node",
type: { name: "Order", definedType: "Object" },
arguments: {},
passedGID: null,
typeCondition: { name: "OrderEdge", definedType: "Object" },
directive: null,
selections: [
{
name: "name",
type: { name: "String", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Order", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "displayFulfillmentStatus",
type: { name: "OrderDisplayFulfillmentStatus", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Order", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "fulfillments",
type: { name: "Fulfillment", definedType: "Object" },
arguments: {},
passedGID: null,
typeCondition: { name: "Order", definedType: "Object" },
directive: null,
selections: [
{
name: "name",
type: { name: "String", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Fulfillment", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "createdAt",
type: { name: "DateTime", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Fulfillment", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "inTransitAt",
type: { name: "DateTime", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Fulfillment", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "deliveredAt",
type: { name: "DateTime", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Fulfillment", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "displayStatus",
type: { name: "FulfillmentDisplayStatus", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Fulfillment", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "events",
type: { name: "FulfillmentEventConnection", definedType: "Object" },
arguments: { first: 10 },
passedGID: null,
typeCondition: { name: "Fulfillment", definedType: "Object" },
directive: null,
selections: [
{
name: "edges",
type: { name: "FulfillmentEventEdge", definedType: "Object" },
arguments: {},
passedGID: null,
typeCondition: { name: "FulfillmentEventConnection", definedType: "Object" },
directive: null,
selections: [
{
name: "node",
type: { name: "FulfillmentEvent", definedType: "Object" },
arguments: {},
passedGID: null,
typeCondition: { name: "FulfillmentEventEdge", definedType: "Object" },
directive: null,
selections: [
{
name: "status",
type: { name: "FulfillmentEventStatus", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "FulfillmentEvent", definedType: "Object" },
directive: null,
selections: []}]}]}]}]}]}]}]}]}]
  }
}
export default document

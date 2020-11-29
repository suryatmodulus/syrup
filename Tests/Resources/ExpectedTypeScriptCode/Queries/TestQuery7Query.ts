
import { ID, GraphSelection, Query } from "../GraphApi"
import { TestQuery7Response } from "../Responses/TestQuery7Response"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"
import * as Fragments from "../Fragments"

export interface TestQuery7QueryArguments {
  first?: number | undefined
}

export class TestQuery7Query extends Query<TestQuery7Response> {
    constructor(operationVariables: TestQuery7QueryArguments) {
      super(
        "query TestQuery7(\$first: Int) { __typename shop { __typename name currencyCode weightUnit billingAddress { __typename city company latitude longitude } fulfillmentServices { __typename serviceName handle } orders(first: \$first) { __typename edges { __typename node { __typename name displayFulfillmentStatus fulfillments { __typename name createdAt inTransitAt deliveredAt displayStatus events(first: 10) { __typename edges { __typename node { __typename status } } } } } } } } }",
        {
          "first": `${operationVariables.first}`
        },
        new Array<GraphSelection>(
new GraphSelection({
name: "shop",
type: "Shop",
cacheKey: `shop`,
passedGID: null,
typeCondition: "QueryRoot",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "name",
type: "String",
cacheKey: `name`,
passedGID: null,
typeCondition: "Shop",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "currencyCode",
type: "CurrencyCode",
cacheKey: `currencyCode`,
passedGID: null,
typeCondition: "Shop",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "weightUnit",
type: "WeightUnit",
cacheKey: `weightUnit`,
passedGID: null,
typeCondition: "Shop",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "billingAddress",
type: "MailingAddress",
cacheKey: `billingAddress`,
passedGID: null,
typeCondition: "Shop",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "city",
type: "String",
cacheKey: `city`,
passedGID: null,
typeCondition: "MailingAddress",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "company",
type: "String",
cacheKey: `company`,
passedGID: null,
typeCondition: "MailingAddress",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "latitude",
type: "Float",
cacheKey: `latitude`,
passedGID: null,
typeCondition: "MailingAddress",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "longitude",
type: "Float",
cacheKey: `longitude`,
passedGID: null,
typeCondition: "MailingAddress",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}))}), 
new GraphSelection({
name: "fulfillmentServices",
type: "FulfillmentService",
cacheKey: `fulfillmentServices`,
passedGID: null,
typeCondition: "Shop",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "serviceName",
type: "String",
cacheKey: `serviceName`,
passedGID: null,
typeCondition: "FulfillmentService",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "handle",
type: "String",
cacheKey: `handle`,
passedGID: null,
typeCondition: "FulfillmentService",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}))}), 
new GraphSelection({
name: "orders",
type: "OrderConnection",
cacheKey: `orders(first: ${operationVariables["first"]})`,
passedGID: null,
typeCondition: "Shop",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "edges",
type: "OrderEdge",
cacheKey: `edges`,
passedGID: null,
typeCondition: "OrderConnection",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "node",
type: "Order",
cacheKey: `node`,
passedGID: null,
typeCondition: "OrderEdge",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "name",
type: "String",
cacheKey: `name`,
passedGID: null,
typeCondition: "Order",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "displayFulfillmentStatus",
type: "OrderDisplayFulfillmentStatus",
cacheKey: `displayFulfillmentStatus`,
passedGID: null,
typeCondition: "Order",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "fulfillments",
type: "Fulfillment",
cacheKey: `fulfillments`,
passedGID: null,
typeCondition: "Order",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "name",
type: "String",
cacheKey: `name`,
passedGID: null,
typeCondition: "Fulfillment",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "createdAt",
type: "DateTime",
cacheKey: `createdAt`,
passedGID: null,
typeCondition: "Fulfillment",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "inTransitAt",
type: "DateTime",
cacheKey: `inTransitAt`,
passedGID: null,
typeCondition: "Fulfillment",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "deliveredAt",
type: "DateTime",
cacheKey: `deliveredAt`,
passedGID: null,
typeCondition: "Fulfillment",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "displayStatus",
type: "FulfillmentDisplayStatus",
cacheKey: `displayStatus`,
passedGID: null,
typeCondition: "Fulfillment",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "events",
type: "FulfillmentEventConnection",
cacheKey: `events(first: 10)`,
passedGID: null,
typeCondition: "Fulfillment",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "edges",
type: "FulfillmentEventEdge",
cacheKey: `edges`,
passedGID: null,
typeCondition: "FulfillmentEventConnection",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "node",
type: "FulfillmentEvent",
cacheKey: `node`,
passedGID: null,
typeCondition: "FulfillmentEventEdge",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "status",
type: "FulfillmentEventStatus",
cacheKey: `status`,
passedGID: null,
typeCondition: "FulfillmentEvent",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}))}))}))}))}))}))}))}))}))
      )
    }

    decodeResponse(jsonObject: Object): TestQuery7Response {
      return TestQuery7Response.fromJson(jsonObject)
    }
}
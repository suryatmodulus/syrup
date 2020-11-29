
import { ID, GraphSelection, Query } from "../GraphApi"
import { TestQuery6Response } from "../Responses/TestQuery6Response"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"
import * as Fragments from "../Fragments"

export interface TestQuery6QueryArguments {
  first?: number | undefined
}

export class TestQuery6Query extends Query<TestQuery6Response> {
    constructor(operationVariables: TestQuery6QueryArguments) {
      super(
        "query TestQuery6(\$first: Int) { __typename shop { __typename name currencyCode weightUnit billingAddress { __typename city company latitude longitude } fulfillmentServices { __typename serviceName handle } orders(first: \$first) { __typename edges { __typename node { __typename name displayFulfillmentStatus } } } } }",
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
selections: new Array<GraphSelection>()}))}))}))}))}))
      )
    }

    decodeResponse(jsonObject: Object): TestQuery6Response {
      return TestQuery6Response.fromJson(jsonObject)
    }
}
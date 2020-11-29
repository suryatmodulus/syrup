
import { ID, GraphSelection, Query } from "../GraphApi"
import { TestQuery3Response } from "../Responses/TestQuery3Response"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"
import * as Fragments from "../Fragments"

export class TestQuery3Query extends Query<TestQuery3Response> {
    constructor() {
      super(
        "query TestQuery3 { __typename customer(id: \\\"\\\") { __typename addresses { __typename country } defaultAddress { __typename city longitude latitude } } }",
        {
        },
        new Array<GraphSelection>(
new GraphSelection({
name: "customer",
type: "Customer",
cacheKey: `customer(id: )`,
passedGID: null,
typeCondition: "QueryRoot",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "addresses",
type: "MailingAddress",
cacheKey: `addresses`,
passedGID: null,
typeCondition: "Customer",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "country",
type: "String",
cacheKey: `country`,
passedGID: null,
typeCondition: "MailingAddress",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}))}), 
new GraphSelection({
name: "defaultAddress",
type: "MailingAddress",
cacheKey: `defaultAddress`,
passedGID: null,
typeCondition: "Customer",
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
name: "longitude",
type: "Float",
cacheKey: `longitude`,
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
selections: new Array<GraphSelection>()}))}))}))
      )
    }

    decodeResponse(jsonObject: Object): TestQuery3Response {
      return TestQuery3Response.fromJson(jsonObject)
    }
}
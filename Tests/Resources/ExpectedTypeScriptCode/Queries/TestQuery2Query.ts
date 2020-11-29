
import { ID, GraphSelection, Query } from "../GraphApi"
import { TestQuery2Response } from "../Responses/TestQuery2Response"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"
import * as Fragments from "../Fragments"

export class TestQuery2Query extends Query<TestQuery2Response> {
    constructor() {
      super(
        "query TestQuery2 { __typename shop { __typename name id email alerts { __typename action { __typename title url } description } } }",
        {
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
name: "id",
type: "ID",
cacheKey: `id`,
passedGID: null,
typeCondition: "Shop",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "email",
type: "String",
cacheKey: `email`,
passedGID: null,
typeCondition: "Shop",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "alerts",
type: "ShopAlert",
cacheKey: `alerts`,
passedGID: null,
typeCondition: "Shop",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "action",
type: "ShopAlertAction",
cacheKey: `action`,
passedGID: null,
typeCondition: "ShopAlert",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "title",
type: "String",
cacheKey: `title`,
passedGID: null,
typeCondition: "ShopAlertAction",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "url",
type: "URL",
cacheKey: `url`,
passedGID: null,
typeCondition: "ShopAlertAction",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}))}), 
new GraphSelection({
name: "description",
type: "String",
cacheKey: `description`,
passedGID: null,
typeCondition: "ShopAlert",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}))}))}))
      )
    }

    decodeResponse(jsonObject: Object): TestQuery2Response {
      return TestQuery2Response.fromJson(jsonObject)
    }
}
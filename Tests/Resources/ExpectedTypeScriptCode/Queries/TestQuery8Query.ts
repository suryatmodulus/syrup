
import { ID, GraphSelection, Query } from "../GraphApi"
import { TestQuery8Response } from "../Responses/TestQuery8Response"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"
import * as Fragments from "../Fragments"

export class TestQuery8Query extends Query<TestQuery8Response> {
    constructor() {
      super(
        "query TestQuery8 { __typename shop { __typename id firstProduct: products(first: 1) { __typename edges { __typename cursor node { __typename title } } } lastProduct: products(first: 1, reverse: true) { __typename edges { __typename cursor node { __typename title } } } } }",
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
name: "id",
type: "ID",
cacheKey: `id`,
passedGID: null,
typeCondition: "Shop",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "firstProduct",
type: "ProductConnection",
cacheKey: `firstProduct(first: 1)`,
passedGID: null,
typeCondition: "Shop",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "edges",
type: "ProductEdge",
cacheKey: `edges`,
passedGID: null,
typeCondition: "ProductConnection",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "cursor",
type: "String",
cacheKey: `cursor`,
passedGID: null,
typeCondition: "ProductEdge",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "node",
type: "Product",
cacheKey: `node`,
passedGID: null,
typeCondition: "ProductEdge",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "title",
type: "String",
cacheKey: `title`,
passedGID: null,
typeCondition: "Product",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}))}))}))}), 
new GraphSelection({
name: "lastProduct",
type: "ProductConnection",
cacheKey: `lastProduct(first: 1, reverse: true)`,
passedGID: null,
typeCondition: "Shop",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "edges",
type: "ProductEdge",
cacheKey: `edges`,
passedGID: null,
typeCondition: "ProductConnection",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "cursor",
type: "String",
cacheKey: `cursor`,
passedGID: null,
typeCondition: "ProductEdge",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "node",
type: "Product",
cacheKey: `node`,
passedGID: null,
typeCondition: "ProductEdge",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "title",
type: "String",
cacheKey: `title`,
passedGID: null,
typeCondition: "Product",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}))}))}))}))}))
      )
    }

    decodeResponse(jsonObject: Object): TestQuery8Response {
      return TestQuery8Response.fromJson(jsonObject)
    }
}
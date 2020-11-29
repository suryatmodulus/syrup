
import { ID, GraphSelection, Query } from "../GraphApi"
import { TestQuery4Response } from "../Responses/TestQuery4Response"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"
import * as Fragments from "../Fragments"

export class TestQuery4Query extends Query<TestQuery4Response> {
    constructor() {
      super(
        "query TestQuery4 { __typename shop { __typename id availableChannelApps(first: 250) { __typename edges { __typename node { __typename id title } } } } }",
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
name: "availableChannelApps",
type: "AppConnection",
cacheKey: `availableChannelApps(first: 250)`,
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
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "title",
type: "String",
cacheKey: `title`,
passedGID: null,
typeCondition: "App",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}))}))}))}))}))
      )
    }

    decodeResponse(jsonObject: Object): TestQuery4Response {
      return TestQuery4Response.fromJson(jsonObject)
    }
}
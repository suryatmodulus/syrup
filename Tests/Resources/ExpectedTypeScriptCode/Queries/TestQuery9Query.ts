
import { ID, GraphSelection, Query } from "../GraphApi"
import { TestQuery9Response } from "../Responses/TestQuery9Response"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"
import * as Fragments from "../Fragments"

export class TestQuery9Query extends Query<TestQuery9Response> {
    constructor() {
      super(
        "fragment BasicFragment on Customer { __typename id lastName } query TestQuery9 { __typename shop { __typename customers(first: 1) { __typename edges { __typename node { __typename id ... BasicFragment } } } } }",
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
name: "customers",
type: "CustomerConnection",
cacheKey: `customers(first: 1)`,
passedGID: null,
typeCondition: "Shop",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "edges",
type: "CustomerEdge",
cacheKey: `edges`,
passedGID: null,
typeCondition: "CustomerConnection",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "node",
type: "Customer",
cacheKey: `node`,
passedGID: null,
typeCondition: "CustomerEdge",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "id",
type: "ID",
cacheKey: `id`,
passedGID: null,
typeCondition: "Customer",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()})).concat(Fragments.BasicFragment.getSelections({})).map(x => x.copyWithTypeCondition("Customer"))}))}))}))}))
      )
    }

    decodeResponse(jsonObject: Object): TestQuery9Response {
      return TestQuery9Response.fromJson(jsonObject)
    }
}
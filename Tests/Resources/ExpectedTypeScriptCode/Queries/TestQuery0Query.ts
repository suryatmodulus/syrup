
import { ID, GraphSelection, Query } from "../GraphApi"
import { TestQuery0Response } from "../Responses/TestQuery0Response"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"
import * as Fragments from "../Fragments"

export class TestQuery0Query extends Query<TestQuery0Response> {
    constructor() {
      super(
        "query TestQuery0 { __typename nodes(ids: [\\\"gid://shopify/Customer/350635977\\\"]) { __typename id } }",
        {
        },
        new Array<GraphSelection>(
new GraphSelection({
name: "nodes",
type: "Node",
cacheKey: `nodes(ids: [gid://shopify/Customer/350635977])`,
passedGID: null,
typeCondition: "QueryRoot",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "id",
type: "ID",
cacheKey: `id`,
passedGID: null,
typeCondition: "Node",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}))}))
      )
    }

    decodeResponse(jsonObject: Object): TestQuery0Response {
      return TestQuery0Response.fromJson(jsonObject)
    }
}
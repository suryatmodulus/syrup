
import { ID, GraphSelection, Query } from "../GraphApi"
import { TestDeprecatedFieldsResponse } from "../Responses/TestDeprecatedFieldsResponse"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"
import * as Fragments from "../Fragments"

export interface TestDeprecatedFieldsQueryArguments {
  first?: number | undefined
}

export class TestDeprecatedFieldsQuery extends Query<TestDeprecatedFieldsResponse> {
    constructor(operationVariables: TestDeprecatedFieldsQueryArguments) {
      super(
        "query TestDeprecatedFields(\$first: Int) { __typename channels(first: \$first) { __typename edges { __typename node { __typename app { __typename id icon { __typename src } } } } } }",
        {
          "first": `${operationVariables.first}`
        },
        new Array<GraphSelection>(
new GraphSelection({
name: "channels",
type: "ChannelConnection",
cacheKey: `channels(first: ${operationVariables["first"]})`,
passedGID: null,
typeCondition: "QueryRoot",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "edges",
type: "ChannelEdge",
cacheKey: `edges`,
passedGID: null,
typeCondition: "ChannelConnection",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "node",
type: "Channel",
cacheKey: `node`,
passedGID: null,
typeCondition: "ChannelEdge",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "app",
type: "App",
cacheKey: `app`,
passedGID: null,
typeCondition: "Channel",
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
name: "icon",
type: "Image",
cacheKey: `icon`,
passedGID: null,
typeCondition: "App",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "src",
type: "URL",
cacheKey: `src`,
passedGID: null,
typeCondition: "Image",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}))}))}))}))}))}))
      )
    }

    decodeResponse(jsonObject: Object): TestDeprecatedFieldsResponse {
      return TestDeprecatedFieldsResponse.fromJson(jsonObject)
    }
}
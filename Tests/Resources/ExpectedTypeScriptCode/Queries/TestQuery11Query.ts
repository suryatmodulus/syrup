
import { ID, GraphSelection, Query } from "../GraphApi"
import { TestQuery11Response } from "../Responses/TestQuery11Response"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"
import * as Fragments from "../Fragments"

export interface TestQuery11QueryArguments {
  productId: ID
}

export class TestQuery11Query extends Query<TestQuery11Response> {
    constructor(operationVariables: TestQuery11QueryArguments) {
      super(
        "query TestQuery11(\$productId: ID!) { __typename node(id: \$productId) { __typename ... on Product { __typename id collections(first: 100) { __typename edges { __typename node { __typename id title } } } }... on ProductOption { __typename id } } }",
        {
          "productId": `${operationVariables.productId}`
        },
        new Array<GraphSelection>(
new GraphSelection({
name: "node",
type: "Node",
cacheKey: `node(id: ${operationVariables["productId"]})`,
passedGID: `${operationVariables["productId"]}`,
typeCondition: "QueryRoot",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "id",
type: "ID",
cacheKey: `id`,
passedGID: null,
typeCondition: "Product",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "collections",
type: "CollectionConnection",
cacheKey: `collections(first: 100)`,
passedGID: null,
typeCondition: "Product",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "edges",
type: "CollectionEdge",
cacheKey: `edges`,
passedGID: null,
typeCondition: "CollectionConnection",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "node",
type: "Collection",
cacheKey: `node`,
passedGID: null,
typeCondition: "CollectionEdge",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "id",
type: "ID",
cacheKey: `id`,
passedGID: null,
typeCondition: "Collection",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "title",
type: "String",
cacheKey: `title`,
passedGID: null,
typeCondition: "Collection",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}))}))}))}), 
new GraphSelection({
name: "id",
type: "ID",
cacheKey: `id`,
passedGID: null,
typeCondition: "ProductOption",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}))}))
      )
    }

    decodeResponse(jsonObject: Object): TestQuery11Response {
      return TestQuery11Response.fromJson(jsonObject)
    }
}
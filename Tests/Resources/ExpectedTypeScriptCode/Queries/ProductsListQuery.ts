
import { ID, GraphSelection, Query } from "../GraphApi"
import { ProductsListResponse } from "../Responses/ProductsListResponse"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"
import * as Fragments from "../Fragments"

export interface ProductsListQueryArguments {
  first?: number | undefined,
  before?: string | undefined,
  after?: string | undefined
}

export class ProductsListQuery extends Query<ProductsListResponse> {
    constructor(operationVariables: ProductsListQueryArguments) {
      super(
        "query ProductsList(\$first: Int, \$before: String, \$after: String) { __typename products(first: \$first, reverse: true, before: \$before, after: \$after, sortKey: CREATED_AT) { __typename edges { __typename node { __typename id title description } cursor } } }",
        {
          "first": `${operationVariables.first}`,
"before": `${operationVariables.before}`,
"after": `${operationVariables.after}`
        },
        new Array<GraphSelection>(
new GraphSelection({
name: "products",
type: "ProductConnection",
cacheKey: `products(first: ${operationVariables["first"]}, reverse: true, before: ${operationVariables["before"]}, after: ${operationVariables["after"]}, sortKey: CREATED_AT)`,
passedGID: null,
typeCondition: "QueryRoot",
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
name: "node",
type: "Product",
cacheKey: `node`,
passedGID: null,
typeCondition: "ProductEdge",
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
name: "title",
type: "String",
cacheKey: `title`,
passedGID: null,
typeCondition: "Product",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "description",
type: "String",
cacheKey: `description`,
passedGID: null,
typeCondition: "Product",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}))}), 
new GraphSelection({
name: "cursor",
type: "String",
cacheKey: `cursor`,
passedGID: null,
typeCondition: "ProductEdge",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}))}))}))
      )
    }

    decodeResponse(jsonObject: Object): ProductsListResponse {
      return ProductsListResponse.fromJson(jsonObject)
    }
}
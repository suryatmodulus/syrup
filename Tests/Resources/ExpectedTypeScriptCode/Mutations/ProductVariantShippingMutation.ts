
import { ID, GraphSelection, Mutation } from "../GraphApi"
import { ProductVariantShippingResponse } from "../Responses/ProductVariantShippingResponse"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"
import * as Fragments from "../Fragments"

export interface ProductVariantShippingMutationArguments {
  variantInput: Inputs.ProductVariantInput
}

export class ProductVariantShippingMutation extends Mutation<ProductVariantShippingResponse> {
    constructor(operationVariables: ProductVariantShippingMutationArguments) {
      super(
        "mutation ProductVariantShipping(\$variantInput: ProductVariantInput!) { __typename productVariantUpdate(input: \$variantInput) { __typename productVariant { __typename id weight weightUnit requiresShipping harmonizedSystemCode } userErrors { __typename message field } } }",
        {
          "variantInput": `${operationVariables.variantInput}`
        },
        new Array<GraphSelection>(
new GraphSelection({
name: "productVariantUpdate",
type: "ProductVariantUpdatePayload",
cacheKey: `productVariantUpdate(input: ${operationVariables["variantInput"]})`,
passedGID: null,
typeCondition: "Mutation",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "productVariant",
type: "ProductVariant",
cacheKey: `productVariant`,
passedGID: null,
typeCondition: "ProductVariantUpdatePayload",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "id",
type: "ID",
cacheKey: `id`,
passedGID: null,
typeCondition: "ProductVariant",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "weight",
type: "Float",
cacheKey: `weight`,
passedGID: null,
typeCondition: "ProductVariant",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "weightUnit",
type: "WeightUnit",
cacheKey: `weightUnit`,
passedGID: null,
typeCondition: "ProductVariant",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "requiresShipping",
type: "Boolean",
cacheKey: `requiresShipping`,
passedGID: null,
typeCondition: "ProductVariant",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "harmonizedSystemCode",
type: "String",
cacheKey: `harmonizedSystemCode`,
passedGID: null,
typeCondition: "ProductVariant",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}))}), 
new GraphSelection({
name: "userErrors",
type: "UserError",
cacheKey: `userErrors`,
passedGID: null,
typeCondition: "ProductVariantUpdatePayload",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "message",
type: "String",
cacheKey: `message`,
passedGID: null,
typeCondition: "UserError",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "field",
type: "String",
cacheKey: `field`,
passedGID: null,
typeCondition: "UserError",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}))}))}))
      )
    }

    decodeResponse(jsonObject: Object): ProductVariantShippingResponse {
      return ProductVariantShippingResponse.fromJson(jsonObject)
    }
}
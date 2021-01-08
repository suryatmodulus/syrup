import { SimpleDocument } from "graphql-typed"
import { ID, GraphSelection, SyrupOperation, copyWithTypeCondtion } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"
import * as Fragments from "../Fragments"

export namespace ProductVariantShippingMutationData {
  export interface Variables {
    variantInput: Inputs.ProductVariantInput
  }
export interface ProductVariantUpdate {
  /**
   * The updated variant.
   */
  productVariant: ProductVariantUpdateProductVariant | undefined,
  /**
   * List of errors that occurred executing the mutation.
   */
  userErrors: ProductVariantUpdateUserErrors[]
}
export interface ProductVariantUpdateProductVariant {
  /**
   * Globally unique identifier.
   */
  id: ID,
  /**
   * The weight of the product variant in the unit system specified with weight_unit.
   */
  weight: number | undefined,
  /**
   * The unit of measurement that applies to the product variant's weight. If you don't specify a value for weight_unit, then the shop's default unit of measurement is applied. Valid values: `g`, `kg`, `oz`, `lb`.
   */
  weightUnit: Enums.WeightUnit,
  /**
   * Whether a customer needs to provide a shipping address when placing an order for the product variant.
   *
   * @deprecated Use `InventoryItem.requiresShipping` instead.
   */
  requiresShipping: boolean,
  /**
   * The Harmonized System Code (or HS Tariff Code) for the variant.
   *
   * @deprecated Use `InventoryItem.harmonizedSystemCode` instead.
   */
  harmonizedSystemCode: string | undefined
}
export interface ProductVariantUpdateUserErrors {
  /**
   * The error message.
   */
  message: string,
  /**
   * Path to the input field which caused the error.
   */
  field: string[] | undefined
}

}

export interface ProductVariantShippingMutationData {

  /**
   * Updates a product variant.
   */
  productVariantUpdate: ProductVariantShippingMutationData.ProductVariantUpdate | undefined
}

const document: SimpleDocument<SyrupOperation, ProductVariantShippingMutationData.Variables> = {
  id: "ProductVariantShipping",
  name: "ProductVariantShipping",
  source: "mutation ProductVariantShipping(\$variantInput: ProductVariantInput!) { __typename productVariantUpdate(input: \$variantInput) { __typename productVariant { __typename id weight weightUnit requiresShipping harmonizedSystemCode } userErrors { __typename message field } } }",
  __typeData: {
    operationType: 'mutation',
    selections: [
{
name: "productVariantUpdate",
type: { name: "ProductVariantUpdatePayload", definedType: "Object" },
arguments: { input: { type: "OperationVariableKey", value: "variantInput" } },
passedGID: null,
typeCondition: { name: "Mutation", definedType: "Object" },
directive: null,
selections: [
{
name: "productVariant",
type: { name: "ProductVariant", definedType: "Object" },
arguments: {},
passedGID: null,
typeCondition: { name: "ProductVariantUpdatePayload", definedType: "Object" },
directive: null,
selections: [
{
name: "id",
type: { name: "ID", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "ProductVariant", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "weight",
type: { name: "Float", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "ProductVariant", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "weightUnit",
type: { name: "WeightUnit", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "ProductVariant", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "requiresShipping",
type: { name: "Boolean", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "ProductVariant", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "harmonizedSystemCode",
type: { name: "String", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "ProductVariant", definedType: "Object" },
directive: null,
selections: []}]}, 
{
name: "userErrors",
type: { name: "UserError", definedType: "Object" },
arguments: {},
passedGID: null,
typeCondition: { name: "ProductVariantUpdatePayload", definedType: "Object" },
directive: null,
selections: [
{
name: "message",
type: { name: "String", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "UserError", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "field",
type: { name: "String", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "UserError", definedType: "Object" },
directive: null,
selections: []}]}]}]
  }
}
export default document

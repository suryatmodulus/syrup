import { SimpleDocument } from "graphql-typed"
import { ID, GraphSelection, SyrupOperation, copyWithTypeCondtion } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"
import * as Fragments from "../Fragments"

export namespace TestQuery5QueryData {
export interface Shop {
  /**
   * The shop's name.
   */
  name: string,
  /**
   * The three letter code for the shop's currency.
   */
  currencyCode: Enums.CurrencyCode,
  /**
   * The shop's primary unit of weight for products and shipping.
   */
  weightUnit: Enums.WeightUnit,
  /**
   * The shop's billing address information.
   */
  billingAddress: ShopBillingAddress,
  /**
   * List of the shop's installed fulfillment services.
   */
  fulfillmentServices: ShopFulfillmentServices[]
}
export interface ShopBillingAddress {
  /**
   * The name of the city, district, village, or town.
   */
  city: string | undefined,
  /**
   * The name of the customer's company or organization.
   */
  company: string | undefined,
  /**
   * The latitude coordinate of the customer address.
   */
  latitude: number | undefined,
  /**
   * The longitude coordinate of the customer address.
   */
  longitude: number | undefined
}
export interface ShopFulfillmentServices {
  /**
   * The name of the fulfillment service as seen by merchants.
   */
  serviceName: string,
  /**
   * Human-readable unique identifier for this fulfillment service.
   */
  handle: string
}

}

export interface TestQuery5QueryData {

  /**
   * Returns a Shop resource corresponding to access token used in request.
   */
  shop: TestQuery5QueryData.Shop
}

const document: SimpleDocument<SyrupOperation, {}> = {
  id: "TestQuery5",
  name: "TestQuery5",
  source: "query TestQuery5 { __typename shop { __typename name currencyCode weightUnit billingAddress { __typename city company latitude longitude } fulfillmentServices { __typename serviceName handle } } }",
  __typeData: {
    operationType: 'query',
    selections: [
{
name: "shop",
type: { name: "Shop", definedType: "Object" },
arguments: {},
passedGID: null,
typeCondition: { name: "QueryRoot", definedType: "Object" },
directive: null,
selections: [
{
name: "name",
type: { name: "String", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Shop", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "currencyCode",
type: { name: "CurrencyCode", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Shop", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "weightUnit",
type: { name: "WeightUnit", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Shop", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "billingAddress",
type: { name: "MailingAddress", definedType: "Object" },
arguments: {},
passedGID: null,
typeCondition: { name: "Shop", definedType: "Object" },
directive: null,
selections: [
{
name: "city",
type: { name: "String", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "MailingAddress", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "company",
type: { name: "String", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "MailingAddress", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "latitude",
type: { name: "Float", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "MailingAddress", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "longitude",
type: { name: "Float", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "MailingAddress", definedType: "Object" },
directive: null,
selections: []}]}, 
{
name: "fulfillmentServices",
type: { name: "FulfillmentService", definedType: "Object" },
arguments: {},
passedGID: null,
typeCondition: { name: "Shop", definedType: "Object" },
directive: null,
selections: [
{
name: "serviceName",
type: { name: "String", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "FulfillmentService", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "handle",
type: { name: "String", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "FulfillmentService", definedType: "Object" },
directive: null,
selections: []}]}]}]
  }
}
export default document

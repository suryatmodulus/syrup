import { ID, GraphSelection, SyrupOperation, copyWithTypeCondtion } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"
import * as Fragments from "../Fragments"

export namespace TestQuery1QueryData {
export interface Shop {
  /**
   * Globally unique identifier.
   */
  id: ID,
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
   * Alert message that appears in the Shopify admin.
   */
  alerts: ShopAlerts[],
  /**
   * Countries that the shop ships to.
   */
  shipsToCountries: Enums.CountryCode[],
  /**
   * Settings related to payments.
   */
  paymentSettings: ShopPaymentSettings
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
export interface ShopAlerts {
  /**
   * Description of the alert.
   */
  description: string
}
export interface ShopPaymentSettings {
  /**
   * List of the digital wallets which the shop supports.
   */
  supportedDigitalWallets: Enums.DigitalWallet[]
}

}

export interface TestQuery1QueryData {

  /**
   * Returns a Shop resource corresponding to access token used in request.
   */
  shop: TestQuery1QueryData.Shop
}

const document: SyrupOperation<TestQuery1QueryData, {}> = {
  id: "0372694122f1af529fd4aeeb82b099e3d9a424d34e64f1ad2945f56cbde07cd1",
  name: "TestQuery1",
  source: "query TestQuery1 { __typename shop { __typename id name currencyCode weightUnit billingAddress { __typename city company latitude longitude } alerts { __typename description } shipsToCountries paymentSettings { __typename supportedDigitalWallets } } }",
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
name: "id",
type: { name: "ID", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Shop", definedType: "Object" },
directive: null,
selections: []}, 
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
name: "alerts",
type: { name: "ShopAlert", definedType: "Object" },
arguments: {},
passedGID: null,
typeCondition: { name: "Shop", definedType: "Object" },
directive: null,
selections: [
{
name: "description",
type: { name: "String", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "ShopAlert", definedType: "Object" },
directive: null,
selections: []}]}, 
{
name: "shipsToCountries",
type: { name: "CountryCode", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Shop", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "paymentSettings",
type: { name: "PaymentSettings", definedType: "Object" },
arguments: {},
passedGID: null,
typeCondition: { name: "Shop", definedType: "Object" },
directive: null,
selections: [
{
name: "supportedDigitalWallets",
type: { name: "DigitalWallet", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "PaymentSettings", definedType: "Object" },
directive: null,
selections: []}]}]}]
}
export default document

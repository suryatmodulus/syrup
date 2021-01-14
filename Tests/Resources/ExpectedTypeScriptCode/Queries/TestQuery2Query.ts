import { ID, GraphSelection, SyrupOperation, copyWithTypeCondtion } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"
import * as Fragments from "../Fragments"

export namespace TestQuery2QueryData {
export interface Shop {
  /**
   * The shop's name.
   */
  name: string,
  /**
   * Globally unique identifier.
   */
  id: ID,
  /**
   * The shop owner's email address.
   * Shopify will use this email address to communicate with the shop owner.
   */
  email: string,
  /**
   * Alert message that appears in the Shopify admin.
   */
  alerts: ShopAlerts[]
}
export interface ShopAlerts {
  /**
   * Button in the alert that links to related information.
   */
  action: ShopAlertsAction,
  /**
   * Description of the alert.
   */
  description: string
}
export interface ShopAlertsAction {
  /**
   * Action title.
   */
  title: string,
  /**
   * Action target URL.
   */
  url: string
}

}

export interface TestQuery2QueryData {

  /**
   * Returns a Shop resource corresponding to access token used in request.
   */
  shop: TestQuery2QueryData.Shop
}

const document: SyrupOperation<TestQuery2QueryData, {}> = {
  id: "61dd494be186ccaf1c1306459f7e3307affaf6bbaa3c0e87b5cdba9d5fdcd011",
  name: "TestQuery2",
  source: "query TestQuery2 { __typename shop { __typename name id email alerts { __typename action { __typename title url } description } } }",
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
name: "id",
type: { name: "ID", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Shop", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "email",
type: { name: "String", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Shop", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "alerts",
type: { name: "ShopAlert", definedType: "Object" },
arguments: {},
passedGID: null,
typeCondition: { name: "Shop", definedType: "Object" },
directive: null,
selections: [
{
name: "action",
type: { name: "ShopAlertAction", definedType: "Object" },
arguments: {},
passedGID: null,
typeCondition: { name: "ShopAlert", definedType: "Object" },
directive: null,
selections: [
{
name: "title",
type: { name: "String", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "ShopAlertAction", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "url",
type: { name: "URL", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "ShopAlertAction", definedType: "Object" },
directive: null,
selections: []}]}, 
{
name: "description",
type: { name: "String", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "ShopAlert", definedType: "Object" },
directive: null,
selections: []}]}]}]
}
export default document

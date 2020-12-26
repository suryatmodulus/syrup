import { SimpleDocument } from "graphql-typed"
import { ID, GraphSelection, SyrupOperation, copyWithTypeCondtion } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"
import * as Fragments from "../Fragments"

export namespace TestQuery4QueryData {
export interface Shop {
  /**
   * Globally unique identifier.
   */
  id: ID,
  /**
   * List of sales channels not currently installed on the shop.
   */
  availableChannelApps: ShopAvailableChannelApps
}
export interface ShopAvailableChannelApps {
  /**
   * A list of edges.
   */
  edges: ShopAvailableChannelAppsEdges[]
}
export interface ShopAvailableChannelAppsEdges {
  /**
   * The item at the end of AppEdge.
   */
  node: ShopAvailableChannelAppsEdgesNode
}
export interface ShopAvailableChannelAppsEdgesNode {
  /**
   * Globally unique identifier.
   */
  id: ID,
  /**
   * Name of the app.
   */
  title: string
}

}

export interface TestQuery4QueryData {

  /**
   * Returns a Shop resource corresponding to access token used in request.
   */
  shop: TestQuery4QueryData.Shop
}

const document: SimpleDocument<SyrupOperation, {}> = {
  id: "TestQuery4",
  name: "TestQuery4",
  source: "query TestQuery4 { __typename shop { __typename id availableChannelApps(first: 250) { __typename edges { __typename node { __typename id title } } } } }",
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
name: "id",
type: { name: "ID", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Shop", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "availableChannelApps",
type: { name: "AppConnection", definedType: "Object" },
arguments: { first: 250 },
passedGID: null,
typeCondition: { name: "Shop", definedType: "Object" },
directive: null,
selections: [
{
name: "edges",
type: { name: "AppEdge", definedType: "Object" },
arguments: {},
passedGID: null,
typeCondition: { name: "AppConnection", definedType: "Object" },
directive: null,
selections: [
{
name: "node",
type: { name: "App", definedType: "Object" },
arguments: {},
passedGID: null,
typeCondition: { name: "AppEdge", definedType: "Object" },
directive: null,
selections: [
{
name: "id",
type: { name: "ID", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "App", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "title",
type: { name: "String", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "App", definedType: "Object" },
directive: null,
selections: []}]}]}]}]}]
  }
}
export default document

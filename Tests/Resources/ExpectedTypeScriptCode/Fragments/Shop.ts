import { ID, GraphSelection } from "../GraphApi"
import * as Enums from "../Enums"

export interface Shop {

  /**
   * Returns a Shop resource corresponding to access token used in request.
   */
  shop: ShopShop
}

export interface ShopShop {
  /**
   * List of sales channels not currently installed on the shop.
   */
  availableChannelApps: ShopShopAvailableChannelApps
}
export interface ShopShopAvailableChannelApps {
  /**
   * A list of edges.
   */
  edges: ShopShopAvailableChannelAppsEdges[]
}
export interface ShopShopAvailableChannelAppsEdges {
  /**
   * The item at the end of AppEdge.
   */
  node: ShopShopAvailableChannelAppsEdgesNode
}
export interface ShopShopAvailableChannelAppsEdgesNode {
  /**
   * Globally unique identifier.
   */
  id: ID
}

export const shopSelections = [
{
name: "shop",
type: { name: "Shop", definedType: "Object" },
arguments: {},
passedGID: null,
typeCondition: { name: "QueryRoot", definedType: "Object" },
directive: null,
selections: [
{
name: "availableChannelApps",
type: { name: "AppConnection", definedType: "Object" },
arguments: { first: { type: "OperationVariableKey", value: "first" } },
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
selections: []}]}]}]}]}]

import { SimpleDocument } from "graphql-typed"
import { ID, GraphSelection, SyrupOperation, copyWithTypeCondtion } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"
import * as Fragments from "../Fragments"

export namespace TestQuery9QueryData {
export interface Shop {
  /**
   * Customer accounts associated to the shop.
   *
   * @deprecated Use `QueryRoot.customers` instead.
   */
  customers: ShopCustomers
}
export interface ShopCustomers {
  /**
   * A list of edges.
   */
  edges: ShopCustomersEdges[]
}
export interface ShopCustomersEdges {
  /**
   * The item at the end of CustomerEdge.
   */
  node: ShopCustomersEdgesNode
}
export interface ShopCustomersEdgesNode {
  /**
   * Globally unique identifier.
   */
  id: ID,
  basicFragment: Fragments.BasicFragment
}

}

export interface TestQuery9QueryData {

  /**
   * Returns a Shop resource corresponding to access token used in request.
   */
  shop: TestQuery9QueryData.Shop
}

const document: SimpleDocument<SyrupOperation, {}> = {
  id: "TestQuery9",
  name: "TestQuery9",
  source: "fragment BasicFragment on Customer { __typename id lastName } query TestQuery9 { __typename shop { __typename customers(first: 1) { __typename edges { __typename node { __typename id ... BasicFragment } } } } }",
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
name: "customers",
type: { name: "CustomerConnection", definedType: "Object" },
arguments: { first: 1 },
passedGID: null,
typeCondition: { name: "Shop", definedType: "Object" },
directive: null,
selections: [
{
name: "edges",
type: { name: "CustomerEdge", definedType: "Object" },
arguments: {},
passedGID: null,
typeCondition: { name: "CustomerConnection", definedType: "Object" },
directive: null,
selections: [
{
name: "node",
type: { name: "Customer", definedType: "Object" },
arguments: {},
passedGID: null,
typeCondition: { name: "CustomerEdge", definedType: "Object" },
directive: null,
selections: [
{
name: "id",
type: { name: "ID", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Customer", definedType: "Object" },
directive: null,
selections: []}].concat(Fragments.basicFragmentSelections).map(x => x.copyWithTypeCondition("{ name: "Customer", definedType: "Object" }"))}]}]}]}]
  }
}
export default document

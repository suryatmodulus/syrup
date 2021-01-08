import { SimpleDocument } from "graphql-typed"
import { ID, GraphSelection, SyrupOperation, copyWithTypeCondtion } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"
import * as Fragments from "../Fragments"

export namespace TestQuery8QueryData {
export interface Shop {
  /**
   * Globally unique identifier.
   */
  id: ID,
  /**
   * List of the shop's products.
   *
   * @deprecated Use `QueryRoot.products`.
   */
  firstProduct: ShopFirstProduct,
  /**
   * List of the shop's products.
   *
   * @deprecated Use `QueryRoot.products`.
   */
  lastProduct: ShopLastProduct
}
export interface ShopFirstProduct {
  /**
   * A list of edges.
   */
  edges: ShopFirstProductEdges[]
}
export interface ShopFirstProductEdges {
  /**
   * A cursor for use in pagination.
   */
  cursor: string,
  /**
   * The item at the end of ProductEdge.
   */
  node: ShopFirstProductEdgesNode
}
export interface ShopFirstProductEdgesNode {
  /**
   * The title of the product.
   */
  title: string
}
export interface ShopLastProduct {
  /**
   * A list of edges.
   */
  edges: ShopLastProductEdges[]
}
export interface ShopLastProductEdges {
  /**
   * A cursor for use in pagination.
   */
  cursor: string,
  /**
   * The item at the end of ProductEdge.
   */
  node: ShopLastProductEdgesNode
}
export interface ShopLastProductEdgesNode {
  /**
   * The title of the product.
   */
  title: string
}

}

export interface TestQuery8QueryData {

  /**
   * Returns a Shop resource corresponding to access token used in request.
   */
  shop: TestQuery8QueryData.Shop
}

const document: SimpleDocument<SyrupOperation, {}> = {
  id: "TestQuery8",
  name: "TestQuery8",
  source: "query TestQuery8 { __typename shop { __typename id firstProduct: products(first: 1) { __typename edges { __typename cursor node { __typename title } } } lastProduct: products(first: 1, reverse: true) { __typename edges { __typename cursor node { __typename title } } } } }",
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
name: "firstProduct",
type: { name: "ProductConnection", definedType: "Object" },
arguments: { first: { type: "IntValue", value: 1 } },
passedGID: null,
typeCondition: { name: "Shop", definedType: "Object" },
directive: null,
selections: [
{
name: "edges",
type: { name: "ProductEdge", definedType: "Object" },
arguments: {},
passedGID: null,
typeCondition: { name: "ProductConnection", definedType: "Object" },
directive: null,
selections: [
{
name: "cursor",
type: { name: "String", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "ProductEdge", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "node",
type: { name: "Product", definedType: "Object" },
arguments: {},
passedGID: null,
typeCondition: { name: "ProductEdge", definedType: "Object" },
directive: null,
selections: [
{
name: "title",
type: { name: "String", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Product", definedType: "Object" },
directive: null,
selections: []}]}]}]}, 
{
name: "lastProduct",
type: { name: "ProductConnection", definedType: "Object" },
arguments: { first: { type: "IntValue", value: 1 }, reverse: { type: "BooleanValue", value: true } },
passedGID: null,
typeCondition: { name: "Shop", definedType: "Object" },
directive: null,
selections: [
{
name: "edges",
type: { name: "ProductEdge", definedType: "Object" },
arguments: {},
passedGID: null,
typeCondition: { name: "ProductConnection", definedType: "Object" },
directive: null,
selections: [
{
name: "cursor",
type: { name: "String", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "ProductEdge", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "node",
type: { name: "Product", definedType: "Object" },
arguments: {},
passedGID: null,
typeCondition: { name: "ProductEdge", definedType: "Object" },
directive: null,
selections: [
{
name: "title",
type: { name: "String", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Product", definedType: "Object" },
directive: null,
selections: []}]}]}]}]}]
  }
}
export default document

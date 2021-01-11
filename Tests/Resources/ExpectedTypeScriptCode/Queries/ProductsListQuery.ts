import { SimpleDocument } from "graphql-typed"
import { ID, GraphSelection, SyrupOperation, copyWithTypeCondtion } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"
import * as Fragments from "../Fragments"

export namespace ProductsListQueryData {
  export interface Variables {
    first?: number | undefined,
    before?: string | undefined,
    after?: string | undefined
  }
export interface Products {
  /**
   * A list of edges.
   */
  edges: ProductsEdges[]
}
export interface ProductsEdges {
  /**
   * The item at the end of ProductEdge.
   */
  node: ProductsEdgesNode,
  /**
   * A cursor for use in pagination.
   */
  cursor: string
}
export interface ProductsEdgesNode {
  /**
   * Globally unique identifier.
   */
  id: ID,
  /**
   * The title of the product.
   */
  title: string,
  /**
   * A stripped description of the product, single line with HTML tags removed.
   */
  description: string
}

}

export interface ProductsListQueryData {

  /**
   * List of products.
   */
  products: ProductsListQueryData.Products
}

const document: SimpleDocument<SyrupOperation, ProductsListQueryData.Variables> = {
  id: "fb66b396a448514165511363b2dd4240640e9cc0bb880f30df7da076efb2c3c2",
  name: "ProductsList",
  source: "query ProductsList(\$first: Int, \$before: String, \$after: String) { __typename products(first: \$first, reverse: true, before: \$before, after: \$after, sortKey: CREATED_AT) { __typename edges { __typename node { __typename id title description } cursor } } }",
  __typeData: {
    operationType: 'query',
    selections: [
{
name: "products",
type: { name: "ProductConnection", definedType: "Object" },
arguments: { first: { type: "OperationVariableKey", value: "first" }, reverse: { type: "BooleanValue", value: true }, before: { type: "OperationVariableKey", value: "before" }, after: { type: "OperationVariableKey", value: "after" }, sortKey: { type: "EnumValue", value: "CREATED_AT" } },
passedGID: null,
typeCondition: { name: "QueryRoot", definedType: "Object" },
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
name: "node",
type: { name: "Product", definedType: "Object" },
arguments: {},
passedGID: null,
typeCondition: { name: "ProductEdge", definedType: "Object" },
directive: null,
selections: [
{
name: "id",
type: { name: "ID", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Product", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "title",
type: { name: "String", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Product", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "description",
type: { name: "String", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Product", definedType: "Object" },
directive: null,
selections: []}]}, 
{
name: "cursor",
type: { name: "String", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "ProductEdge", definedType: "Object" },
directive: null,
selections: []}]}]}]
  }
}
export default document

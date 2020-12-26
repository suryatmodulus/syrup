import { SimpleDocument } from "graphql-typed"
import { ID, GraphSelection, SyrupOperation, copyWithTypeCondtion } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"
import * as Fragments from "../Fragments"

export namespace TestQuery0QueryData {

export interface Nodes {
  realized: {},
  /**
   * Globally unique identifier.
   */
  id: ID
}

}

export interface TestQuery0QueryData {

  /**
   * Returns the list of nodes with the given IDs.
   */
  nodes: TestQuery0QueryData.Nodes | undefined[]
}

const document: SimpleDocument<SyrupOperation, {}> = {
  id: "TestQuery0",
  name: "TestQuery0",
  source: "query TestQuery0 { __typename nodes(ids: [\\\"gid://shopify/Customer/350635977\\\"]) { __typename id } }",
  __typeData: {
    operationType: 'query',
    selections: [
{
name: "nodes",
type: { name: "Node", definedType: "Interface" },
arguments: { ids: [gid://shopify/Customer/350635977] },
passedGID: null,
typeCondition: { name: "QueryRoot", definedType: "Object" },
directive: null,
selections: [
{
name: "id",
type: { name: "ID", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Node", definedType: "Interface" },
directive: null,
selections: []}]}]
  }
}
export default document

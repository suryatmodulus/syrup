import { SimpleDocument } from "graphql-typed"
import { ID, GraphSelection, SyrupOperation, copyWithTypeCondtion } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"
import * as Fragments from "../Fragments"

export namespace TestMutation0MutationData {
  export interface Variables {
    input: Inputs.CustomerInput
  }
export interface CustomerUpdate {
  /**
   * The updated customer.
   */
  customer: CustomerUpdateCustomer | undefined
}
export interface CustomerUpdateCustomer {
  /**
   * Globally unique identifier.
   */
  id: ID
}

}

export interface TestMutation0MutationData {

  /**
   * Updates a customer's attributes.
   */
  customerUpdate: TestMutation0MutationData.CustomerUpdate | undefined
}

const document: SimpleDocument<SyrupOperation, TestMutation0MutationData.Variables> = {
  id: "4889a09d381c0be1631a25b96073a5443a565ebd54297e0317f09fd6f0877ec9",
  name: "TestMutation0",
  source: "mutation TestMutation0(\$input: CustomerInput!) { __typename customerUpdate(input: \$input) { __typename customer { __typename id } } }",
  __typeData: {
    operationType: 'mutation',
    selections: [
{
name: "customerUpdate",
type: { name: "CustomerUpdatePayload", definedType: "Object" },
arguments: { input: { type: "OperationVariableKey", value: "input" } },
passedGID: null,
typeCondition: { name: "Mutation", definedType: "Object" },
directive: null,
selections: [
{
name: "customer",
type: { name: "Customer", definedType: "Object" },
arguments: {},
passedGID: null,
typeCondition: { name: "CustomerUpdatePayload", definedType: "Object" },
directive: null,
selections: [
{
name: "id",
type: { name: "ID", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Customer", definedType: "Object" },
directive: null,
selections: []}]}]}]
  }
}
export default document

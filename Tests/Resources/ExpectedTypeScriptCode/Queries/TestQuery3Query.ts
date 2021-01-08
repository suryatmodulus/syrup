import { SimpleDocument } from "graphql-typed"
import { ID, GraphSelection, SyrupOperation, copyWithTypeCondtion } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"
import * as Fragments from "../Fragments"

export namespace TestQuery3QueryData {
export interface Customer {
  /**
   * A list of addresses associated with the customer.
   */
  addresses: CustomerAddresses[],
  /**
   * The default address associated with the customer.
   */
  defaultAddress: CustomerDefaultAddress | undefined
}
export interface CustomerAddresses {
  /**
   * The name of the country.
   */
  country: string | undefined
}
export interface CustomerDefaultAddress {
  /**
   * The name of the city, district, village, or town.
   */
  city: string | undefined,
  /**
   * The longitude coordinate of the customer address.
   */
  longitude: number | undefined,
  /**
   * The latitude coordinate of the customer address.
   */
  latitude: number | undefined
}

}

export interface TestQuery3QueryData {

  /**
   * Returns a Customer resource by ID.
   */
  customer: TestQuery3QueryData.Customer | undefined
}

const document: SimpleDocument<SyrupOperation, {}> = {
  id: "TestQuery3",
  name: "TestQuery3",
  source: "query TestQuery3 { __typename customer(id: \\\"\\\") { __typename addresses { __typename country } defaultAddress { __typename city longitude latitude } } }",
  __typeData: {
    operationType: 'query',
    selections: [
{
name: "customer",
type: { name: "Customer", definedType: "Object" },
arguments: { id: { type: "StringValue", value: "" } },
passedGID: null,
typeCondition: { name: "QueryRoot", definedType: "Object" },
directive: null,
selections: [
{
name: "addresses",
type: { name: "MailingAddress", definedType: "Object" },
arguments: {},
passedGID: null,
typeCondition: { name: "Customer", definedType: "Object" },
directive: null,
selections: [
{
name: "country",
type: { name: "String", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "MailingAddress", definedType: "Object" },
directive: null,
selections: []}]}, 
{
name: "defaultAddress",
type: { name: "MailingAddress", definedType: "Object" },
arguments: {},
passedGID: null,
typeCondition: { name: "Customer", definedType: "Object" },
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
name: "longitude",
type: { name: "Float", definedType: "Scalar" },
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
selections: []}]}]}]
  }
}
export default document

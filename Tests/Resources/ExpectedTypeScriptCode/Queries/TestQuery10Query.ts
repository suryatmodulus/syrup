import { SimpleDocument } from "graphql-typed"
import { ID, GraphSelection, SyrupOperation, copyWithTypeCondtion } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"
import * as Fragments from "../Fragments"

export namespace TestQuery10QueryData {
  export interface Variables {
    priceRuleId: ID
  }
export interface PriceRule {
  /**
   * Globally unique identifier.
   */
  id: ID,
  /**
   * The value of the price rule.
   *
   * @deprecated Use `valueV2` instead
   */
  value: PriceRuleValue,
  /**
   * The value of the price rule.
   */
  valueV2: PriceRuleValueV2
}
export interface PriceRuleValue {
  realized: PriceRuleValueRealizedPriceRuleFixedAmountValue | PriceRuleValueRealizedPriceRulePercentValue | {}
}
export interface PriceRuleValueRealizedPriceRuleFixedAmountValue {
  /**
   * The monetary value of the price rule.
   */
  amount: number
}
export interface PriceRuleValueRealizedPriceRulePercentValue {
  /**
   * The percent value of the price rule.
   */
  percentage: number
}
export interface PriceRuleValueV2 {
  realized: PriceRuleValueV2RealizedMoneyV2 | PriceRuleValueV2RealizedPricingPercentageValue | {}
}
export interface PriceRuleValueV2RealizedMoneyV2 {
  /**
   * Decimal money amount.
   */
  amount: number
}
export interface PriceRuleValueV2RealizedPricingPercentageValue {
  /**
   * The percentage value of the object.
   */
  percentage: number
}

}

export interface TestQuery10QueryData {

  /**
   * Lookup a price rule by ID.
   */
  priceRule: TestQuery10QueryData.PriceRule | undefined
}

const document: SimpleDocument<SyrupOperation, TestQuery10QueryData.Variables> = {
  id: "TestQuery10",
  name: "TestQuery10",
  source: "query TestQuery10(\$priceRuleId: ID!) { __typename priceRule(id: \$priceRuleId) { __typename id value { __typename ... on PriceRulePercentValue { __typename percentage }... on PriceRuleFixedAmountValue { __typename amount } } valueV2 { __typename ... on MoneyV2 { __typename amount }... on PricingPercentageValue { __typename percentage } } } }",
  __typeData: {
    operationType: 'query',
    selections: [
{
name: "priceRule",
type: { name: "PriceRule", definedType: "Object" },
arguments: { id: { isOperationVariable: true, key: "priceRuleId" } },
passedGID: "priceRuleId",
typeCondition: { name: "QueryRoot", definedType: "Object" },
directive: null,
selections: [
{
name: "id",
type: { name: "ID", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "PriceRule", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "value",
type: { name: "PriceRuleValue", definedType: "Union" },
arguments: {},
passedGID: null,
typeCondition: { name: "PriceRule", definedType: "Object" },
directive: null,
selections: [
{
name: "percentage",
type: { name: "Float", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "PriceRulePercentValue", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "amount",
type: { name: "Money", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "PriceRuleFixedAmountValue", definedType: "Object" },
directive: null,
selections: []}]}, 
{
name: "valueV2",
type: { name: "PricingValue", definedType: "Union" },
arguments: {},
passedGID: null,
typeCondition: { name: "PriceRule", definedType: "Object" },
directive: null,
selections: [
{
name: "amount",
type: { name: "Decimal", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "MoneyV2", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "percentage",
type: { name: "Float", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "PricingPercentageValue", definedType: "Object" },
directive: null,
selections: []}]}]}]
  }
}
export default document

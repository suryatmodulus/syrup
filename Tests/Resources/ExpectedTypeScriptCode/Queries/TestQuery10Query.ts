
import { ID, GraphSelection, Query } from "../GraphApi"
import { TestQuery10Response } from "../Responses/TestQuery10Response"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"
import * as Fragments from "../Fragments"

export interface TestQuery10QueryArguments {
  priceRuleId: ID
}

export class TestQuery10Query extends Query<TestQuery10Response> {
    constructor(operationVariables: TestQuery10QueryArguments) {
      super(
        "query TestQuery10(\$priceRuleId: ID!) { __typename priceRule(id: \$priceRuleId) { __typename id value { __typename ... on PriceRulePercentValue { __typename percentage }... on PriceRuleFixedAmountValue { __typename amount } } valueV2 { __typename ... on MoneyV2 { __typename amount }... on PricingPercentageValue { __typename percentage } } } }",
        {
          "priceRuleId": `${operationVariables.priceRuleId}`
        },
        new Array<GraphSelection>(
new GraphSelection({
name: "priceRule",
type: "PriceRule",
cacheKey: `priceRule(id: ${operationVariables["priceRuleId"]})`,
passedGID: `${operationVariables["priceRuleId"]}`,
typeCondition: "QueryRoot",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "id",
type: "ID",
cacheKey: `id`,
passedGID: null,
typeCondition: "PriceRule",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "value",
type: "PriceRuleValue",
cacheKey: `value`,
passedGID: null,
typeCondition: "PriceRule",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "percentage",
type: "Float",
cacheKey: `percentage`,
passedGID: null,
typeCondition: "PriceRulePercentValue",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "amount",
type: "Money",
cacheKey: `amount`,
passedGID: null,
typeCondition: "PriceRuleFixedAmountValue",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}))}), 
new GraphSelection({
name: "valueV2",
type: "PricingValue",
cacheKey: `valueV2`,
passedGID: null,
typeCondition: "PriceRule",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "amount",
type: "Decimal",
cacheKey: `amount`,
passedGID: null,
typeCondition: "MoneyV2",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "percentage",
type: "Float",
cacheKey: `percentage`,
passedGID: null,
typeCondition: "PricingPercentageValue",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}))}))}))
      )
    }

    decodeResponse(jsonObject: Object): TestQuery10Response {
      return TestQuery10Response.fromJson(jsonObject)
    }
}
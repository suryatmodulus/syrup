import { ID, GraphSelection, SyrupOperation, copyWithTypeCondition } from "../GraphApi"

export namespace TestQuery10QueryData {
  export interface Variables {
    priceRuleId: ID;
  }
  export interface PriceRuleValueRealizedPriceRuleFixedAmountValue {
    __typename: 'PriceRuleFixedAmountValue';
    /**
     * The monetary value of the price rule.
     */
    amount: number;
  }
  export interface PriceRuleValueRealizedPriceRulePercentValue {
    __typename: 'PriceRulePercentValue';
    /**
     * The percent value of the price rule.
     */
    percentage: number;
  }
  export interface PriceRuleValue {
    __typename: 'PriceRuleFixedAmountValue' | 'PriceRulePercentValue';
    realized: PriceRuleValueRealizedPriceRuleFixedAmountValue | PriceRuleValueRealizedPriceRulePercentValue;
  }
  export interface PriceRuleValueV2RealizedMoneyV2 {
    __typename: 'MoneyV2';
    /**
     * Decimal money amount.
     */
    amount: number;
  }
  export interface PriceRuleValueV2RealizedPricingPercentageValue {
    __typename: 'PricingPercentageValue';
    /**
     * The percentage value of the object.
     */
    percentage: number;
  }
  export interface PriceRuleValueV2 {
    __typename: 'MoneyV2' | 'PricingPercentageValue';
    realized: PriceRuleValueV2RealizedMoneyV2 | PriceRuleValueV2RealizedPricingPercentageValue;
  }
  export interface PriceRule {
    __typename: 'PriceRule';
    /**
     * Globally unique identifier.
     */
    id: ID;
    /**
     * The value of the price rule.
     *
     * @deprecated Use `valueV2` instead
     */
    value: PriceRuleValue;
    /**
     * The value of the price rule.
     */
    valueV2: PriceRuleValueV2;
  }
}

export interface TestQuery10QueryData {

  /**
   * Lookup a price rule by ID.
   */
  priceRule?: TestQuery10QueryData.PriceRule | null;
}

const document: SyrupOperation<TestQuery10QueryData, TestQuery10QueryData.Variables> = {
  id: "75aaf8fd01cc132180a5a101c008714c115e4af92188976552b7c6b9cf688e73",
  name: "TestQuery10",
  source: "query TestQuery10(\$priceRuleId: ID!) { __typename priceRule(id: \$priceRuleId) { __typename id value { __typename ... on PriceRulePercentValue { __typename percentage }... on PriceRuleFixedAmountValue { __typename amount } } valueV2 { __typename ... on MoneyV2 { __typename amount }... on PricingPercentageValue { __typename percentage } } } }",
  operationType: 'query',
  selections: ([
    {
      name: "__typename",
      type: { name: "String", definedType: "Scalar" },
      arguments: {},
      passedGID: null,
      typeCondition: { name: "QueryRoot", definedType: "Object" },
      directive: null,
      selections: ([] as GraphSelection[])
    }, 
    {
      name: "priceRule",
      type: { name: "PriceRule", definedType: "Object" },
      arguments: { id: { type: "OperationVariableKey", value: "priceRuleId" } },
      passedGID: "priceRuleId",
      typeCondition: { name: "QueryRoot", definedType: "Object" },
      directive: null,
      selections: ([
        {
          name: "__typename",
          type: { name: "String", definedType: "Scalar" },
          arguments: {},
          passedGID: null,
          typeCondition: { name: "PriceRule", definedType: "Object" },
          directive: null,
          selections: ([] as GraphSelection[])
        }, 
        {
          name: "id",
          type: { name: "ID", definedType: "Scalar" },
          arguments: {},
          passedGID: null,
          typeCondition: { name: "PriceRule", definedType: "Object" },
          directive: null,
          selections: ([] as GraphSelection[])
        }, 
        {
          name: "value",
          type: { name: "PriceRuleValue", definedType: "Union" },
          arguments: {},
          passedGID: null,
          typeCondition: { name: "PriceRule", definedType: "Object" },
          directive: null,
          selections: ([
            {
              name: "__typename",
              type: { name: "String", definedType: "Scalar" },
              arguments: {},
              passedGID: null,
              typeCondition: { name: "PriceRuleValue", definedType: "Union" },
              directive: null,
              selections: ([] as GraphSelection[])
            }, 
            {
              name: "__typename",
              type: { name: "String", definedType: "Scalar" },
              arguments: {},
              passedGID: null,
              typeCondition: { name: "PriceRulePercentValue", definedType: "Object" },
              directive: null,
              selections: ([] as GraphSelection[])
            }, 
            {
              name: "percentage",
              type: { name: "Float", definedType: "Scalar" },
              arguments: {},
              passedGID: null,
              typeCondition: { name: "PriceRulePercentValue", definedType: "Object" },
              directive: null,
              selections: ([] as GraphSelection[])
            }, 
            {
              name: "__typename",
              type: { name: "String", definedType: "Scalar" },
              arguments: {},
              passedGID: null,
              typeCondition: { name: "PriceRuleFixedAmountValue", definedType: "Object" },
              directive: null,
              selections: ([] as GraphSelection[])
            }, 
            {
              name: "amount",
              type: { name: "Money", definedType: "Scalar" },
              arguments: {},
              passedGID: null,
              typeCondition: { name: "PriceRuleFixedAmountValue", definedType: "Object" },
              directive: null,
              selections: ([] as GraphSelection[])
            }
          ] as GraphSelection[])
        }, 
        {
          name: "valueV2",
          type: { name: "PricingValue", definedType: "Union" },
          arguments: {},
          passedGID: null,
          typeCondition: { name: "PriceRule", definedType: "Object" },
          directive: null,
          selections: ([
            {
              name: "__typename",
              type: { name: "String", definedType: "Scalar" },
              arguments: {},
              passedGID: null,
              typeCondition: { name: "PricingValue", definedType: "Union" },
              directive: null,
              selections: ([] as GraphSelection[])
            }, 
            {
              name: "__typename",
              type: { name: "String", definedType: "Scalar" },
              arguments: {},
              passedGID: null,
              typeCondition: { name: "MoneyV2", definedType: "Object" },
              directive: null,
              selections: ([] as GraphSelection[])
            }, 
            {
              name: "amount",
              type: { name: "Decimal", definedType: "Scalar" },
              arguments: {},
              passedGID: null,
              typeCondition: { name: "MoneyV2", definedType: "Object" },
              directive: null,
              selections: ([] as GraphSelection[])
            }, 
            {
              name: "__typename",
              type: { name: "String", definedType: "Scalar" },
              arguments: {},
              passedGID: null,
              typeCondition: { name: "PricingPercentageValue", definedType: "Object" },
              directive: null,
              selections: ([] as GraphSelection[])
            }, 
            {
              name: "percentage",
              type: { name: "Float", definedType: "Scalar" },
              arguments: {},
              passedGID: null,
              typeCondition: { name: "PricingPercentageValue", definedType: "Object" },
              directive: null,
              selections: ([] as GraphSelection[])
            }
          ] as GraphSelection[])
        }
      ] as GraphSelection[])
    }
  ] as GraphSelection[])
}
export default document

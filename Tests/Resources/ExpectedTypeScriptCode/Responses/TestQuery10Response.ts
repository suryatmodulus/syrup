
import { ID, Response, GraphSelection } from "../GraphApi"
import * as Enums from "../Enums"
import * as Fragments from "../Fragments"

export interface TestQuery10Response_Arguments {

  /**
   * Lookup a price rule by ID.
   */
  priceRule: TestQuery10Response_PriceRule | undefined
}

export class TestQuery10Response implements Response {
  readonly priceRule: TestQuery10Response_PriceRule | undefined

  constructor(responseArguments: TestQuery10Response_Arguments) {
    this.priceRule = responseArguments.priceRule
  }

  static fromJson(jsonObject: any): TestQuery10Response {
    return new this({
      priceRule: jsonObject["priceRule"] != undefined && jsonObject["priceRule"] != null ? TestQuery10Response_PriceRule.fromJson(jsonObject["priceRule"]) : undefined
    })
  }

}

export interface TestQuery10Response_PriceRule_Arguments {
  /**
   * Globally unique identifier.
   */
  id: ID,
  /**
   * The value of the price rule.
   *
   * @deprecated Use `valueV2` instead
   */
  value: TestQuery10Response_PriceRule_Value,
  /**
   * The value of the price rule.
   */
  valueV2: TestQuery10Response_PriceRule_ValueV2
}
export class TestQuery10Response_PriceRule implements Response {
  readonly id: ID
  readonly value: TestQuery10Response_PriceRule_Value
  readonly valueV2: TestQuery10Response_PriceRule_ValueV2
  constructor(responseArguments: TestQuery10Response_PriceRule_Arguments) {
    this.id = responseArguments.id
    this.value = responseArguments.value
    this.valueV2 = responseArguments.valueV2
  }
  static fromJson(jsonObject: any): TestQuery10Response_PriceRule {
    return new this({
      id: jsonObject["id"],
      value: TestQuery10Response_PriceRule_Value.fromJson(jsonObject["value"]),
      valueV2: TestQuery10Response_PriceRule_ValueV2.fromJson(jsonObject["valueV2"])
    })
  }
}
export interface TestQuery10Response_PriceRule_Value_Arguments {
  realized: TestQuery10Response_PriceRule_Value_Realized
}
export class TestQuery10Response_PriceRule_Value implements Response {
  readonly realized: TestQuery10Response_PriceRule_Value_Realized
  constructor(responseArguments: TestQuery10Response_PriceRule_Value_Arguments) {
    this.realized = responseArguments.realized
  }
  static fromJson(jsonObject: any) {
    return new this({
      realized: function(typename: string): TestQuery10Response_PriceRule_Value_Realized {
        switch(typename) {
          case "PriceRuleFixedAmountValue": 
            TestQuery10Response_PriceRule_Value_Realized_PriceRuleFixedAmountValue.fromJson(jsonObject)
          case "PriceRulePercentValue": 
            TestQuery10Response_PriceRule_Value_Realized_PriceRulePercentValue.fromJson(jsonObject)
          default:
            return new TestQuery10Response_PriceRule_Value_Realized_Other()
        }
      }(jsonObject["__typename"])
    })
  }
  static typeName(): string {
    return ""
  }
  static getSelections(operationVariables: Record<string, any>): Array<GraphSelection> {
    return new Array<GraphSelection>()
  }
}
export interface TestQuery10Response_PriceRule_Value_Realized {}
export interface TestQuery10Response_PriceRule_Value_Realized_PriceRuleFixedAmountValue_Arguments {
  /**
   * The monetary value of the price rule.
   */
  amount: number
}
export class TestQuery10Response_PriceRule_Value_Realized_PriceRuleFixedAmountValue implements TestQuery10Response_PriceRule_Value_Realized {
  readonly amount: number
  constructor(responseArguments: TestQuery10Response_PriceRule_Value_Realized_PriceRuleFixedAmountValue_Arguments) {
    this.amount = responseArguments.amount
  }
  static fromJson(jsonObject: any): TestQuery10Response_PriceRule_Value_Realized_PriceRuleFixedAmountValue {
    return new this({
      amount: jsonObject["amount"]
    })
  }
}
export interface TestQuery10Response_PriceRule_Value_Realized_PriceRulePercentValue_Arguments {
  /**
   * The percent value of the price rule.
   */
  percentage: number
}
export class TestQuery10Response_PriceRule_Value_Realized_PriceRulePercentValue implements TestQuery10Response_PriceRule_Value_Realized {
  readonly percentage: number
  constructor(responseArguments: TestQuery10Response_PriceRule_Value_Realized_PriceRulePercentValue_Arguments) {
    this.percentage = responseArguments.percentage
  }
  static fromJson(jsonObject: any): TestQuery10Response_PriceRule_Value_Realized_PriceRulePercentValue {
    return new this({
      percentage: jsonObject["percentage"]
    })
  }
}
export class TestQuery10Response_PriceRule_Value_Realized_Other implements TestQuery10Response_PriceRule_Value_Realized {}
export interface TestQuery10Response_PriceRule_ValueV2_Arguments {
  realized: TestQuery10Response_PriceRule_ValueV2_Realized
}
export class TestQuery10Response_PriceRule_ValueV2 implements Response {
  readonly realized: TestQuery10Response_PriceRule_ValueV2_Realized
  constructor(responseArguments: TestQuery10Response_PriceRule_ValueV2_Arguments) {
    this.realized = responseArguments.realized
  }
  static fromJson(jsonObject: any) {
    return new this({
      realized: function(typename: string): TestQuery10Response_PriceRule_ValueV2_Realized {
        switch(typename) {
          case "MoneyV2": 
            TestQuery10Response_PriceRule_ValueV2_Realized_MoneyV2.fromJson(jsonObject)
          case "PricingPercentageValue": 
            TestQuery10Response_PriceRule_ValueV2_Realized_PricingPercentageValue.fromJson(jsonObject)
          default:
            return new TestQuery10Response_PriceRule_ValueV2_Realized_Other()
        }
      }(jsonObject["__typename"])
    })
  }
  static typeName(): string {
    return ""
  }
  static getSelections(operationVariables: Record<string, any>): Array<GraphSelection> {
    return new Array<GraphSelection>()
  }
}
export interface TestQuery10Response_PriceRule_ValueV2_Realized {}
export interface TestQuery10Response_PriceRule_ValueV2_Realized_MoneyV2_Arguments {
  /**
   * Decimal money amount.
   */
  amount: number
}
export class TestQuery10Response_PriceRule_ValueV2_Realized_MoneyV2 implements TestQuery10Response_PriceRule_ValueV2_Realized {
  readonly amount: number
  constructor(responseArguments: TestQuery10Response_PriceRule_ValueV2_Realized_MoneyV2_Arguments) {
    this.amount = responseArguments.amount
  }
  static fromJson(jsonObject: any): TestQuery10Response_PriceRule_ValueV2_Realized_MoneyV2 {
    return new this({
      amount: jsonObject["amount"]
    })
  }
}
export interface TestQuery10Response_PriceRule_ValueV2_Realized_PricingPercentageValue_Arguments {
  /**
   * The percentage value of the object.
   */
  percentage: number
}
export class TestQuery10Response_PriceRule_ValueV2_Realized_PricingPercentageValue implements TestQuery10Response_PriceRule_ValueV2_Realized {
  readonly percentage: number
  constructor(responseArguments: TestQuery10Response_PriceRule_ValueV2_Realized_PricingPercentageValue_Arguments) {
    this.percentage = responseArguments.percentage
  }
  static fromJson(jsonObject: any): TestQuery10Response_PriceRule_ValueV2_Realized_PricingPercentageValue {
    return new this({
      percentage: jsonObject["percentage"]
    })
  }
}
export class TestQuery10Response_PriceRule_ValueV2_Realized_Other implements TestQuery10Response_PriceRule_ValueV2_Realized {}


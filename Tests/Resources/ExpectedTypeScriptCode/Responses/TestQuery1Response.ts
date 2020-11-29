
import { ID, Response, GraphSelection } from "../GraphApi"
import * as Enums from "../Enums"
import * as Fragments from "../Fragments"

export interface TestQuery1Response_Arguments {

  /**
   * Returns a Shop resource corresponding to access token used in request.
   */
  shop: TestQuery1Response_Shop
}

export class TestQuery1Response implements Response {
  readonly shop: TestQuery1Response_Shop

  constructor(responseArguments: TestQuery1Response_Arguments) {
    this.shop = responseArguments.shop
  }

  static fromJson(jsonObject: any): TestQuery1Response {
    return new this({
      shop: TestQuery1Response_Shop.fromJson(jsonObject["shop"])
    })
  }

}

export interface TestQuery1Response_Shop_Arguments {
  /**
   * Globally unique identifier.
   */
  id: ID,
  /**
   * The shop's name.
   */
  name: string,
  /**
   * The three letter code for the shop's currency.
   */
  currencyCode: Enums.CurrencyCode,
  /**
   * The shop's primary unit of weight for products and shipping.
   */
  weightUnit: Enums.WeightUnit,
  /**
   * The shop's billing address information.
   */
  billingAddress: TestQuery1Response_Shop_BillingAddress,
  /**
   * Alert message that appears in the Shopify admin.
   */
  alerts: Array<TestQuery1Response_Shop_Alerts>,
  /**
   * Countries that the shop ships to.
   */
  shipsToCountries: Array<Enums.CountryCode>,
  /**
   * Settings related to payments.
   */
  paymentSettings: TestQuery1Response_Shop_PaymentSettings
}
export class TestQuery1Response_Shop implements Response {
  readonly id: ID
  readonly name: string
  readonly currencyCode: Enums.CurrencyCode
  readonly weightUnit: Enums.WeightUnit
  readonly billingAddress: TestQuery1Response_Shop_BillingAddress
  readonly alerts: Array<TestQuery1Response_Shop_Alerts>
  readonly shipsToCountries: Array<Enums.CountryCode>
  readonly paymentSettings: TestQuery1Response_Shop_PaymentSettings
  constructor(responseArguments: TestQuery1Response_Shop_Arguments) {
    this.id = responseArguments.id
    this.name = responseArguments.name
    this.currencyCode = responseArguments.currencyCode
    this.weightUnit = responseArguments.weightUnit
    this.billingAddress = responseArguments.billingAddress
    this.alerts = responseArguments.alerts
    this.shipsToCountries = responseArguments.shipsToCountries
    this.paymentSettings = responseArguments.paymentSettings
  }
  static fromJson(jsonObject: any): TestQuery1Response_Shop {
    return new this({
      id: jsonObject["id"],
      name: jsonObject["name"],
      currencyCode: Enums.CurrencyCodeUtil.safeValueOf(jsonObject["currencyCode"]),
      weightUnit: Enums.WeightUnitUtil.safeValueOf(jsonObject["weightUnit"]),
      billingAddress: TestQuery1Response_Shop_BillingAddress.fromJson(jsonObject["billingAddress"]),
      alerts: jsonObject["alerts"] == undefined || jsonObject["alerts"] == null ? Array<TestQuery1Response_Shop_Alerts>() : Array.from(jsonObject["alerts"], x => TestQuery1Response_Shop_Alerts.fromJson(x)),
      shipsToCountries: Array.from(jsonObject["shipsToCountries"], x => Enums.CountryCodeUtil.safeValueOf(x as string)),
      paymentSettings: TestQuery1Response_Shop_PaymentSettings.fromJson(jsonObject["paymentSettings"])
    })
  }
}
export interface TestQuery1Response_Shop_BillingAddress_Arguments {
  /**
   * The name of the city, district, village, or town.
   */
  city: string | undefined,
  /**
   * The name of the customer's company or organization.
   */
  company: string | undefined,
  /**
   * The latitude coordinate of the customer address.
   */
  latitude: number | undefined,
  /**
   * The longitude coordinate of the customer address.
   */
  longitude: number | undefined
}
export class TestQuery1Response_Shop_BillingAddress implements Response {
  readonly city: string | undefined
  readonly company: string | undefined
  readonly latitude: number | undefined
  readonly longitude: number | undefined
  constructor(responseArguments: TestQuery1Response_Shop_BillingAddress_Arguments) {
    this.city = responseArguments.city
    this.company = responseArguments.company
    this.latitude = responseArguments.latitude
    this.longitude = responseArguments.longitude
  }
  static fromJson(jsonObject: any): TestQuery1Response_Shop_BillingAddress {
    return new this({
      city: jsonObject["city"] != undefined && jsonObject["city"] != null ? jsonObject["city"] : undefined,
      company: jsonObject["company"] != undefined && jsonObject["company"] != null ? jsonObject["company"] : undefined,
      latitude: jsonObject["latitude"] != undefined && jsonObject["latitude"] != null ? jsonObject["latitude"] : undefined,
      longitude: jsonObject["longitude"] != undefined && jsonObject["longitude"] != null ? jsonObject["longitude"] : undefined
    })
  }
}
export interface TestQuery1Response_Shop_Alerts_Arguments {
  /**
   * Description of the alert.
   */
  description: string
}
export class TestQuery1Response_Shop_Alerts implements Response {
  readonly description: string
  constructor(responseArguments: TestQuery1Response_Shop_Alerts_Arguments) {
    this.description = responseArguments.description
  }
  static fromJson(jsonObject: any): TestQuery1Response_Shop_Alerts {
    return new this({
      description: jsonObject["description"]
    })
  }
}
export interface TestQuery1Response_Shop_PaymentSettings_Arguments {
  /**
   * List of the digital wallets which the shop supports.
   */
  supportedDigitalWallets: Array<Enums.DigitalWallet>
}
export class TestQuery1Response_Shop_PaymentSettings implements Response {
  readonly supportedDigitalWallets: Array<Enums.DigitalWallet>
  constructor(responseArguments: TestQuery1Response_Shop_PaymentSettings_Arguments) {
    this.supportedDigitalWallets = responseArguments.supportedDigitalWallets
  }
  static fromJson(jsonObject: any): TestQuery1Response_Shop_PaymentSettings {
    return new this({
      supportedDigitalWallets: Array.from(jsonObject["supportedDigitalWallets"], x => Enums.DigitalWalletUtil.safeValueOf(x as string))
    })
  }
}


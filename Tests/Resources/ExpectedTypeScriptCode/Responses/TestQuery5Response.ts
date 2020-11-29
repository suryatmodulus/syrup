
import { ID, Response, GraphSelection } from "../GraphApi"
import * as Enums from "../Enums"
import * as Fragments from "../Fragments"

export interface TestQuery5Response_Arguments {

  /**
   * Returns a Shop resource corresponding to access token used in request.
   */
  shop: TestQuery5Response_Shop
}

export class TestQuery5Response implements Response {
  readonly shop: TestQuery5Response_Shop

  constructor(responseArguments: TestQuery5Response_Arguments) {
    this.shop = responseArguments.shop
  }

  static fromJson(jsonObject: any): TestQuery5Response {
    return new this({
      shop: TestQuery5Response_Shop.fromJson(jsonObject["shop"])
    })
  }

}

export interface TestQuery5Response_Shop_Arguments {
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
  billingAddress: TestQuery5Response_Shop_BillingAddress,
  /**
   * List of the shop's installed fulfillment services.
   */
  fulfillmentServices: Array<TestQuery5Response_Shop_FulfillmentServices>
}
export class TestQuery5Response_Shop implements Response {
  readonly name: string
  readonly currencyCode: Enums.CurrencyCode
  readonly weightUnit: Enums.WeightUnit
  readonly billingAddress: TestQuery5Response_Shop_BillingAddress
  readonly fulfillmentServices: Array<TestQuery5Response_Shop_FulfillmentServices>
  constructor(responseArguments: TestQuery5Response_Shop_Arguments) {
    this.name = responseArguments.name
    this.currencyCode = responseArguments.currencyCode
    this.weightUnit = responseArguments.weightUnit
    this.billingAddress = responseArguments.billingAddress
    this.fulfillmentServices = responseArguments.fulfillmentServices
  }
  static fromJson(jsonObject: any): TestQuery5Response_Shop {
    return new this({
      name: jsonObject["name"],
      currencyCode: Enums.CurrencyCodeUtil.safeValueOf(jsonObject["currencyCode"]),
      weightUnit: Enums.WeightUnitUtil.safeValueOf(jsonObject["weightUnit"]),
      billingAddress: TestQuery5Response_Shop_BillingAddress.fromJson(jsonObject["billingAddress"]),
      fulfillmentServices: jsonObject["fulfillmentServices"] == undefined || jsonObject["fulfillmentServices"] == null ? Array<TestQuery5Response_Shop_FulfillmentServices>() : Array.from(jsonObject["fulfillmentServices"], x => TestQuery5Response_Shop_FulfillmentServices.fromJson(x))
    })
  }
}
export interface TestQuery5Response_Shop_BillingAddress_Arguments {
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
export class TestQuery5Response_Shop_BillingAddress implements Response {
  readonly city: string | undefined
  readonly company: string | undefined
  readonly latitude: number | undefined
  readonly longitude: number | undefined
  constructor(responseArguments: TestQuery5Response_Shop_BillingAddress_Arguments) {
    this.city = responseArguments.city
    this.company = responseArguments.company
    this.latitude = responseArguments.latitude
    this.longitude = responseArguments.longitude
  }
  static fromJson(jsonObject: any): TestQuery5Response_Shop_BillingAddress {
    return new this({
      city: jsonObject["city"] != undefined && jsonObject["city"] != null ? jsonObject["city"] : undefined,
      company: jsonObject["company"] != undefined && jsonObject["company"] != null ? jsonObject["company"] : undefined,
      latitude: jsonObject["latitude"] != undefined && jsonObject["latitude"] != null ? jsonObject["latitude"] : undefined,
      longitude: jsonObject["longitude"] != undefined && jsonObject["longitude"] != null ? jsonObject["longitude"] : undefined
    })
  }
}
export interface TestQuery5Response_Shop_FulfillmentServices_Arguments {
  /**
   * The name of the fulfillment service as seen by merchants.
   */
  serviceName: string,
  /**
   * Human-readable unique identifier for this fulfillment service.
   */
  handle: string
}
export class TestQuery5Response_Shop_FulfillmentServices implements Response {
  readonly serviceName: string
  readonly handle: string
  constructor(responseArguments: TestQuery5Response_Shop_FulfillmentServices_Arguments) {
    this.serviceName = responseArguments.serviceName
    this.handle = responseArguments.handle
  }
  static fromJson(jsonObject: any): TestQuery5Response_Shop_FulfillmentServices {
    return new this({
      serviceName: jsonObject["serviceName"],
      handle: jsonObject["handle"]
    })
  }
}


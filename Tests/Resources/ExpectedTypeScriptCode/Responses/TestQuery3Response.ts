
import { ID, Response, GraphSelection } from "../GraphApi"
import * as Enums from "../Enums"
import * as Fragments from "../Fragments"

export interface TestQuery3Response_Arguments {

  /**
   * Returns a Customer resource by ID.
   */
  customer: TestQuery3Response_Customer | undefined
}

export class TestQuery3Response implements Response {
  readonly customer: TestQuery3Response_Customer | undefined

  constructor(responseArguments: TestQuery3Response_Arguments) {
    this.customer = responseArguments.customer
  }

  static fromJson(jsonObject: any): TestQuery3Response {
    return new this({
      customer: jsonObject["customer"] != undefined && jsonObject["customer"] != null ? TestQuery3Response_Customer.fromJson(jsonObject["customer"]) : undefined
    })
  }

}

export interface TestQuery3Response_Customer_Arguments {
  /**
   * A list of addresses associated with the customer.
   */
  addresses: Array<TestQuery3Response_Customer_Addresses>,
  /**
   * The default address associated with the customer.
   */
  defaultAddress: TestQuery3Response_Customer_DefaultAddress | undefined
}
export class TestQuery3Response_Customer implements Response {
  readonly addresses: Array<TestQuery3Response_Customer_Addresses>
  readonly defaultAddress: TestQuery3Response_Customer_DefaultAddress | undefined
  constructor(responseArguments: TestQuery3Response_Customer_Arguments) {
    this.addresses = responseArguments.addresses
    this.defaultAddress = responseArguments.defaultAddress
  }
  static fromJson(jsonObject: any): TestQuery3Response_Customer {
    return new this({
      addresses: jsonObject["addresses"] == undefined || jsonObject["addresses"] == null ? Array<TestQuery3Response_Customer_Addresses>() : Array.from(jsonObject["addresses"], x => TestQuery3Response_Customer_Addresses.fromJson(x)),
      defaultAddress: jsonObject["defaultAddress"] != undefined && jsonObject["defaultAddress"] != null ? TestQuery3Response_Customer_DefaultAddress.fromJson(jsonObject["defaultAddress"]) : undefined
    })
  }
}
export interface TestQuery3Response_Customer_Addresses_Arguments {
  /**
   * The name of the country.
   */
  country: string | undefined
}
export class TestQuery3Response_Customer_Addresses implements Response {
  readonly country: string | undefined
  constructor(responseArguments: TestQuery3Response_Customer_Addresses_Arguments) {
    this.country = responseArguments.country
  }
  static fromJson(jsonObject: any): TestQuery3Response_Customer_Addresses {
    return new this({
      country: jsonObject["country"] != undefined && jsonObject["country"] != null ? jsonObject["country"] : undefined
    })
  }
}
export interface TestQuery3Response_Customer_DefaultAddress_Arguments {
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
export class TestQuery3Response_Customer_DefaultAddress implements Response {
  readonly city: string | undefined
  readonly longitude: number | undefined
  readonly latitude: number | undefined
  constructor(responseArguments: TestQuery3Response_Customer_DefaultAddress_Arguments) {
    this.city = responseArguments.city
    this.longitude = responseArguments.longitude
    this.latitude = responseArguments.latitude
  }
  static fromJson(jsonObject: any): TestQuery3Response_Customer_DefaultAddress {
    return new this({
      city: jsonObject["city"] != undefined && jsonObject["city"] != null ? jsonObject["city"] : undefined,
      longitude: jsonObject["longitude"] != undefined && jsonObject["longitude"] != null ? jsonObject["longitude"] : undefined,
      latitude: jsonObject["latitude"] != undefined && jsonObject["latitude"] != null ? jsonObject["latitude"] : undefined
    })
  }
}



import { ID, Response, GraphSelection } from "../GraphApi"
import * as Enums from "../Enums"
import * as Fragments from "../Fragments"

export interface TestQuery2Response_Arguments {

  /**
   * Returns a Shop resource corresponding to access token used in request.
   */
  shop: TestQuery2Response_Shop
}

export class TestQuery2Response implements Response {
  readonly shop: TestQuery2Response_Shop

  constructor(responseArguments: TestQuery2Response_Arguments) {
    this.shop = responseArguments.shop
  }

  static fromJson(jsonObject: any): TestQuery2Response {
    return new this({
      shop: TestQuery2Response_Shop.fromJson(jsonObject["shop"])
    })
  }

}

export interface TestQuery2Response_Shop_Arguments {
  /**
   * The shop's name.
   */
  name: string,
  /**
   * Globally unique identifier.
   */
  id: ID,
  /**
   * The shop owner's email address.
   * Shopify will use this email address to communicate with the shop owner.
   */
  email: string,
  /**
   * Alert message that appears in the Shopify admin.
   */
  alerts: Array<TestQuery2Response_Shop_Alerts>
}
export class TestQuery2Response_Shop implements Response {
  readonly name: string
  readonly id: ID
  readonly email: string
  readonly alerts: Array<TestQuery2Response_Shop_Alerts>
  constructor(responseArguments: TestQuery2Response_Shop_Arguments) {
    this.name = responseArguments.name
    this.id = responseArguments.id
    this.email = responseArguments.email
    this.alerts = responseArguments.alerts
  }
  static fromJson(jsonObject: any): TestQuery2Response_Shop {
    return new this({
      name: jsonObject["name"],
      id: jsonObject["id"],
      email: jsonObject["email"],
      alerts: jsonObject["alerts"] == undefined || jsonObject["alerts"] == null ? Array<TestQuery2Response_Shop_Alerts>() : Array.from(jsonObject["alerts"], x => TestQuery2Response_Shop_Alerts.fromJson(x))
    })
  }
}
export interface TestQuery2Response_Shop_Alerts_Arguments {
  /**
   * Button in the alert that links to related information.
   */
  action: TestQuery2Response_Shop_Alerts_Action,
  /**
   * Description of the alert.
   */
  description: string
}
export class TestQuery2Response_Shop_Alerts implements Response {
  readonly action: TestQuery2Response_Shop_Alerts_Action
  readonly description: string
  constructor(responseArguments: TestQuery2Response_Shop_Alerts_Arguments) {
    this.action = responseArguments.action
    this.description = responseArguments.description
  }
  static fromJson(jsonObject: any): TestQuery2Response_Shop_Alerts {
    return new this({
      action: TestQuery2Response_Shop_Alerts_Action.fromJson(jsonObject["action"]),
      description: jsonObject["description"]
    })
  }
}
export interface TestQuery2Response_Shop_Alerts_Action_Arguments {
  /**
   * Action title.
   */
  title: string,
  /**
   * Action target URL.
   */
  url: string
}
export class TestQuery2Response_Shop_Alerts_Action implements Response {
  readonly title: string
  readonly url: string
  constructor(responseArguments: TestQuery2Response_Shop_Alerts_Action_Arguments) {
    this.title = responseArguments.title
    this.url = responseArguments.url
  }
  static fromJson(jsonObject: any): TestQuery2Response_Shop_Alerts_Action {
    return new this({
      title: jsonObject["title"],
      url: jsonObject["url"]
    })
  }
}



import { ID, Response, GraphSelection } from "../GraphApi"
import * as Enums from "../Enums"
import * as Fragments from "../Fragments"

export interface TestMutation0Response_Arguments {

  /**
   * Updates a customer's attributes.
   */
  customerUpdate: TestMutation0Response_CustomerUpdate | undefined
}

export class TestMutation0Response implements Response {
  readonly customerUpdate: TestMutation0Response_CustomerUpdate | undefined

  constructor(responseArguments: TestMutation0Response_Arguments) {
    this.customerUpdate = responseArguments.customerUpdate
  }

  static fromJson(jsonObject: any): TestMutation0Response {
    return new this({
      customerUpdate: jsonObject["customerUpdate"] != undefined && jsonObject["customerUpdate"] != null ? TestMutation0Response_CustomerUpdate.fromJson(jsonObject["customerUpdate"]) : undefined
    })
  }

}

export interface TestMutation0Response_CustomerUpdate_Arguments {
  /**
   * The updated customer.
   */
  customer: TestMutation0Response_CustomerUpdate_Customer | undefined
}
export class TestMutation0Response_CustomerUpdate implements Response {
  readonly customer: TestMutation0Response_CustomerUpdate_Customer | undefined
  constructor(responseArguments: TestMutation0Response_CustomerUpdate_Arguments) {
    this.customer = responseArguments.customer
  }
  static fromJson(jsonObject: any): TestMutation0Response_CustomerUpdate {
    return new this({
      customer: jsonObject["customer"] != undefined && jsonObject["customer"] != null ? TestMutation0Response_CustomerUpdate_Customer.fromJson(jsonObject["customer"]) : undefined
    })
  }
}
export interface TestMutation0Response_CustomerUpdate_Customer_Arguments {
  /**
   * Globally unique identifier.
   */
  id: ID
}
export class TestMutation0Response_CustomerUpdate_Customer implements Response {
  readonly id: ID
  constructor(responseArguments: TestMutation0Response_CustomerUpdate_Customer_Arguments) {
    this.id = responseArguments.id
  }
  static fromJson(jsonObject: any): TestMutation0Response_CustomerUpdate_Customer {
    return new this({
      id: jsonObject["id"]
    })
  }
}


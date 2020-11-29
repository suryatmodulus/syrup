
import { ID, Response, GraphSelection } from "../GraphApi"
import * as Enums from "../Enums"
import * as Fragments from "../Fragments"

export interface ShopQueryResponse_Arguments {
  shop: Fragments.Shop
}

export class ShopQueryResponse implements Response {
  readonly shop: Fragments.Shop

  constructor(responseArguments: ShopQueryResponse_Arguments) {
    this.shop = responseArguments.shop
  }

  static fromJson(jsonObject: any): ShopQueryResponse {
    return new this({
      shop: Fragments.Shop.fromJson(jsonObject)
    })
  }

}


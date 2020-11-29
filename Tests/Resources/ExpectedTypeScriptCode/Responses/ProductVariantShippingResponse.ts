
import { ID, Response, GraphSelection } from "../GraphApi"
import * as Enums from "../Enums"
import * as Fragments from "../Fragments"

export interface ProductVariantShippingResponse_Arguments {

  /**
   * Updates a product variant.
   */
  productVariantUpdate: ProductVariantShippingResponse_ProductVariantUpdate | undefined
}

export class ProductVariantShippingResponse implements Response {
  readonly productVariantUpdate: ProductVariantShippingResponse_ProductVariantUpdate | undefined

  constructor(responseArguments: ProductVariantShippingResponse_Arguments) {
    this.productVariantUpdate = responseArguments.productVariantUpdate
  }

  static fromJson(jsonObject: any): ProductVariantShippingResponse {
    return new this({
      productVariantUpdate: jsonObject["productVariantUpdate"] != undefined && jsonObject["productVariantUpdate"] != null ? ProductVariantShippingResponse_ProductVariantUpdate.fromJson(jsonObject["productVariantUpdate"]) : undefined
    })
  }

}

export interface ProductVariantShippingResponse_ProductVariantUpdate_Arguments {
  /**
   * The updated variant.
   */
  productVariant: ProductVariantShippingResponse_ProductVariantUpdate_ProductVariant | undefined,
  /**
   * List of errors that occurred executing the mutation.
   */
  userErrors: Array<ProductVariantShippingResponse_ProductVariantUpdate_UserErrors>
}
export class ProductVariantShippingResponse_ProductVariantUpdate implements Response {
  readonly productVariant: ProductVariantShippingResponse_ProductVariantUpdate_ProductVariant | undefined
  readonly userErrors: Array<ProductVariantShippingResponse_ProductVariantUpdate_UserErrors>
  constructor(responseArguments: ProductVariantShippingResponse_ProductVariantUpdate_Arguments) {
    this.productVariant = responseArguments.productVariant
    this.userErrors = responseArguments.userErrors
  }
  static fromJson(jsonObject: any): ProductVariantShippingResponse_ProductVariantUpdate {
    return new this({
      productVariant: jsonObject["productVariant"] != undefined && jsonObject["productVariant"] != null ? ProductVariantShippingResponse_ProductVariantUpdate_ProductVariant.fromJson(jsonObject["productVariant"]) : undefined,
      userErrors: jsonObject["userErrors"] == undefined || jsonObject["userErrors"] == null ? Array<ProductVariantShippingResponse_ProductVariantUpdate_UserErrors>() : Array.from(jsonObject["userErrors"], x => ProductVariantShippingResponse_ProductVariantUpdate_UserErrors.fromJson(x))
    })
  }
}
export interface ProductVariantShippingResponse_ProductVariantUpdate_ProductVariant_Arguments {
  /**
   * Globally unique identifier.
   */
  id: ID,
  /**
   * The weight of the product variant in the unit system specified with weight_unit.
   */
  weight: number | undefined,
  /**
   * The unit of measurement that applies to the product variant's weight. If you don't specify a value for weight_unit, then the shop's default unit of measurement is applied. Valid values: `g`, `kg`, `oz`, `lb`.
   */
  weightUnit: Enums.WeightUnit,
  /**
   * Whether a customer needs to provide a shipping address when placing an order for the product variant.
   *
   * @deprecated Use `InventoryItem.requiresShipping` instead.
   */
  requiresShipping: boolean,
  /**
   * The Harmonized System Code (or HS Tariff Code) for the variant.
   *
   * @deprecated Use `InventoryItem.harmonizedSystemCode` instead.
   */
  harmonizedSystemCode: string | undefined
}
export class ProductVariantShippingResponse_ProductVariantUpdate_ProductVariant implements Response {
  readonly id: ID
  readonly weight: number | undefined
  readonly weightUnit: Enums.WeightUnit
  readonly requiresShipping: boolean
  readonly harmonizedSystemCode: string | undefined
  constructor(responseArguments: ProductVariantShippingResponse_ProductVariantUpdate_ProductVariant_Arguments) {
    this.id = responseArguments.id
    this.weight = responseArguments.weight
    this.weightUnit = responseArguments.weightUnit
    this.requiresShipping = responseArguments.requiresShipping
    this.harmonizedSystemCode = responseArguments.harmonizedSystemCode
  }
  static fromJson(jsonObject: any): ProductVariantShippingResponse_ProductVariantUpdate_ProductVariant {
    return new this({
      id: jsonObject["id"],
      weight: jsonObject["weight"] != undefined && jsonObject["weight"] != null ? jsonObject["weight"] : undefined,
      weightUnit: Enums.WeightUnitUtil.safeValueOf(jsonObject["weightUnit"]),
      requiresShipping: jsonObject["requiresShipping"],
      harmonizedSystemCode: jsonObject["harmonizedSystemCode"] != undefined && jsonObject["harmonizedSystemCode"] != null ? jsonObject["harmonizedSystemCode"] : undefined
    })
  }
}
export interface ProductVariantShippingResponse_ProductVariantUpdate_UserErrors_Arguments {
  /**
   * The error message.
   */
  message: string,
  /**
   * Path to the input field which caused the error.
   */
  field: Array<string> | undefined
}
export class ProductVariantShippingResponse_ProductVariantUpdate_UserErrors implements Response {
  readonly message: string
  readonly field: Array<string> | undefined
  constructor(responseArguments: ProductVariantShippingResponse_ProductVariantUpdate_UserErrors_Arguments) {
    this.message = responseArguments.message
    this.field = responseArguments.field
  }
  static fromJson(jsonObject: any): ProductVariantShippingResponse_ProductVariantUpdate_UserErrors {
    return new this({
      message: jsonObject["message"],
      field: jsonObject["field"] != undefined && jsonObject["field"] != null ? jsonObject["field"] as Array<string> : undefined
    })
  }
}


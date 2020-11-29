

export enum ProductVariantInventoryPolicy {

  /**
   * Stop selling a product variant when it is out of stock.
   */
  DENY = "DENY",

  /**
   * Continue selling a product variant when it is out of stock.
   */
  CONTINUE = "CONTINUE",

  /**
   * Unknown Syrup enum.
   */
  UNKNOWN_SYRUP_ENUM = "UNKNOWN_SYRUP_ENUM"
}

export class ProductVariantInventoryPolicyUtil {
  static safeValueOf(value: string): ProductVariantInventoryPolicy {
    const values = Object.keys(ProductVariantInventoryPolicy).map(x => ProductVariantInventoryPolicy[x])

    if (values.some(x => x === value)) {
      return <ProductVariantInventoryPolicy> value
    } else {
      return ProductVariantInventoryPolicy.UNKNOWN_SYRUP_ENUM
    }
  }
}
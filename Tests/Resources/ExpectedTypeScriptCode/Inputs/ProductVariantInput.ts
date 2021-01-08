import { ID } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"

export interface ProductVariantInput {
  barcode?: string | null,
  compareAtPrice?: number | null,
  fulfillmentServiceId?: ID | null,
  harmonizedSystemCode?: string | null,
  id?: ID | null,
  imageId?: ID | null,
  imageSrc?: string | null,
  inventoryManagement?: Enums.ProductVariantInventoryManagement | null,
  inventoryPolicy?: Enums.ProductVariantInventoryPolicy | null,
  inventoryQuantities?: (Inputs.InventoryLevelInput)[] | null,
  inventoryItem?: Inputs.InventoryItemInput | null,
  metafields?: (Inputs.MetafieldInput)[] | null,
  privateMetafields?: (Inputs.PrivateMetafieldInput)[] | null,
  options?: (string)[] | null,
  position?: number | null,
  price?: number | null,
  productId?: ID | null,
  requiresShipping?: boolean | null,
  sku?: string | null,
  taxable?: boolean | null,
  title?: string | null,
  taxCode?: string | null,
  weight?: number | null,
  weightUnit?: Enums.WeightUnit | null
}

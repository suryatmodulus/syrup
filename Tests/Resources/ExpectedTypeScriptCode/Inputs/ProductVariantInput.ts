import { ID } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"

export interface ProductVariantInput {
  barcode?: string | undefined | null,
  compareAtPrice?: number | undefined | null,
  fulfillmentServiceId?: ID | undefined | null,
  harmonizedSystemCode?: string | undefined | null,
  id?: ID | undefined | null,
  imageId?: ID | undefined | null,
  imageSrc?: string | undefined | null,
  inventoryManagement?: Enums.ProductVariantInventoryManagement | undefined | null,
  inventoryPolicy?: Enums.ProductVariantInventoryPolicy | undefined | null,
  inventoryQuantities?: Array<Inputs.InventoryLevelInput> | undefined | null,
  inventoryItem?: Inputs.InventoryItemInput | undefined | null,
  metafields?: Array<Inputs.MetafieldInput> | undefined | null,
  privateMetafields?: Array<Inputs.PrivateMetafieldInput> | undefined | null,
  options?: Array<string> | undefined | null,
  position?: number | undefined | null,
  price?: number | undefined | null,
  productId?: ID | undefined | null,
  requiresShipping?: boolean | undefined | null,
  sku?: string | undefined | null,
  taxable?: boolean | undefined | null,
  title?: string | undefined | null,
  taxCode?: string | undefined | null,
  weight?: number | undefined | null,
  weightUnit?: Enums.WeightUnit | undefined | null
}

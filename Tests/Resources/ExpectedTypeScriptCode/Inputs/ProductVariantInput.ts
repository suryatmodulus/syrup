import { ID } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"

export interface ProductVariantInput_Arguments {
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

export class ProductVariantInput {
  public barcode: string | undefined | null = undefined
  public compareAtPrice: number | undefined | null = undefined
  public fulfillmentServiceId: ID | undefined | null = undefined
  public harmonizedSystemCode: string | undefined | null = undefined
  public id: ID | undefined | null = undefined
  public imageId: ID | undefined | null = undefined
  public imageSrc: string | undefined | null = undefined
  public inventoryManagement: Enums.ProductVariantInventoryManagement | undefined | null = undefined
  public inventoryPolicy: Enums.ProductVariantInventoryPolicy | undefined | null = undefined
  public inventoryQuantities: Array<Inputs.InventoryLevelInput> | undefined | null = undefined
  public inventoryItem: Inputs.InventoryItemInput | undefined | null = undefined
  public metafields: Array<Inputs.MetafieldInput> | undefined | null = undefined
  public privateMetafields: Array<Inputs.PrivateMetafieldInput> | undefined | null = undefined
  public options: Array<string> | undefined | null = undefined
  public position: number | undefined | null = undefined
  public price: number | undefined | null = undefined
  public productId: ID | undefined | null = undefined
  public requiresShipping: boolean | undefined | null = undefined
  public sku: string | undefined | null = undefined
  public taxable: boolean | undefined | null = undefined
  public title: string | undefined | null = undefined
  public taxCode: string | undefined | null = undefined
  public weight: number | undefined | null = undefined
  public weightUnit: Enums.WeightUnit | undefined | null = undefined

  constructor(inputArguments: ProductVariantInput_Arguments = {}) {
    this.barcode = inputArguments.barcode
    this.compareAtPrice = inputArguments.compareAtPrice
    this.fulfillmentServiceId = inputArguments.fulfillmentServiceId
    this.harmonizedSystemCode = inputArguments.harmonizedSystemCode
    this.id = inputArguments.id
    this.imageId = inputArguments.imageId
    this.imageSrc = inputArguments.imageSrc
    this.inventoryManagement = inputArguments.inventoryManagement
    this.inventoryPolicy = inputArguments.inventoryPolicy
    this.inventoryQuantities = inputArguments.inventoryQuantities
    this.inventoryItem = inputArguments.inventoryItem
    this.metafields = inputArguments.metafields
    this.privateMetafields = inputArguments.privateMetafields
    this.options = inputArguments.options
    this.position = inputArguments.position
    this.price = inputArguments.price
    this.productId = inputArguments.productId
    this.requiresShipping = inputArguments.requiresShipping
    this.sku = inputArguments.sku
    this.taxable = inputArguments.taxable
    this.title = inputArguments.title
    this.taxCode = inputArguments.taxCode
    this.weight = inputArguments.weight
    this.weightUnit = inputArguments.weightUnit
  }
}

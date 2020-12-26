import { ID } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"

export interface InventoryLevelInput {
  availableQuantity?: number,
  locationId?: ID
}

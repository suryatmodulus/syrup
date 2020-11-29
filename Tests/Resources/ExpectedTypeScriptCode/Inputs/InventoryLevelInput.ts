import { ID } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"

export interface InventoryLevelInput_Arguments {
  availableQuantity?: number,
  locationId?: ID
}

export class InventoryLevelInput {
  public availableQuantity: number
  public locationId: ID

  constructor(inputArguments: InventoryLevelInput_Arguments = {}) {
    this.availableQuantity = inputArguments.availableQuantity
    this.locationId = inputArguments.locationId
  }
}

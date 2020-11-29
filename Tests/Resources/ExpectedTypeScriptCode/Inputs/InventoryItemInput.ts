import { ID } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"

export interface InventoryItemInput_Arguments {
  cost?: number | undefined | null,
  tracked?: boolean | undefined | null,
  countryCodeOfOrigin?: Enums.CountryCode | undefined | null,
  harmonizedSystemCode?: string | undefined | null
}

export class InventoryItemInput {
  public cost: number | undefined | null = undefined
  public tracked: boolean | undefined | null = undefined
  public countryCodeOfOrigin: Enums.CountryCode | undefined | null = undefined
  public harmonizedSystemCode: string | undefined | null = undefined

  constructor(inputArguments: InventoryItemInput_Arguments = {}) {
    this.cost = inputArguments.cost
    this.tracked = inputArguments.tracked
    this.countryCodeOfOrigin = inputArguments.countryCodeOfOrigin
    this.harmonizedSystemCode = inputArguments.harmonizedSystemCode
  }
}

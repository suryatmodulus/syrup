import { ID } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"

export interface InventoryItemInput {
  cost?: number | null,
  tracked?: boolean | null,
  countryCodeOfOrigin?: Enums.CountryCode | null,
  harmonizedSystemCode?: string | null
}

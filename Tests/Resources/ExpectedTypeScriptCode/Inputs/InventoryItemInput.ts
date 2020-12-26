import { ID } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"

export interface InventoryItemInput {
  cost?: number | undefined | null,
  tracked?: boolean | undefined | null,
  countryCodeOfOrigin?: Enums.CountryCode | undefined | null,
  harmonizedSystemCode?: string | undefined | null
}

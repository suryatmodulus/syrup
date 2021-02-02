import { ID } from "../GraphApi"
import {
  CountryCode,
} from "../Enums"

export interface InventoryItemInput {
  cost?: number | null;
  tracked?: boolean | null;
  countryCodeOfOrigin?: CountryCode | null;
  harmonizedSystemCode?: string | null
}

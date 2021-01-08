import { ID } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"

export interface MailingAddressInput {
  address1?: string | null,
  address2?: string | null,
  city?: string | null,
  company?: string | null,
  country?: string | null,
  countryCode?: Enums.CountryCode | null,
  firstName?: string | null,
  id?: ID | null,
  lastName?: string | null,
  phone?: string | null,
  province?: string | null,
  provinceCode?: string | null,
  zip?: string | null
}

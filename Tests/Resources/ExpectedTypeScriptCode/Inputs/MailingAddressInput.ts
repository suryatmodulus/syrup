import { ID } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"

export interface MailingAddressInput {
  address1?: string | undefined | null,
  address2?: string | undefined | null,
  city?: string | undefined | null,
  company?: string | undefined | null,
  country?: string | undefined | null,
  countryCode?: Enums.CountryCode | undefined | null,
  firstName?: string | undefined | null,
  id?: ID | undefined | null,
  lastName?: string | undefined | null,
  phone?: string | undefined | null,
  province?: string | undefined | null,
  provinceCode?: string | undefined | null,
  zip?: string | undefined | null
}

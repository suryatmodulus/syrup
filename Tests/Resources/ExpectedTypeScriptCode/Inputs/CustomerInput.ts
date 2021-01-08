import { ID } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"

export interface CustomerInput {
  acceptsMarketing?: boolean | null,
  acceptsMarketingUpdatedAt?: string | null,
  addresses?: (Inputs.MailingAddressInput)[] | null,
  email?: string | null,
  firstName?: string | null,
  id?: ID | null,
  lastName?: string | null,
  locale?: string | null,
  marketingOptInLevel?: Enums.CustomerMarketingOptInLevel | null,
  metafields?: (Inputs.MetafieldInput)[] | null,
  note?: string | null,
  phone?: string | null,
  privateMetafields?: (Inputs.PrivateMetafieldInput)[] | null,
  tags?: (string)[] | null,
  taxExempt?: boolean | null,
  taxExemptions?: (Enums.TaxExemption)[] | null
}

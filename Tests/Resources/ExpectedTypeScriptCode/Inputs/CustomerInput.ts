import { ID } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"

export interface CustomerInput {
  acceptsMarketing?: boolean | undefined | null,
  acceptsMarketingUpdatedAt?: string | undefined | null,
  addresses?: Array<Inputs.MailingAddressInput> | undefined | null,
  email?: string | undefined | null,
  firstName?: string | undefined | null,
  id?: ID | undefined | null,
  lastName?: string | undefined | null,
  locale?: string | undefined | null,
  marketingOptInLevel?: Enums.CustomerMarketingOptInLevel | undefined | null,
  metafields?: Array<Inputs.MetafieldInput> | undefined | null,
  note?: string | undefined | null,
  phone?: string | undefined | null,
  privateMetafields?: Array<Inputs.PrivateMetafieldInput> | undefined | null,
  tags?: Array<string> | undefined | null,
  taxExempt?: boolean | undefined | null,
  taxExemptions?: Array<Enums.TaxExemption> | undefined | null
}

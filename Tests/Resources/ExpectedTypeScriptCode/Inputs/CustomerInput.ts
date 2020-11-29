import { ID } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"

export interface CustomerInput_Arguments {
  acceptsMarketing?: boolean | undefined | null,
  acceptsMarketingUpdatedAt?: Date | undefined | null,
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

export class CustomerInput {
  public acceptsMarketing: boolean | undefined | null = undefined
  public acceptsMarketingUpdatedAt: Date | undefined | null = undefined
  public addresses: Array<Inputs.MailingAddressInput> | undefined | null = undefined
  public email: string | undefined | null = undefined
  public firstName: string | undefined | null = undefined
  public id: ID | undefined | null = undefined
  public lastName: string | undefined | null = undefined
  public locale: string | undefined | null = undefined
  public marketingOptInLevel: Enums.CustomerMarketingOptInLevel | undefined | null = undefined
  public metafields: Array<Inputs.MetafieldInput> | undefined | null = undefined
  public note: string | undefined | null = undefined
  public phone: string | undefined | null = undefined
  public privateMetafields: Array<Inputs.PrivateMetafieldInput> | undefined | null = undefined
  public tags: Array<string> | undefined | null = undefined
  public taxExempt: boolean | undefined | null = undefined
  public taxExemptions: Array<Enums.TaxExemption> | undefined | null = undefined

  constructor(inputArguments: CustomerInput_Arguments = {}) {
    this.acceptsMarketing = inputArguments.acceptsMarketing
    this.acceptsMarketingUpdatedAt = inputArguments.acceptsMarketingUpdatedAt
    this.addresses = inputArguments.addresses
    this.email = inputArguments.email
    this.firstName = inputArguments.firstName
    this.id = inputArguments.id
    this.lastName = inputArguments.lastName
    this.locale = inputArguments.locale
    this.marketingOptInLevel = inputArguments.marketingOptInLevel
    this.metafields = inputArguments.metafields
    this.note = inputArguments.note
    this.phone = inputArguments.phone
    this.privateMetafields = inputArguments.privateMetafields
    this.tags = inputArguments.tags
    this.taxExempt = inputArguments.taxExempt
    this.taxExemptions = inputArguments.taxExemptions
  }
}

import { ID } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"

export interface MailingAddressInput_Arguments {
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

export class MailingAddressInput {
  public address1: string | undefined | null = undefined
  public address2: string | undefined | null = undefined
  public city: string | undefined | null = undefined
  public company: string | undefined | null = undefined
  public country: string | undefined | null = undefined
  public countryCode: Enums.CountryCode | undefined | null = undefined
  public firstName: string | undefined | null = undefined
  public id: ID | undefined | null = undefined
  public lastName: string | undefined | null = undefined
  public phone: string | undefined | null = undefined
  public province: string | undefined | null = undefined
  public provinceCode: string | undefined | null = undefined
  public zip: string | undefined | null = undefined

  constructor(inputArguments: MailingAddressInput_Arguments = {}) {
    this.address1 = inputArguments.address1
    this.address2 = inputArguments.address2
    this.city = inputArguments.city
    this.company = inputArguments.company
    this.country = inputArguments.country
    this.countryCode = inputArguments.countryCode
    this.firstName = inputArguments.firstName
    this.id = inputArguments.id
    this.lastName = inputArguments.lastName
    this.phone = inputArguments.phone
    this.province = inputArguments.province
    this.provinceCode = inputArguments.provinceCode
    this.zip = inputArguments.zip
  }
}

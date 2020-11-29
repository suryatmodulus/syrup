import { ID } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"

export interface CollectionInput_Arguments {
  descriptionHtml?: string | undefined | null,
  handle?: string | undefined | null,
  id?: ID | undefined | null,
  image?: Inputs.ImageInput | undefined | null,
  products?: Array<ID> | undefined | null,
  publications?: Array<Inputs.CollectionPublicationInput> | undefined | null,
  privateMetafields?: Array<Inputs.PrivateMetafieldInput> | undefined | null,
  ruleSet?: Inputs.CollectionRuleSetInput | undefined | null,
  templateSuffix?: string | undefined | null,
  sortOrder?: Enums.CollectionSortOrder | undefined | null,
  title?: string | undefined | null,
  metafields?: Array<Inputs.MetafieldInput> | undefined | null,
  seo?: Inputs.SEOInput | undefined | null,
  redirectNewHandle?: boolean | undefined | null
}

export class CollectionInput {
  public descriptionHtml: string | undefined | null = undefined
  public handle: string | undefined | null = undefined
  public id: ID | undefined | null = undefined
  public image: Inputs.ImageInput | undefined | null = undefined
  public products: Array<ID> | undefined | null = undefined
  public publications: Array<Inputs.CollectionPublicationInput> | undefined | null = undefined
  public privateMetafields: Array<Inputs.PrivateMetafieldInput> | undefined | null = undefined
  public ruleSet: Inputs.CollectionRuleSetInput | undefined | null = undefined
  public templateSuffix: string | undefined | null = undefined
  public sortOrder: Enums.CollectionSortOrder | undefined | null = undefined
  public title: string | undefined | null = undefined
  public metafields: Array<Inputs.MetafieldInput> | undefined | null = undefined
  public seo: Inputs.SEOInput | undefined | null = undefined
  public redirectNewHandle: boolean | undefined | null = undefined

  constructor(inputArguments: CollectionInput_Arguments = {}) {
    this.descriptionHtml = inputArguments.descriptionHtml
    this.handle = inputArguments.handle
    this.id = inputArguments.id
    this.image = inputArguments.image
    this.products = inputArguments.products
    this.publications = inputArguments.publications
    this.privateMetafields = inputArguments.privateMetafields
    this.ruleSet = inputArguments.ruleSet
    this.templateSuffix = inputArguments.templateSuffix
    this.sortOrder = inputArguments.sortOrder
    this.title = inputArguments.title
    this.metafields = inputArguments.metafields
    this.seo = inputArguments.seo
    this.redirectNewHandle = inputArguments.redirectNewHandle
  }
}

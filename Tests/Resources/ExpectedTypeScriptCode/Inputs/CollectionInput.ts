import { ID } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"

export interface CollectionInput {
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

import { ID } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"

export interface CollectionInput {
  descriptionHtml?: string | null,
  handle?: string | null,
  id?: ID | null,
  image?: Inputs.ImageInput | null,
  products?: (ID)[] | null,
  publications?: (Inputs.CollectionPublicationInput)[] | null,
  privateMetafields?: (Inputs.PrivateMetafieldInput)[] | null,
  ruleSet?: Inputs.CollectionRuleSetInput | null,
  templateSuffix?: string | null,
  sortOrder?: Enums.CollectionSortOrder | null,
  title?: string | null,
  metafields?: (Inputs.MetafieldInput)[] | null,
  seo?: Inputs.SEOInput | null,
  redirectNewHandle?: boolean | null
}

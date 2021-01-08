import { ID } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"

export interface CollectionPublicationInput {
  publicationId?: ID | null,
  channelId?: ID | null,
  channelHandle?: string | null
}

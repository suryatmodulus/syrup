import { ID } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"

export interface CollectionPublicationInput {
  publicationId?: ID | undefined | null,
  channelId?: ID | undefined | null,
  channelHandle?: string | undefined | null
}

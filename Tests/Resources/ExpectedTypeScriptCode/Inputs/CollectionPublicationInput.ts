import { ID } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"

export interface CollectionPublicationInput_Arguments {
  publicationId?: ID | undefined | null,
  channelId?: ID | undefined | null,
  channelHandle?: string | undefined | null
}

export class CollectionPublicationInput {
  public publicationId: ID | undefined | null = undefined
  public channelId: ID | undefined | null = undefined
  public channelHandle: string | undefined | null = undefined

  constructor(inputArguments: CollectionPublicationInput_Arguments = {}) {
    this.publicationId = inputArguments.publicationId
    this.channelId = inputArguments.channelId
    this.channelHandle = inputArguments.channelHandle
  }
}

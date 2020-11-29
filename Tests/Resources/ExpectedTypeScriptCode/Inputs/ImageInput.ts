import { ID } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"

export interface ImageInput_Arguments {
  id?: ID | undefined | null,
  altText?: string | undefined | null,
  src?: string | undefined | null
}

export class ImageInput {
  public id: ID | undefined | null = undefined
  public altText: string | undefined | null = undefined
  public src: string | undefined | null = undefined

  constructor(inputArguments: ImageInput_Arguments = {}) {
    this.id = inputArguments.id
    this.altText = inputArguments.altText
    this.src = inputArguments.src
  }
}

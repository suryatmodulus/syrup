import { ID } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"

export interface SEOInput_Arguments {
  title?: string | undefined | null,
  description?: string | undefined | null
}

export class SEOInput {
  public title: string | undefined | null = undefined
  public description: string | undefined | null = undefined

  constructor(inputArguments: SEOInput_Arguments = {}) {
    this.title = inputArguments.title
    this.description = inputArguments.description
  }
}

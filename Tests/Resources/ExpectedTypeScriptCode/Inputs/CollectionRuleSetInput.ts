import { ID } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"

export interface CollectionRuleSetInput_Arguments {
  appliedDisjunctively?: boolean,
  rules?: Array<Inputs.CollectionRuleInput> | undefined | null
}

export class CollectionRuleSetInput {
  public appliedDisjunctively: boolean
  public rules: Array<Inputs.CollectionRuleInput> | undefined | null = undefined

  constructor(inputArguments: CollectionRuleSetInput_Arguments = {}) {
    this.appliedDisjunctively = inputArguments.appliedDisjunctively
    this.rules = inputArguments.rules
  }
}

import { ID } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"

export interface CollectionRuleSetInput {
  appliedDisjunctively?: boolean,
  rules?: (Inputs.CollectionRuleInput)[] | null
}

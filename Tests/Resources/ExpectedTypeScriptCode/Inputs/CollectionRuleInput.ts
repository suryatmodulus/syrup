import { ID } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"

export interface CollectionRuleInput {
  column?: Enums.CollectionRuleColumn,
  relation?: Enums.CollectionRuleRelation,
  condition?: string
}

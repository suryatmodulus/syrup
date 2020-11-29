import { ID } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"

export interface CollectionRuleInput_Arguments {
  column?: Enums.CollectionRuleColumn,
  relation?: Enums.CollectionRuleRelation,
  condition?: string
}

export class CollectionRuleInput {
  public column: Enums.CollectionRuleColumn
  public relation: Enums.CollectionRuleRelation
  public condition: string

  constructor(inputArguments: CollectionRuleInput_Arguments = {}) {
    this.column = inputArguments.column
    this.relation = inputArguments.relation
    this.condition = inputArguments.condition
  }
}

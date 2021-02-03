import { ID } from "../GraphApi"
import { CollectionRuleInput } from "./CollectionRuleInput"

export interface CollectionRuleSetInput {
  appliedDisjunctively?: boolean;
  rules?: (CollectionRuleInput)[] | null;
}

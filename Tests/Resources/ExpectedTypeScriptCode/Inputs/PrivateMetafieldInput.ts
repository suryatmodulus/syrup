import { ID } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"

export interface PrivateMetafieldInput {
  owner?: ID | undefined | null,
  'namespace'?: string,
  key?: string,
  valueInput?: Inputs.PrivateMetafieldValueInput
}

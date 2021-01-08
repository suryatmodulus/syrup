import { ID } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"

export interface MetafieldInput {
  description?: string | null,
  id?: ID | null,
  key?: string | null,
  'namespace'?: string | null,
  value?: string | null,
  valueType?: Enums.MetafieldValueType | null
}

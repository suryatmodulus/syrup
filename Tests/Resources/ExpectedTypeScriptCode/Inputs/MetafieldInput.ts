import { ID } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"

export interface MetafieldInput {
  description?: string | undefined | null,
  id?: ID | undefined | null,
  key?: string | undefined | null,
  'namespace'?: string | undefined | null,
  value?: string | undefined | null,
  valueType?: Enums.MetafieldValueType | undefined | null
}

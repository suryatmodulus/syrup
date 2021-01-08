import { ID } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"

export interface ImageInput {
  id?: ID | null,
  altText?: string | null,
  src?: string | null
}

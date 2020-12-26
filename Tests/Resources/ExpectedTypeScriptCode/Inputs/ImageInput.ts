import { ID } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"

export interface ImageInput {
  id?: ID | undefined | null,
  altText?: string | undefined | null,
  src?: string | undefined | null
}

import { ID, GraphSelection } from "../GraphApi"
import * as Enums from "../Enums"

export interface ProductNodeTitle {

  /**
   * The title of the product.
   */
  title: string
}

export const productNodeTitleSelections = [
{
name: "title",
type: { name: "String", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Product", definedType: "Object" },
directive: null,
selections: []}]

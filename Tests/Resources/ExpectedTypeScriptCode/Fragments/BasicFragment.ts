import { ID, GraphSelection } from "../GraphApi"
import * as Enums from "../Enums"

export interface BasicFragment {

  /**
   * Globally unique identifier.
   */
  id: ID,

  /**
   * The customer's last name.
   */
  lastName: string | undefined
}

export const basicFragmentSelections = [
{
name: "id",
type: { name: "ID", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Customer", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "lastName",
type: { name: "String", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Customer", definedType: "Object" },
directive: null,
selections: []}]

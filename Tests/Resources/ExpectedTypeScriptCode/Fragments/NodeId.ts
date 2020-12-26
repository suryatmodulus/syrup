import { ID, Response, GraphSelection } from "../GraphApi"
import * as Enums from "../Enums"

export interface NodeId {
  realized: {},

  /**
   * Globally unique identifier.
   */
  id: ID
}

export const nodeIdSelections = [
{
name: "id",
type: { name: "ID", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Node", definedType: "Interface" },
directive: null,
selections: []}]

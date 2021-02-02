

import { ID, GraphSelection, copyWithTypeCondition } from "../GraphApi"
export interface NodeId {
  __typename: '';
  realized: {};

  /**
   * Globally unique identifier.
   */
  id: ID;
}

export const nodeIdSelections: GraphSelection[] = ([
  {
    name: "id",
    type: { name: "ID", definedType: "Scalar" },
    arguments: {},
    passedGID: null,
    typeCondition: { name: "Node", definedType: "Interface" },
    directive: null,
    selections: ([] as GraphSelection[])
  }
] as GraphSelection[])

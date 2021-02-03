

import { ID, GraphSelection, copyWithTypeCondition } from "../GraphApi"

export interface NodeIdFragmentData {
  __typename: unknown;
  realized: unknown;

  /**
   * Globally unique identifier.
   */
  id: ID;
}

export const nodeIdFragmentDataSelections: GraphSelection[] = ([
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

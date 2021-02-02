

import { ID, GraphSelection, copyWithTypeCondition } from "../GraphApi"

export interface BasicFragment {
  __typename: 'Customer';

  /**
   * Globally unique identifier.
   */
  id: ID;

  /**
   * The customer's last name.
   */
  lastName: string | undefined;
}

export const basicFragmentSelections: GraphSelection[] = ([
  {
    name: "id",
    type: { name: "ID", definedType: "Scalar" },
    arguments: {},
    passedGID: null,
    typeCondition: { name: "Customer", definedType: "Object" },
    directive: null,
    selections: ([] as GraphSelection[])
  }, 
  {
    name: "lastName",
    type: { name: "String", definedType: "Scalar" },
    arguments: {},
    passedGID: null,
    typeCondition: { name: "Customer", definedType: "Object" },
    directive: null,
    selections: ([] as GraphSelection[])
  }
] as GraphSelection[])

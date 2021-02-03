

import { ID, GraphSelection, copyWithTypeCondition } from "../GraphApi"

export interface BasicFragmentFragmentData {
  __typename: 'Customer';

  /**
   * Globally unique identifier.
   */
  id: ID;

  /**
   * The customer's last name.
   */
  lastName?: string | null;
}

export const basicFragmentFragmentDataSelections: GraphSelection[] = ([
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

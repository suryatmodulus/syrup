

import { ID, GraphSelection, copyWithTypeCondition } from "../GraphApi"

export interface ProductNodeTitleFragmentData {
  __typename: 'Product';

  /**
   * The title of the product.
   */
  title: string;
}

export const productNodeTitleFragmentDataSelections: GraphSelection[] = ([
  {
    name: "__typename",
    type: { name: "String", definedType: "Scalar" },
    arguments: {},
    passedGID: null,
    typeCondition: { name: "Product", definedType: "Object" },
    directive: null,
    selections: ([] as GraphSelection[])
  }, 
  {
    name: "title",
    type: { name: "String", definedType: "Scalar" },
    arguments: {},
    passedGID: null,
    typeCondition: { name: "Product", definedType: "Object" },
    directive: null,
    selections: ([] as GraphSelection[])
  }
] as GraphSelection[])

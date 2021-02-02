

import { ID, GraphSelection, copyWithTypeCondition } from "../GraphApi"

export interface ProductNodeTitle {
  __typename: 'Product';

  /**
   * The title of the product.
   */
  title: string;
}

export const productNodeTitleSelections: GraphSelection[] = ([
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

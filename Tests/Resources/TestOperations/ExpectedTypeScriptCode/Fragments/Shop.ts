

import { ID, GraphSelection, copyWithTypeCondition } from "../GraphApi"

export interface Shop {
  __typename: 'QueryRoot';

  /**
   * Returns a Shop resource corresponding to access token used in request.
   */
  shop: ShopShop;
}

export interface ShopShop {
  __typename: 'Shop';
  /**
   * List of sales channels not currently installed on the shop.
   */
  availableChannelApps: ShopShopAvailableChannelApps;
}
export interface ShopShopAvailableChannelApps {
  __typename: 'AppConnection';
  /**
   * A list of edges.
   */
  edges: ShopShopAvailableChannelAppsEdges[];
}
export interface ShopShopAvailableChannelAppsEdges {
  __typename: 'AppEdge';
  /**
   * The item at the end of AppEdge.
   */
  node: ShopShopAvailableChannelAppsEdgesNode;
}
export interface ShopShopAvailableChannelAppsEdgesNode {
  __typename: 'App';
  /**
   * Globally unique identifier.
   */
  id: ID;
}

export const shopSelections: GraphSelection[] = ([
  {
    name: "shop",
    type: { name: "Shop", definedType: "Object" },
    arguments: {},
    passedGID: null,
    typeCondition: { name: "QueryRoot", definedType: "Object" },
    directive: null,
    selections: ([
      {
        name: "availableChannelApps",
        type: { name: "AppConnection", definedType: "Object" },
        arguments: { first: { type: "OperationVariableKey", value: "first" } },
        passedGID: null,
        typeCondition: { name: "Shop", definedType: "Object" },
        directive: null,
        selections: ([
          {
            name: "edges",
            type: { name: "AppEdge", definedType: "Object" },
            arguments: {},
            passedGID: null,
            typeCondition: { name: "AppConnection", definedType: "Object" },
            directive: null,
            selections: ([
              {
                name: "node",
                type: { name: "App", definedType: "Object" },
                arguments: {},
                passedGID: null,
                typeCondition: { name: "AppEdge", definedType: "Object" },
                directive: null,
                selections: ([
                  {
                    name: "id",
                    type: { name: "ID", definedType: "Scalar" },
                    arguments: {},
                    passedGID: null,
                    typeCondition: { name: "App", definedType: "Object" },
                    directive: null,
                    selections: ([] as GraphSelection[])
                  }
                ] as GraphSelection[])
              }
            ] as GraphSelection[])
          }
        ] as GraphSelection[])
      }
    ] as GraphSelection[])
  }
] as GraphSelection[])

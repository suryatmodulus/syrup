import { ID, GraphSelection, SyrupOperation, copyWithTypeCondition } from "../GraphApi"

export namespace TestQuery0QueryData {
  export interface Nodes {
    __typename: unknown;
    realized: unknown;
    /**
     * Globally unique identifier.
     */
    id: ID;
  }
}

export interface TestQuery0QueryData {

  /**
   * Returns the list of nodes with the given IDs.
   */
  nodes: TestQuery0QueryData.Nodes | null[]
}

const document: SyrupOperation<TestQuery0QueryData, {}> = {
  id: "ed2f857cf0d2032aee79d91c5b4aa7165b90ee68eb89cad6438cf4be8d14eddc",
  name: "TestQuery0",
  source: "query TestQuery0 { __typename nodes(ids: [\\\"gid://shopify/Customer/350635977\\\"]) { __typename id } }",
  operationType: 'query',
  selections: ([
    {
      name: "nodes",
      type: { name: "Node", definedType: "Interface" },
      arguments: { ids: { type: "ListValue", value: [{ type: "StringValue", value: "gid://shopify/Customer/350635977" }] } },
      passedGID: null,
      typeCondition: { name: "QueryRoot", definedType: "Object" },
      directive: null,
      selections: ([
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
    }
  ] as GraphSelection[])
}
export default document

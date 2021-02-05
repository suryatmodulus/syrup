import { ID, GraphSelection, SyrupOperation, copyWithTypeCondition } from "../GraphApi"

export namespace TestQuery11QueryData {
  export interface Variables {
    productId: ID;
  }
  export interface NodeRealizedProductCollectionsEdgesNode {
    __typename: 'Collection';
    /**
     * Globally unique identifier.
     */
    id: ID;
    /**
     * The title of the collection.
     */
    title: string;
  }
  export interface NodeRealizedProductCollectionsEdges {
    __typename: 'CollectionEdge';
    /**
     * The item at the end of CollectionEdge.
     */
    node: NodeRealizedProductCollectionsEdgesNode;
  }
  export interface NodeRealizedProductCollections {
    __typename: 'CollectionConnection';
    /**
     * A list of edges.
     */
    edges: NodeRealizedProductCollectionsEdges[];
  }
  export interface NodeRealizedProduct {
    __typename: 'Product';
    /**
     * Globally unique identifier.
     */
    id: ID;
    /**
     * A list of the collections that include the product.
     */
    collections: NodeRealizedProductCollections;
  }
  export interface NodeRealizedProductOption {
    __typename: 'ProductOption';
    /**
     * Globally unique identifier.
     */
    id: ID;
  }
  export interface Node {
    __typename: 'Product' | 'ProductOption';
    realized: NodeRealizedProduct | NodeRealizedProductOption;
  }
}

export interface TestQuery11QueryData {

  /**
   * Returns a specific node by ID.
   */
  node?: TestQuery11QueryData.Node | null;
}

const document: SyrupOperation<TestQuery11QueryData, TestQuery11QueryData.Variables> = {
  id: "109024c16a59d9092444f6f00751dd75a2d2c8bc285734a02ed2dea79a2976a8",
  name: "TestQuery11",
  source: "query TestQuery11(\$productId: ID!) { __typename node(id: \$productId) { __typename ... on Product { __typename id collections(first: 100) { __typename edges { __typename node { __typename id title } } } }... on ProductOption { __typename id } } }",
  operationType: 'query',
  selections: ([
    {
      name: "__typename",
      type: { name: "String", definedType: "Scalar" },
      arguments: {},
      passedGID: null,
      typeCondition: { name: "QueryRoot", definedType: "Object" },
      directive: null,
      selections: ([] as GraphSelection[])
    }, 
    {
      name: "node",
      type: { name: "Node", definedType: "Interface" },
      arguments: { id: { type: "OperationVariableKey", value: "productId" } },
      passedGID: "productId",
      typeCondition: { name: "QueryRoot", definedType: "Object" },
      directive: null,
      selections: ([
        {
          name: "__typename",
          type: { name: "String", definedType: "Scalar" },
          arguments: {},
          passedGID: null,
          typeCondition: { name: "Node", definedType: "Interface" },
          directive: null,
          selections: ([] as GraphSelection[])
        }, 
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
          name: "id",
          type: { name: "ID", definedType: "Scalar" },
          arguments: {},
          passedGID: null,
          typeCondition: { name: "Product", definedType: "Object" },
          directive: null,
          selections: ([] as GraphSelection[])
        }, 
        {
          name: "collections",
          type: { name: "CollectionConnection", definedType: "Object" },
          arguments: { first: { type: "IntValue", value: 100 } },
          passedGID: null,
          typeCondition: { name: "Product", definedType: "Object" },
          directive: null,
          selections: ([
            {
              name: "__typename",
              type: { name: "String", definedType: "Scalar" },
              arguments: {},
              passedGID: null,
              typeCondition: { name: "CollectionConnection", definedType: "Object" },
              directive: null,
              selections: ([] as GraphSelection[])
            }, 
            {
              name: "edges",
              type: { name: "CollectionEdge", definedType: "Object" },
              arguments: {},
              passedGID: null,
              typeCondition: { name: "CollectionConnection", definedType: "Object" },
              directive: null,
              selections: ([
                {
                  name: "__typename",
                  type: { name: "String", definedType: "Scalar" },
                  arguments: {},
                  passedGID: null,
                  typeCondition: { name: "CollectionEdge", definedType: "Object" },
                  directive: null,
                  selections: ([] as GraphSelection[])
                }, 
                {
                  name: "node",
                  type: { name: "Collection", definedType: "Object" },
                  arguments: {},
                  passedGID: null,
                  typeCondition: { name: "CollectionEdge", definedType: "Object" },
                  directive: null,
                  selections: ([
                    {
                      name: "__typename",
                      type: { name: "String", definedType: "Scalar" },
                      arguments: {},
                      passedGID: null,
                      typeCondition: { name: "Collection", definedType: "Object" },
                      directive: null,
                      selections: ([] as GraphSelection[])
                    }, 
                    {
                      name: "id",
                      type: { name: "ID", definedType: "Scalar" },
                      arguments: {},
                      passedGID: null,
                      typeCondition: { name: "Collection", definedType: "Object" },
                      directive: null,
                      selections: ([] as GraphSelection[])
                    }, 
                    {
                      name: "title",
                      type: { name: "String", definedType: "Scalar" },
                      arguments: {},
                      passedGID: null,
                      typeCondition: { name: "Collection", definedType: "Object" },
                      directive: null,
                      selections: ([] as GraphSelection[])
                    }
                  ] as GraphSelection[])
                }
              ] as GraphSelection[])
            }
          ] as GraphSelection[])
        }, 
        {
          name: "__typename",
          type: { name: "String", definedType: "Scalar" },
          arguments: {},
          passedGID: null,
          typeCondition: { name: "ProductOption", definedType: "Object" },
          directive: null,
          selections: ([] as GraphSelection[])
        }, 
        {
          name: "id",
          type: { name: "ID", definedType: "Scalar" },
          arguments: {},
          passedGID: null,
          typeCondition: { name: "ProductOption", definedType: "Object" },
          directive: null,
          selections: ([] as GraphSelection[])
        }
      ] as GraphSelection[])
    }
  ] as GraphSelection[])
}
export default document

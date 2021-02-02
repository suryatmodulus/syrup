import { ID, GraphSelection, SyrupOperation, copyWithTypeCondition } from "../GraphApi"
import {
  CollectionInput,
} from "../Inputs"

export namespace CreateCollectionMutationData {
  export interface Variables {
    input: CollectionInput
  }
  export interface CollectionCreate {
    __typename: 'CollectionCreatePayload';
    /**
     * List of errors that occurred executing the mutation.
     */
    userErrors: CollectionCreateUserErrors[];
    /**
     * The collection that has been created.
     */
    collection: CollectionCreateCollection | undefined;
  }
  export interface CollectionCreateUserErrors {
    __typename: 'UserError';
    /**
     * Path to the input field which caused the error.
     */
    field: string[] | undefined;
    /**
     * The error message.
     */
    message: string;
  }
  export interface CollectionCreateCollection {
    __typename: 'Collection';
    /**
     * The title of the collection.
     */
    title: string;
    /**
     * Globally unique identifier.
     */
    id: ID;
    /**
     * Information about the collection that's provided through resource feedback.
     */
    feedback: CollectionCreateCollectionFeedback | undefined;
  }
  export interface CollectionCreateCollectionFeedback {
    __typename: 'ResourceFeedback';
    /**
     * Summary of resource feedback pertaining to the resource.
     */
    summary: string;
  }
}

export interface CreateCollectionMutationData {

  /**
   * Creates a collection.
   */
  collectionCreate: CreateCollectionMutationData.CollectionCreate | undefined
}

const document: SyrupOperation<CreateCollectionMutationData, CreateCollectionMutationData.Variables> = {
  id: "abafa5f2606e8e323707b978fd34db34da7ba6f12c9af3eac1aa6bc15718e3aa",
  name: "CreateCollection",
  source: "mutation CreateCollection(\$input: CollectionInput!) { __typename collectionCreate(input: \$input) { __typename userErrors { __typename field message } collection { __typename title id feedback { __typename summary } } } }",
  operationType: 'mutation',
  selections: ([
    {
      name: "collectionCreate",
      type: { name: "CollectionCreatePayload", definedType: "Object" },
      arguments: { input: { type: "OperationVariableKey", value: "input" } },
      passedGID: null,
      typeCondition: { name: "Mutation", definedType: "Object" },
      directive: null,
      selections: ([
        {
          name: "userErrors",
          type: { name: "UserError", definedType: "Object" },
          arguments: {},
          passedGID: null,
          typeCondition: { name: "CollectionCreatePayload", definedType: "Object" },
          directive: null,
          selections: ([
            {
              name: "field",
              type: { name: "String", definedType: "Scalar" },
              arguments: {},
              passedGID: null,
              typeCondition: { name: "UserError", definedType: "Object" },
              directive: null,
              selections: ([] as GraphSelection[])
            }, 
            {
              name: "message",
              type: { name: "String", definedType: "Scalar" },
              arguments: {},
              passedGID: null,
              typeCondition: { name: "UserError", definedType: "Object" },
              directive: null,
              selections: ([] as GraphSelection[])
            }
          ] as GraphSelection[])
        }, 
        {
          name: "collection",
          type: { name: "Collection", definedType: "Object" },
          arguments: {},
          passedGID: null,
          typeCondition: { name: "CollectionCreatePayload", definedType: "Object" },
          directive: null,
          selections: ([
            {
              name: "title",
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
              name: "feedback",
              type: { name: "ResourceFeedback", definedType: "Object" },
              arguments: {},
              passedGID: null,
              typeCondition: { name: "Collection", definedType: "Object" },
              directive: null,
              selections: ([
                {
                  name: "summary",
                  type: { name: "String", definedType: "Scalar" },
                  arguments: {},
                  passedGID: null,
                  typeCondition: { name: "ResourceFeedback", definedType: "Object" },
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
export default document

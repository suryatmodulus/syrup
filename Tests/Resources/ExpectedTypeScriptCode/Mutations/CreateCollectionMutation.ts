import { SimpleDocument } from "graphql-typed"
import { ID, GraphSelection, SyrupOperation, copyWithTypeCondtion } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"
import * as Fragments from "../Fragments"

export namespace CreateCollectionMutationData {
  export interface Variables {
    input: Inputs.CollectionInput
  }
export interface CollectionCreate {
  /**
   * List of errors that occurred executing the mutation.
   */
  userErrors: CollectionCreateUserErrors[],
  /**
   * The collection that has been created.
   */
  collection: CollectionCreateCollection | undefined
}
export interface CollectionCreateUserErrors {
  /**
   * Path to the input field which caused the error.
   */
  field: string[] | undefined,
  /**
   * The error message.
   */
  message: string
}
export interface CollectionCreateCollection {
  /**
   * The title of the collection.
   */
  title: string,
  /**
   * Globally unique identifier.
   */
  id: ID,
  /**
   * Information about the collection that's provided through resource feedback.
   */
  feedback: CollectionCreateCollectionFeedback | undefined
}
export interface CollectionCreateCollectionFeedback {
  /**
   * Summary of resource feedback pertaining to the resource.
   */
  summary: string
}

}

export interface CreateCollectionMutationData {

  /**
   * Creates a collection.
   */
  collectionCreate: CreateCollectionMutationData.CollectionCreate | undefined
}

const document: SimpleDocument<SyrupOperation, CreateCollectionMutationData.Variables> = {
  id: "abafa5f2606e8e323707b978fd34db34da7ba6f12c9af3eac1aa6bc15718e3aa",
  name: "CreateCollection",
  source: "mutation CreateCollection(\$input: CollectionInput!) { __typename collectionCreate(input: \$input) { __typename userErrors { __typename field message } collection { __typename title id feedback { __typename summary } } } }",
  __typeData: {
    operationType: 'mutation',
    selections: [
{
name: "collectionCreate",
type: { name: "CollectionCreatePayload", definedType: "Object" },
arguments: { input: { type: "OperationVariableKey", value: "input" } },
passedGID: null,
typeCondition: { name: "Mutation", definedType: "Object" },
directive: null,
selections: [
{
name: "userErrors",
type: { name: "UserError", definedType: "Object" },
arguments: {},
passedGID: null,
typeCondition: { name: "CollectionCreatePayload", definedType: "Object" },
directive: null,
selections: [
{
name: "field",
type: { name: "String", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "UserError", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "message",
type: { name: "String", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "UserError", definedType: "Object" },
directive: null,
selections: []}]}, 
{
name: "collection",
type: { name: "Collection", definedType: "Object" },
arguments: {},
passedGID: null,
typeCondition: { name: "CollectionCreatePayload", definedType: "Object" },
directive: null,
selections: [
{
name: "title",
type: { name: "String", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Collection", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "id",
type: { name: "ID", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Collection", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "feedback",
type: { name: "ResourceFeedback", definedType: "Object" },
arguments: {},
passedGID: null,
typeCondition: { name: "Collection", definedType: "Object" },
directive: null,
selections: [
{
name: "summary",
type: { name: "String", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "ResourceFeedback", definedType: "Object" },
directive: null,
selections: []}]}]}]}]
  }
}
export default document

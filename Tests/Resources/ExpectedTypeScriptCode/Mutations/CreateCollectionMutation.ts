
import { ID, GraphSelection, Mutation } from "../GraphApi"
import { CreateCollectionResponse } from "../Responses/CreateCollectionResponse"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"
import * as Fragments from "../Fragments"

export interface CreateCollectionMutationArguments {
  input: Inputs.CollectionInput
}

export class CreateCollectionMutation extends Mutation<CreateCollectionResponse> {
    constructor(operationVariables: CreateCollectionMutationArguments) {
      super(
        "mutation CreateCollection(\$input: CollectionInput!) { __typename collectionCreate(input: \$input) { __typename userErrors { __typename field message } collection { __typename title id feedback { __typename summary } } } }",
        {
          "input": `${operationVariables.input}`
        },
        new Array<GraphSelection>(
new GraphSelection({
name: "collectionCreate",
type: "CollectionCreatePayload",
cacheKey: `collectionCreate(input: ${operationVariables["input"]})`,
passedGID: null,
typeCondition: "Mutation",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "userErrors",
type: "UserError",
cacheKey: `userErrors`,
passedGID: null,
typeCondition: "CollectionCreatePayload",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "field",
type: "String",
cacheKey: `field`,
passedGID: null,
typeCondition: "UserError",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "message",
type: "String",
cacheKey: `message`,
passedGID: null,
typeCondition: "UserError",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}))}), 
new GraphSelection({
name: "collection",
type: "Collection",
cacheKey: `collection`,
passedGID: null,
typeCondition: "CollectionCreatePayload",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "title",
type: "String",
cacheKey: `title`,
passedGID: null,
typeCondition: "Collection",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "id",
type: "ID",
cacheKey: `id`,
passedGID: null,
typeCondition: "Collection",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "feedback",
type: "ResourceFeedback",
cacheKey: `feedback`,
passedGID: null,
typeCondition: "Collection",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "summary",
type: "String",
cacheKey: `summary`,
passedGID: null,
typeCondition: "ResourceFeedback",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}))}))}))}))
      )
    }

    decodeResponse(jsonObject: Object): CreateCollectionResponse {
      return CreateCollectionResponse.fromJson(jsonObject)
    }
}
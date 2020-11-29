
import { ID, Response, GraphSelection } from "../GraphApi"
import * as Enums from "../Enums"
import * as Fragments from "../Fragments"

export interface CreateCollectionResponse_Arguments {

  /**
   * Creates a collection.
   */
  collectionCreate: CreateCollectionResponse_CollectionCreate | undefined
}

export class CreateCollectionResponse implements Response {
  readonly collectionCreate: CreateCollectionResponse_CollectionCreate | undefined

  constructor(responseArguments: CreateCollectionResponse_Arguments) {
    this.collectionCreate = responseArguments.collectionCreate
  }

  static fromJson(jsonObject: any): CreateCollectionResponse {
    return new this({
      collectionCreate: jsonObject["collectionCreate"] != undefined && jsonObject["collectionCreate"] != null ? CreateCollectionResponse_CollectionCreate.fromJson(jsonObject["collectionCreate"]) : undefined
    })
  }

}

export interface CreateCollectionResponse_CollectionCreate_Arguments {
  /**
   * List of errors that occurred executing the mutation.
   */
  userErrors: Array<CreateCollectionResponse_CollectionCreate_UserErrors>,
  /**
   * The collection that has been created.
   */
  collection: CreateCollectionResponse_CollectionCreate_Collection | undefined
}
export class CreateCollectionResponse_CollectionCreate implements Response {
  readonly userErrors: Array<CreateCollectionResponse_CollectionCreate_UserErrors>
  readonly collection: CreateCollectionResponse_CollectionCreate_Collection | undefined
  constructor(responseArguments: CreateCollectionResponse_CollectionCreate_Arguments) {
    this.userErrors = responseArguments.userErrors
    this.collection = responseArguments.collection
  }
  static fromJson(jsonObject: any): CreateCollectionResponse_CollectionCreate {
    return new this({
      userErrors: jsonObject["userErrors"] == undefined || jsonObject["userErrors"] == null ? Array<CreateCollectionResponse_CollectionCreate_UserErrors>() : Array.from(jsonObject["userErrors"], x => CreateCollectionResponse_CollectionCreate_UserErrors.fromJson(x)),
      collection: jsonObject["collection"] != undefined && jsonObject["collection"] != null ? CreateCollectionResponse_CollectionCreate_Collection.fromJson(jsonObject["collection"]) : undefined
    })
  }
}
export interface CreateCollectionResponse_CollectionCreate_UserErrors_Arguments {
  /**
   * Path to the input field which caused the error.
   */
  field: Array<string> | undefined,
  /**
   * The error message.
   */
  message: string
}
export class CreateCollectionResponse_CollectionCreate_UserErrors implements Response {
  readonly field: Array<string> | undefined
  readonly message: string
  constructor(responseArguments: CreateCollectionResponse_CollectionCreate_UserErrors_Arguments) {
    this.field = responseArguments.field
    this.message = responseArguments.message
  }
  static fromJson(jsonObject: any): CreateCollectionResponse_CollectionCreate_UserErrors {
    return new this({
      field: jsonObject["field"] != undefined && jsonObject["field"] != null ? jsonObject["field"] as Array<string> : undefined,
      message: jsonObject["message"]
    })
  }
}
export interface CreateCollectionResponse_CollectionCreate_Collection_Arguments {
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
  feedback: CreateCollectionResponse_CollectionCreate_Collection_Feedback | undefined
}
export class CreateCollectionResponse_CollectionCreate_Collection implements Response {
  readonly title: string
  readonly id: ID
  readonly feedback: CreateCollectionResponse_CollectionCreate_Collection_Feedback | undefined
  constructor(responseArguments: CreateCollectionResponse_CollectionCreate_Collection_Arguments) {
    this.title = responseArguments.title
    this.id = responseArguments.id
    this.feedback = responseArguments.feedback
  }
  static fromJson(jsonObject: any): CreateCollectionResponse_CollectionCreate_Collection {
    return new this({
      title: jsonObject["title"],
      id: jsonObject["id"],
      feedback: jsonObject["feedback"] != undefined && jsonObject["feedback"] != null ? CreateCollectionResponse_CollectionCreate_Collection_Feedback.fromJson(jsonObject["feedback"]) : undefined
    })
  }
}
export interface CreateCollectionResponse_CollectionCreate_Collection_Feedback_Arguments {
  /**
   * Summary of resource feedback pertaining to the resource.
   */
  summary: string
}
export class CreateCollectionResponse_CollectionCreate_Collection_Feedback implements Response {
  readonly summary: string
  constructor(responseArguments: CreateCollectionResponse_CollectionCreate_Collection_Feedback_Arguments) {
    this.summary = responseArguments.summary
  }
  static fromJson(jsonObject: any): CreateCollectionResponse_CollectionCreate_Collection_Feedback {
    return new this({
      summary: jsonObject["summary"]
    })
  }
}


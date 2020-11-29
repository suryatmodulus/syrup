
import { ID, Response, GraphSelection } from "../GraphApi"
import * as Enums from "../Enums"

export interface TimelineEventFragment_Arguments {
  realized: TimelineEventFragment_Realized,

  /**
   * Globally unique identifier.
   */
  id: ID,

  /**
   * The date and time when the event was created.
   */
  createdAt: Date,

  /**
   * Human readable text that describes the event.
   */
  message: string,

  /**
   * Whether the event was created by an app.
   */
  attributeToApp: boolean,

  /**
   * Whether the event was caused by an admin user.
   */
  attributeToUser: boolean,

  /**
   * Whether the event is critical.
   */
  criticalAlert: boolean
}

export class TimelineEventFragment implements Response {
  readonly realized: TimelineEventFragment_Realized
  readonly id: ID
  readonly createdAt: Date
  readonly message: string
  readonly attributeToApp: boolean
  readonly attributeToUser: boolean
  readonly criticalAlert: boolean

  constructor(responseArguments: TimelineEventFragment_Arguments) {
    this.realized = responseArguments.realized
    this.id = responseArguments.id
    this.createdAt = responseArguments.createdAt
    this.message = responseArguments.message
    this.attributeToApp = responseArguments.attributeToApp
    this.attributeToUser = responseArguments.attributeToUser
    this.criticalAlert = responseArguments.criticalAlert
  }

  static fromJson(jsonObject: any) {
    return new this({
      realized: function(typename: string): TimelineEventFragment_Realized {
        switch(typename) {
          case "CommentEvent": 
            TimelineEventFragment_Realized_CommentEvent.fromJson(jsonObject)
          default:
            return new TimelineEventFragment_Realized_Other()
        }
      }(jsonObject["__typename"]),
      id: jsonObject["id"],
      createdAt: Date.fromJson(jsonObject["createdAt"]),
      message: jsonObject["message"],
      attributeToApp: jsonObject["attributeToApp"],
      attributeToUser: jsonObject["attributeToUser"],
      criticalAlert: jsonObject["criticalAlert"]
    })
  }

  static typeName(): string {
    return "Event"
  }

  static getSelections(operationVariables: Record<string, any>): Array<GraphSelection> {
    return new Array<GraphSelection>(
new GraphSelection({
name: "id",
type: "ID",
cacheKey: `id`,
passedGID: null,
typeCondition: "Event",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "createdAt",
type: "DateTime",
cacheKey: `createdAt`,
passedGID: null,
typeCondition: "Event",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "message",
type: "FormattedString",
cacheKey: `message`,
passedGID: null,
typeCondition: "Event",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "attributeToApp",
type: "Boolean",
cacheKey: `attributeToApp`,
passedGID: null,
typeCondition: "Event",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "attributeToUser",
type: "Boolean",
cacheKey: `attributeToUser`,
passedGID: null,
typeCondition: "Event",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "criticalAlert",
type: "Boolean",
cacheKey: `criticalAlert`,
passedGID: null,
typeCondition: "Event",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "edited",
type: "Boolean",
cacheKey: `edited`,
passedGID: null,
typeCondition: "CommentEvent",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "canEdit",
type: "Boolean",
cacheKey: `canEdit`,
passedGID: null,
typeCondition: "CommentEvent",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "canDelete",
type: "Boolean",
cacheKey: `canDelete`,
passedGID: null,
typeCondition: "CommentEvent",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "attachments",
type: "CommentEventAttachment",
cacheKey: `attachments`,
passedGID: null,
typeCondition: "CommentEvent",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "id",
type: "ID",
cacheKey: `id`,
passedGID: null,
typeCondition: "CommentEventAttachment",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "name",
type: "String",
cacheKey: `name`,
passedGID: null,
typeCondition: "CommentEventAttachment",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "size",
type: "Int",
cacheKey: `size`,
passedGID: null,
typeCondition: "CommentEventAttachment",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "fileExtension",
type: "String",
cacheKey: `fileExtension`,
passedGID: null,
typeCondition: "CommentEventAttachment",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "url",
type: "URL",
cacheKey: `url`,
passedGID: null,
typeCondition: "CommentEventAttachment",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "image",
type: "Image",
cacheKey: `image`,
passedGID: null,
typeCondition: "CommentEventAttachment",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "transformedSrc",
type: "URL",
cacheKey: `transformedSrc(maxWidth: ${operationVariables["maxImageWidth"]}, maxHeight: ${operationVariables["maxImageHeight"]})`,
passedGID: null,
typeCondition: "Image",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}))}))}))
  }
}

export interface TimelineEventFragment_Realized {}

export interface TimelineEventFragment_Realized_CommentEvent_Arguments {
  /**
   * Globally unique identifier.
   */
  id: ID,
  /**
   * The date and time when the event was created.
   */
  createdAt: Date,
  /**
   * Human readable text that describes the event.
   */
  message: string,
  /**
   * Whether the event was created by an app.
   */
  attributeToApp: boolean,
  /**
   * Whether the event was caused by an admin user.
   */
  attributeToUser: boolean,
  /**
   * Whether the event is critical.
   */
  criticalAlert: boolean,
  /**
   * Whether the comment event has been edited. If true, then the comment event has been edited.
   */
  edited: boolean,
  /**
   * Whether the comment event can be edited. If true, then the comment event can be edited.
   */
  canEdit: boolean,
  /**
   * Whether the comment event can be deleted. If true, then the comment event can be deleted.
   */
  canDelete: boolean,
  /**
   * The attachments associated with the comment event.
   */
  attachments: Array<TimelineEventFragment_Realized_CommentEvent_Attachments>
}
export class TimelineEventFragment_Realized_CommentEvent implements TimelineEventFragment_Realized {
  readonly id: ID
  readonly createdAt: Date
  readonly message: string
  readonly attributeToApp: boolean
  readonly attributeToUser: boolean
  readonly criticalAlert: boolean
  readonly edited: boolean
  readonly canEdit: boolean
  readonly canDelete: boolean
  readonly attachments: Array<TimelineEventFragment_Realized_CommentEvent_Attachments>
  constructor(responseArguments: TimelineEventFragment_Realized_CommentEvent_Arguments) {
    this.id = responseArguments.id
    this.createdAt = responseArguments.createdAt
    this.message = responseArguments.message
    this.attributeToApp = responseArguments.attributeToApp
    this.attributeToUser = responseArguments.attributeToUser
    this.criticalAlert = responseArguments.criticalAlert
    this.edited = responseArguments.edited
    this.canEdit = responseArguments.canEdit
    this.canDelete = responseArguments.canDelete
    this.attachments = responseArguments.attachments
  }
  static fromJson(jsonObject: any): TimelineEventFragment_Realized_CommentEvent {
    return new this({
      id: jsonObject["id"],
      createdAt: Date.fromJson(jsonObject["createdAt"]),
      message: jsonObject["message"],
      attributeToApp: jsonObject["attributeToApp"],
      attributeToUser: jsonObject["attributeToUser"],
      criticalAlert: jsonObject["criticalAlert"],
      edited: jsonObject["edited"],
      canEdit: jsonObject["canEdit"],
      canDelete: jsonObject["canDelete"],
      attachments: jsonObject["attachments"] == undefined || jsonObject["attachments"] == null ? Array<TimelineEventFragment_Realized_CommentEvent_Attachments>() : Array.from(jsonObject["attachments"], x => TimelineEventFragment_Realized_CommentEvent_Attachments.fromJson(x))
    })
  }
}
export interface TimelineEventFragment_Realized_CommentEvent_Attachments_Arguments {
  /**
   * Globally unique identifier.
   */
  id: ID,
  /**
   * The filename of the comment event attachment.
   */
  name: string,
  /**
   * The size of the attachment.
   */
  size: number,
  /**
   * The file extension of the comment event attachment, indicating the file format.
   */
  fileExtension: string | undefined,
  /**
   * The URL of the attachment.
   */
  url: string,
  /**
   * The image attached to the comment event.
   */
  image: TimelineEventFragment_Realized_CommentEvent_Attachments_Image | undefined
}
export class TimelineEventFragment_Realized_CommentEvent_Attachments implements Response {
  readonly id: ID
  readonly name: string
  readonly size: number
  readonly fileExtension: string | undefined
  readonly url: string
  readonly image: TimelineEventFragment_Realized_CommentEvent_Attachments_Image | undefined
  constructor(responseArguments: TimelineEventFragment_Realized_CommentEvent_Attachments_Arguments) {
    this.id = responseArguments.id
    this.name = responseArguments.name
    this.size = responseArguments.size
    this.fileExtension = responseArguments.fileExtension
    this.url = responseArguments.url
    this.image = responseArguments.image
  }
  static fromJson(jsonObject: any): TimelineEventFragment_Realized_CommentEvent_Attachments {
    return new this({
      id: jsonObject["id"],
      name: jsonObject["name"],
      size: jsonObject["size"],
      fileExtension: jsonObject["fileExtension"] != undefined && jsonObject["fileExtension"] != null ? jsonObject["fileExtension"] : undefined,
      url: jsonObject["url"],
      image: jsonObject["image"] != undefined && jsonObject["image"] != null ? TimelineEventFragment_Realized_CommentEvent_Attachments_Image.fromJson(jsonObject["image"]) : undefined
    })
  }
}
export interface TimelineEventFragment_Realized_CommentEvent_Attachments_Image_Arguments {
  /**
   * The location of the transformed image as a URL.
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type does not support will be ignored.
   */
  transformedSrc: string
}
export class TimelineEventFragment_Realized_CommentEvent_Attachments_Image implements Response {
  readonly transformedSrc: string
  constructor(responseArguments: TimelineEventFragment_Realized_CommentEvent_Attachments_Image_Arguments) {
    this.transformedSrc = responseArguments.transformedSrc
  }
  static fromJson(jsonObject: any): TimelineEventFragment_Realized_CommentEvent_Attachments_Image {
    return new this({
      transformedSrc: jsonObject["transformedSrc"]
    })
  }
}
export class TimelineEventFragment_Realized_Other implements TimelineEventFragment_Realized {}


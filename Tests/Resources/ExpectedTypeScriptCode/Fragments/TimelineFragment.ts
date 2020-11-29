
import { ID, Response, GraphSelection } from "../GraphApi"
import * as Enums from "../Enums"
import * as Fragments from "../Fragments"

export interface TimelineFragment_Arguments {

  /**
   * Information to aid in pagination.
   */
  pageInfo: TimelineFragment_PageInfo,

  /**
   * A list of edges.
   */
  edges: Array<TimelineFragment_Edges>
}

export class TimelineFragment implements Response {
  readonly pageInfo: TimelineFragment_PageInfo
  readonly edges: Array<TimelineFragment_Edges>

  constructor(responseArguments: TimelineFragment_Arguments) {
    this.pageInfo = responseArguments.pageInfo
    this.edges = responseArguments.edges
  }

  static fromJson(jsonObject: any): TimelineFragment {
    return new this({
      pageInfo: TimelineFragment_PageInfo.fromJson(jsonObject["pageInfo"]),
      edges: jsonObject["edges"] == undefined || jsonObject["edges"] == null ? Array<TimelineFragment_Edges>() : Array.from(jsonObject["edges"], x => TimelineFragment_Edges.fromJson(x))
    })
  }

  static getSelections(operationVariables: Record<string, any>): Array<GraphSelection> {
      return new Array<GraphSelection>(
new GraphSelection({
name: "pageInfo",
type: "PageInfo",
cacheKey: `pageInfo`,
passedGID: null,
typeCondition: "EventConnection",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "hasNextPage",
type: "Boolean",
cacheKey: `hasNextPage`,
passedGID: null,
typeCondition: "PageInfo",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}))}), 
new GraphSelection({
name: "edges",
type: "EventEdge",
cacheKey: `edges`,
passedGID: null,
typeCondition: "EventConnection",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "cursor",
type: "String",
cacheKey: `cursor`,
passedGID: null,
typeCondition: "EventEdge",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "node",
type: "Event",
cacheKey: `node`,
passedGID: null,
typeCondition: "EventEdge",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
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
cacheKey: `transformedSrc`,
passedGID: null,
typeCondition: "Image",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}))}))}))}))}))
  }
}

export interface TimelineFragment_PageInfo_Arguments {
  /**
   * Indicates if there are more pages to fetch.
   */
  hasNextPage: boolean
}
export class TimelineFragment_PageInfo implements Response {
  readonly hasNextPage: boolean
  constructor(responseArguments: TimelineFragment_PageInfo_Arguments) {
    this.hasNextPage = responseArguments.hasNextPage
  }
  static fromJson(jsonObject: any): TimelineFragment_PageInfo {
    return new this({
      hasNextPage: jsonObject["hasNextPage"]
    })
  }
}
export interface TimelineFragment_Edges_Arguments {
  /**
   * A cursor for use in pagination.
   */
  cursor: string,
  /**
   * The item at the end of EventEdge.
   */
  node: TimelineFragment_Edges_Node
}
export class TimelineFragment_Edges implements Response {
  readonly cursor: string
  readonly node: TimelineFragment_Edges_Node
  constructor(responseArguments: TimelineFragment_Edges_Arguments) {
    this.cursor = responseArguments.cursor
    this.node = responseArguments.node
  }
  static fromJson(jsonObject: any): TimelineFragment_Edges {
    return new this({
      cursor: jsonObject["cursor"],
      node: TimelineFragment_Edges_Node.fromJson(jsonObject["node"])
    })
  }
}
export interface TimelineFragment_Edges_Node_Arguments {
  realized: TimelineFragment_Edges_Node_Realized,
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
export class TimelineFragment_Edges_Node implements Response {
  readonly realized: TimelineFragment_Edges_Node_Realized
  readonly id: ID
  readonly createdAt: Date
  readonly message: string
  readonly attributeToApp: boolean
  readonly attributeToUser: boolean
  readonly criticalAlert: boolean
  constructor(responseArguments: TimelineFragment_Edges_Node_Arguments) {
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
      realized: function(typename: string): TimelineFragment_Edges_Node_Realized {
        switch(typename) {
          case "CommentEvent": 
            TimelineFragment_Edges_Node_Realized_CommentEvent.fromJson(jsonObject)
          default:
            return new TimelineFragment_Edges_Node_Realized_Other()
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
    return new Array<GraphSelection>()
  }
}
export interface TimelineFragment_Edges_Node_Realized {}
export interface TimelineFragment_Edges_Node_Realized_CommentEvent_Arguments {
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
  attachments: Array<TimelineFragment_Edges_Node_Realized_CommentEvent_Attachments>
}
export class TimelineFragment_Edges_Node_Realized_CommentEvent implements TimelineFragment_Edges_Node_Realized {
  readonly id: ID
  readonly createdAt: Date
  readonly message: string
  readonly attributeToApp: boolean
  readonly attributeToUser: boolean
  readonly criticalAlert: boolean
  readonly edited: boolean
  readonly canEdit: boolean
  readonly canDelete: boolean
  readonly attachments: Array<TimelineFragment_Edges_Node_Realized_CommentEvent_Attachments>
  constructor(responseArguments: TimelineFragment_Edges_Node_Realized_CommentEvent_Arguments) {
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
  static fromJson(jsonObject: any): TimelineFragment_Edges_Node_Realized_CommentEvent {
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
      attachments: jsonObject["attachments"] == undefined || jsonObject["attachments"] == null ? Array<TimelineFragment_Edges_Node_Realized_CommentEvent_Attachments>() : Array.from(jsonObject["attachments"], x => TimelineFragment_Edges_Node_Realized_CommentEvent_Attachments.fromJson(x))
    })
  }
}
export interface TimelineFragment_Edges_Node_Realized_CommentEvent_Attachments_Arguments {
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
  image: TimelineFragment_Edges_Node_Realized_CommentEvent_Attachments_Image | undefined
}
export class TimelineFragment_Edges_Node_Realized_CommentEvent_Attachments implements Response {
  readonly id: ID
  readonly name: string
  readonly size: number
  readonly fileExtension: string | undefined
  readonly url: string
  readonly image: TimelineFragment_Edges_Node_Realized_CommentEvent_Attachments_Image | undefined
  constructor(responseArguments: TimelineFragment_Edges_Node_Realized_CommentEvent_Attachments_Arguments) {
    this.id = responseArguments.id
    this.name = responseArguments.name
    this.size = responseArguments.size
    this.fileExtension = responseArguments.fileExtension
    this.url = responseArguments.url
    this.image = responseArguments.image
  }
  static fromJson(jsonObject: any): TimelineFragment_Edges_Node_Realized_CommentEvent_Attachments {
    return new this({
      id: jsonObject["id"],
      name: jsonObject["name"],
      size: jsonObject["size"],
      fileExtension: jsonObject["fileExtension"] != undefined && jsonObject["fileExtension"] != null ? jsonObject["fileExtension"] : undefined,
      url: jsonObject["url"],
      image: jsonObject["image"] != undefined && jsonObject["image"] != null ? TimelineFragment_Edges_Node_Realized_CommentEvent_Attachments_Image.fromJson(jsonObject["image"]) : undefined
    })
  }
}
export interface TimelineFragment_Edges_Node_Realized_CommentEvent_Attachments_Image_Arguments {
  /**
   * The location of the transformed image as a URL.
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type does not support will be ignored.
   */
  transformedSrc: string
}
export class TimelineFragment_Edges_Node_Realized_CommentEvent_Attachments_Image implements Response {
  readonly transformedSrc: string
  constructor(responseArguments: TimelineFragment_Edges_Node_Realized_CommentEvent_Attachments_Image_Arguments) {
    this.transformedSrc = responseArguments.transformedSrc
  }
  static fromJson(jsonObject: any): TimelineFragment_Edges_Node_Realized_CommentEvent_Attachments_Image {
    return new this({
      transformedSrc: jsonObject["transformedSrc"]
    })
  }
}
export class TimelineFragment_Edges_Node_Realized_Other implements TimelineFragment_Edges_Node_Realized {}


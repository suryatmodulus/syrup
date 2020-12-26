import { ID, Response, GraphSelection } from "../GraphApi"
import * as Enums from "../Enums"

export interface TimelineEventFragment {
  realized: TimelineEventFragmentRealizedCommentEvent | {},

  /**
   * Globally unique identifier.
   */
  id: ID,

  /**
   * The date and time when the event was created.
   */
  createdAt: string,

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

export interface TimelineEventFragmentRealizedCommentEvent {
  /**
   * Globally unique identifier.
   */
  id: ID,
  /**
   * The date and time when the event was created.
   */
  createdAt: string,
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
  attachments: TimelineEventFragmentRealizedCommentEventAttachments[]
}
export interface TimelineEventFragmentRealizedCommentEventAttachments {
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
  image: TimelineEventFragmentRealizedCommentEventAttachmentsImage | undefined
}
export interface TimelineEventFragmentRealizedCommentEventAttachmentsImage {
  /**
   * The location of the transformed image as a URL.
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type does not support will be ignored.
   */
  transformedSrc: string
}

export const timelineEventFragmentSelections = [
{
name: "id",
type: { name: "ID", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Event", definedType: "Interface" },
directive: null,
selections: []}, 
{
name: "createdAt",
type: { name: "DateTime", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Event", definedType: "Interface" },
directive: null,
selections: []}, 
{
name: "message",
type: { name: "FormattedString", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Event", definedType: "Interface" },
directive: null,
selections: []}, 
{
name: "attributeToApp",
type: { name: "Boolean", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Event", definedType: "Interface" },
directive: null,
selections: []}, 
{
name: "attributeToUser",
type: { name: "Boolean", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Event", definedType: "Interface" },
directive: null,
selections: []}, 
{
name: "criticalAlert",
type: { name: "Boolean", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "Event", definedType: "Interface" },
directive: null,
selections: []}, 
{
name: "edited",
type: { name: "Boolean", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "CommentEvent", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "canEdit",
type: { name: "Boolean", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "CommentEvent", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "canDelete",
type: { name: "Boolean", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "CommentEvent", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "attachments",
type: { name: "CommentEventAttachment", definedType: "Object" },
arguments: {},
passedGID: null,
typeCondition: { name: "CommentEvent", definedType: "Object" },
directive: null,
selections: [
{
name: "id",
type: { name: "ID", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "CommentEventAttachment", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "name",
type: { name: "String", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "CommentEventAttachment", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "size",
type: { name: "Int", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "CommentEventAttachment", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "fileExtension",
type: { name: "String", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "CommentEventAttachment", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "url",
type: { name: "URL", definedType: "Scalar" },
arguments: {},
passedGID: null,
typeCondition: { name: "CommentEventAttachment", definedType: "Object" },
directive: null,
selections: []}, 
{
name: "image",
type: { name: "Image", definedType: "Object" },
arguments: {},
passedGID: null,
typeCondition: { name: "CommentEventAttachment", definedType: "Object" },
directive: null,
selections: [
{
name: "transformedSrc",
type: { name: "URL", definedType: "Scalar" },
arguments: { maxWidth: { isOperationVariable: true, key: "maxImageWidth" }, maxHeight: { isOperationVariable: true, key: "maxImageHeight" } },
passedGID: null,
typeCondition: { name: "Image", definedType: "Object" },
directive: null,
selections: []}]}]}]

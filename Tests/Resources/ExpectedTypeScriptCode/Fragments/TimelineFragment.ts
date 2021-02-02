

import { ID, GraphSelection, copyWithTypeCondition } from "../GraphApi"

export interface TimelineFragment {
  __typename: 'EventConnection';

  /**
   * Information to aid in pagination.
   */
  pageInfo: TimelineFragmentPageInfo;

  /**
   * A list of edges.
   */
  edges: TimelineFragmentEdges[];
}

export interface TimelineFragmentPageInfo {
  __typename: 'PageInfo';
  /**
   * Indicates if there are more pages to fetch.
   */
  hasNextPage: boolean;
}
export interface TimelineFragmentEdges {
  __typename: 'EventEdge';
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
  /**
   * The item at the end of EventEdge.
   */
  node: TimelineFragmentEdgesNode;
}
export interface TimelineFragmentEdgesNode {
  __typename: 'CommentEvent' | '';
  realized: TimelineFragmentEdgesNodeRealizedCommentEvent | {};
  /**
   * Globally unique identifier.
   */
  id: ID;
  /**
   * The date and time when the event was created.
   */
  createdAt: string;
  /**
   * Human readable text that describes the event.
   */
  message: string;
  /**
   * Whether the event was created by an app.
   */
  attributeToApp: boolean;
  /**
   * Whether the event was caused by an admin user.
   */
  attributeToUser: boolean;
  /**
   * Whether the event is critical.
   */
  criticalAlert: boolean;
}
export interface TimelineFragmentEdgesNodeRealizedCommentEvent {
  __typename: 'CommentEvent';
  /**
   * Globally unique identifier.
   */
  id: ID;
  /**
   * The date and time when the event was created.
   */
  createdAt: string;
  /**
   * Human readable text that describes the event.
   */
  message: string;
  /**
   * Whether the event was created by an app.
   */
  attributeToApp: boolean;
  /**
   * Whether the event was caused by an admin user.
   */
  attributeToUser: boolean;
  /**
   * Whether the event is critical.
   */
  criticalAlert: boolean;
  /**
   * Whether the comment event has been edited. If true, then the comment event has been edited.
   */
  edited: boolean;
  /**
   * Whether the comment event can be edited. If true, then the comment event can be edited.
   */
  canEdit: boolean;
  /**
   * Whether the comment event can be deleted. If true, then the comment event can be deleted.
   */
  canDelete: boolean;
  /**
   * The attachments associated with the comment event.
   */
  attachments: TimelineFragmentEdgesNodeRealizedCommentEventAttachments[];
}
export interface TimelineFragmentEdgesNodeRealizedCommentEventAttachments {
  __typename: 'CommentEventAttachment';
  /**
   * Globally unique identifier.
   */
  id: ID;
  /**
   * The filename of the comment event attachment.
   */
  name: string;
  /**
   * The size of the attachment.
   */
  size: number;
  /**
   * The file extension of the comment event attachment, indicating the file format.
   */
  fileExtension: string | undefined;
  /**
   * The URL of the attachment.
   */
  url: string;
  /**
   * The image attached to the comment event.
   */
  image: TimelineFragmentEdgesNodeRealizedCommentEventAttachmentsImage | undefined;
}
export interface TimelineFragmentEdgesNodeRealizedCommentEventAttachmentsImage {
  __typename: 'Image';
  /**
   * The location of the transformed image as a URL.
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type does not support will be ignored.
   */
  transformedSrc: string;
}

export const timelineFragmentSelections: GraphSelection[] = ([
  {
    name: "pageInfo",
    type: { name: "PageInfo", definedType: "Object" },
    arguments: {},
    passedGID: null,
    typeCondition: { name: "EventConnection", definedType: "Object" },
    directive: null,
    selections: ([
      {
        name: "hasNextPage",
        type: { name: "Boolean", definedType: "Scalar" },
        arguments: {},
        passedGID: null,
        typeCondition: { name: "PageInfo", definedType: "Object" },
        directive: null,
        selections: ([] as GraphSelection[])
      }
    ] as GraphSelection[])
  }, 
  {
    name: "edges",
    type: { name: "EventEdge", definedType: "Object" },
    arguments: {},
    passedGID: null,
    typeCondition: { name: "EventConnection", definedType: "Object" },
    directive: null,
    selections: ([
      {
        name: "cursor",
        type: { name: "String", definedType: "Scalar" },
        arguments: {},
        passedGID: null,
        typeCondition: { name: "EventEdge", definedType: "Object" },
        directive: null,
        selections: ([] as GraphSelection[])
      }, 
      {
        name: "node",
        type: { name: "Event", definedType: "Interface" },
        arguments: {},
        passedGID: null,
        typeCondition: { name: "EventEdge", definedType: "Object" },
        directive: null,
        selections: ([
          {
            name: "id",
            type: { name: "ID", definedType: "Scalar" },
            arguments: {},
            passedGID: null,
            typeCondition: { name: "Event", definedType: "Interface" },
            directive: null,
            selections: ([] as GraphSelection[])
          }, 
          {
            name: "createdAt",
            type: { name: "DateTime", definedType: "Scalar" },
            arguments: {},
            passedGID: null,
            typeCondition: { name: "Event", definedType: "Interface" },
            directive: null,
            selections: ([] as GraphSelection[])
          }, 
          {
            name: "message",
            type: { name: "FormattedString", definedType: "Scalar" },
            arguments: {},
            passedGID: null,
            typeCondition: { name: "Event", definedType: "Interface" },
            directive: null,
            selections: ([] as GraphSelection[])
          }, 
          {
            name: "attributeToApp",
            type: { name: "Boolean", definedType: "Scalar" },
            arguments: {},
            passedGID: null,
            typeCondition: { name: "Event", definedType: "Interface" },
            directive: null,
            selections: ([] as GraphSelection[])
          }, 
          {
            name: "attributeToUser",
            type: { name: "Boolean", definedType: "Scalar" },
            arguments: {},
            passedGID: null,
            typeCondition: { name: "Event", definedType: "Interface" },
            directive: null,
            selections: ([] as GraphSelection[])
          }, 
          {
            name: "criticalAlert",
            type: { name: "Boolean", definedType: "Scalar" },
            arguments: {},
            passedGID: null,
            typeCondition: { name: "Event", definedType: "Interface" },
            directive: null,
            selections: ([] as GraphSelection[])
          }, 
          {
            name: "edited",
            type: { name: "Boolean", definedType: "Scalar" },
            arguments: {},
            passedGID: null,
            typeCondition: { name: "CommentEvent", definedType: "Object" },
            directive: null,
            selections: ([] as GraphSelection[])
          }, 
          {
            name: "canEdit",
            type: { name: "Boolean", definedType: "Scalar" },
            arguments: {},
            passedGID: null,
            typeCondition: { name: "CommentEvent", definedType: "Object" },
            directive: null,
            selections: ([] as GraphSelection[])
          }, 
          {
            name: "canDelete",
            type: { name: "Boolean", definedType: "Scalar" },
            arguments: {},
            passedGID: null,
            typeCondition: { name: "CommentEvent", definedType: "Object" },
            directive: null,
            selections: ([] as GraphSelection[])
          }, 
          {
            name: "attachments",
            type: { name: "CommentEventAttachment", definedType: "Object" },
            arguments: {},
            passedGID: null,
            typeCondition: { name: "CommentEvent", definedType: "Object" },
            directive: null,
            selections: ([
              {
                name: "id",
                type: { name: "ID", definedType: "Scalar" },
                arguments: {},
                passedGID: null,
                typeCondition: { name: "CommentEventAttachment", definedType: "Object" },
                directive: null,
                selections: ([] as GraphSelection[])
              }, 
              {
                name: "name",
                type: { name: "String", definedType: "Scalar" },
                arguments: {},
                passedGID: null,
                typeCondition: { name: "CommentEventAttachment", definedType: "Object" },
                directive: null,
                selections: ([] as GraphSelection[])
              }, 
              {
                name: "size",
                type: { name: "Int", definedType: "Scalar" },
                arguments: {},
                passedGID: null,
                typeCondition: { name: "CommentEventAttachment", definedType: "Object" },
                directive: null,
                selections: ([] as GraphSelection[])
              }, 
              {
                name: "fileExtension",
                type: { name: "String", definedType: "Scalar" },
                arguments: {},
                passedGID: null,
                typeCondition: { name: "CommentEventAttachment", definedType: "Object" },
                directive: null,
                selections: ([] as GraphSelection[])
              }, 
              {
                name: "url",
                type: { name: "URL", definedType: "Scalar" },
                arguments: {},
                passedGID: null,
                typeCondition: { name: "CommentEventAttachment", definedType: "Object" },
                directive: null,
                selections: ([] as GraphSelection[])
              }, 
              {
                name: "image",
                type: { name: "Image", definedType: "Object" },
                arguments: {},
                passedGID: null,
                typeCondition: { name: "CommentEventAttachment", definedType: "Object" },
                directive: null,
                selections: ([
                  {
                    name: "transformedSrc",
                    type: { name: "URL", definedType: "Scalar" },
                    arguments: {},
                    passedGID: null,
                    typeCondition: { name: "Image", definedType: "Object" },
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

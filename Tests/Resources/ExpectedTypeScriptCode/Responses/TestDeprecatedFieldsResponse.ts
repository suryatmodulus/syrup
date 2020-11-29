
import { ID, Response, GraphSelection } from "../GraphApi"
import * as Enums from "../Enums"
import * as Fragments from "../Fragments"

export interface TestDeprecatedFieldsResponse_Arguments {

  /**
   * List of the active sales channels.
   *
   * @deprecated Use `publications` instead
   */
  channels: TestDeprecatedFieldsResponse_Channels
}

export class TestDeprecatedFieldsResponse implements Response {
  readonly channels: TestDeprecatedFieldsResponse_Channels

  constructor(responseArguments: TestDeprecatedFieldsResponse_Arguments) {
    this.channels = responseArguments.channels
  }

  static fromJson(jsonObject: any): TestDeprecatedFieldsResponse {
    return new this({
      channels: TestDeprecatedFieldsResponse_Channels.fromJson(jsonObject["channels"])
    })
  }

}

export interface TestDeprecatedFieldsResponse_Channels_Arguments {
  /**
   * A list of edges.
   */
  edges: Array<TestDeprecatedFieldsResponse_Channels_Edges>
}
export class TestDeprecatedFieldsResponse_Channels implements Response {
  readonly edges: Array<TestDeprecatedFieldsResponse_Channels_Edges>
  constructor(responseArguments: TestDeprecatedFieldsResponse_Channels_Arguments) {
    this.edges = responseArguments.edges
  }
  static fromJson(jsonObject: any): TestDeprecatedFieldsResponse_Channels {
    return new this({
      edges: jsonObject["edges"] == undefined || jsonObject["edges"] == null ? Array<TestDeprecatedFieldsResponse_Channels_Edges>() : Array.from(jsonObject["edges"], x => TestDeprecatedFieldsResponse_Channels_Edges.fromJson(x))
    })
  }
}
export interface TestDeprecatedFieldsResponse_Channels_Edges_Arguments {
  /**
   * The item at the end of ChannelEdge.
   */
  node: TestDeprecatedFieldsResponse_Channels_Edges_Node
}
export class TestDeprecatedFieldsResponse_Channels_Edges implements Response {
  readonly node: TestDeprecatedFieldsResponse_Channels_Edges_Node
  constructor(responseArguments: TestDeprecatedFieldsResponse_Channels_Edges_Arguments) {
    this.node = responseArguments.node
  }
  static fromJson(jsonObject: any): TestDeprecatedFieldsResponse_Channels_Edges {
    return new this({
      node: TestDeprecatedFieldsResponse_Channels_Edges_Node.fromJson(jsonObject["node"])
    })
  }
}
export interface TestDeprecatedFieldsResponse_Channels_Edges_Node_Arguments {
  /**
   * Underlying app used by the channel.
   */
  app: TestDeprecatedFieldsResponse_Channels_Edges_Node_App
}
export class TestDeprecatedFieldsResponse_Channels_Edges_Node implements Response {
  readonly app: TestDeprecatedFieldsResponse_Channels_Edges_Node_App
  constructor(responseArguments: TestDeprecatedFieldsResponse_Channels_Edges_Node_Arguments) {
    this.app = responseArguments.app
  }
  static fromJson(jsonObject: any): TestDeprecatedFieldsResponse_Channels_Edges_Node {
    return new this({
      app: TestDeprecatedFieldsResponse_Channels_Edges_Node_App.fromJson(jsonObject["app"])
    })
  }
}
export interface TestDeprecatedFieldsResponse_Channels_Edges_Node_App_Arguments {
  /**
   * Globally unique identifier.
   */
  id: ID,
  /**
   * Icon that represents the app.
   */
  icon: TestDeprecatedFieldsResponse_Channels_Edges_Node_App_Icon
}
export class TestDeprecatedFieldsResponse_Channels_Edges_Node_App implements Response {
  readonly id: ID
  readonly icon: TestDeprecatedFieldsResponse_Channels_Edges_Node_App_Icon
  constructor(responseArguments: TestDeprecatedFieldsResponse_Channels_Edges_Node_App_Arguments) {
    this.id = responseArguments.id
    this.icon = responseArguments.icon
  }
  static fromJson(jsonObject: any): TestDeprecatedFieldsResponse_Channels_Edges_Node_App {
    return new this({
      id: jsonObject["id"],
      icon: TestDeprecatedFieldsResponse_Channels_Edges_Node_App_Icon.fromJson(jsonObject["icon"])
    })
  }
}
export interface TestDeprecatedFieldsResponse_Channels_Edges_Node_App_Icon_Arguments {
  /**
   * The location of the image as a URL.
   *
   * @deprecated Previously an image had a single `src` field. This could either return the original image
   * location or a URL that contained transformations such as sizing or scale.
   * These transformations were specified by arguments on the parent field.
   * Now an image has two distinct URL fields: `originalSrc` and `transformedSrc`.
   * * `originalSrc` - the original unmodified image URL
   * * `transformedSrc` - the image URL with the specified transformations included
   * To migrate to the new fields, image transformations should be moved from the parent field to `transformedSrc`.
   * Before:
   * ```graphql
   * {
   *   shop {
   *     productImages(maxWidth: 200, scale: 2) {
   *       edges {
   *         node {
   *           src
   *         }
   *       }
   *     }
   *   }
   * }
   * ```
   * After:
   * ```graphql
   * {
   *   shop {
   *     productImages {
   *       edges {
   *         node {
   *           transformedSrc(maxWidth: 200, scale: 2)
   *         }
   *       }
   *     }
   *   }
   * }
   * ```
   */
  src: string
}
export class TestDeprecatedFieldsResponse_Channels_Edges_Node_App_Icon implements Response {
  readonly src: string
  constructor(responseArguments: TestDeprecatedFieldsResponse_Channels_Edges_Node_App_Icon_Arguments) {
    this.src = responseArguments.src
  }
  static fromJson(jsonObject: any): TestDeprecatedFieldsResponse_Channels_Edges_Node_App_Icon {
    return new this({
      src: jsonObject["src"]
    })
  }
}


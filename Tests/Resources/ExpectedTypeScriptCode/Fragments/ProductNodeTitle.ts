
import { ID, Response, GraphSelection } from "../GraphApi"
import * as Enums from "../Enums"
import * as Fragments from "../Fragments"

export interface ProductNodeTitle_Arguments {

  /**
   * The title of the product.
   */
  title: string
}

export class ProductNodeTitle implements Response {
  readonly title: string

  constructor(responseArguments: ProductNodeTitle_Arguments) {
    this.title = responseArguments.title
  }

  static fromJson(jsonObject: any): ProductNodeTitle {
    return new this({
      title: jsonObject["title"]
    })
  }

  static getSelections(operationVariables: Record<string, any>): Array<GraphSelection> {
      return new Array<GraphSelection>(
new GraphSelection({
name: "title",
type: "String",
cacheKey: `title`,
passedGID: null,
typeCondition: "Product",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}))
  }
}


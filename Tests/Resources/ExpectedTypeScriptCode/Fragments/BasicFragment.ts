
import { ID, Response, GraphSelection } from "../GraphApi"
import * as Enums from "../Enums"
import * as Fragments from "../Fragments"

export interface BasicFragment_Arguments {

  /**
   * Globally unique identifier.
   */
  id: ID,

  /**
   * The customer's last name.
   */
  lastName: string | undefined
}

export class BasicFragment implements Response {
  readonly id: ID
  readonly lastName: string | undefined

  constructor(responseArguments: BasicFragment_Arguments) {
    this.id = responseArguments.id
    this.lastName = responseArguments.lastName
  }

  static fromJson(jsonObject: any): BasicFragment {
    return new this({
      id: jsonObject["id"],
      lastName: jsonObject["lastName"] != undefined && jsonObject["lastName"] != null ? jsonObject["lastName"] : undefined
    })
  }

  static getSelections(operationVariables: Record<string, any>): Array<GraphSelection> {
      return new Array<GraphSelection>(
new GraphSelection({
name: "id",
type: "ID",
cacheKey: `id`,
passedGID: null,
typeCondition: "Customer",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}), 
new GraphSelection({
name: "lastName",
type: "String",
cacheKey: `lastName`,
passedGID: null,
typeCondition: "Customer",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}))
  }
}


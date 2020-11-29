
import { ID, GraphSelection, Query } from "../GraphApi"
import { ShopQueryResponse } from "../Responses/ShopQueryResponse"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"
import * as Fragments from "../Fragments"

export interface ShopQueryQueryArguments {
  first: number
}

export class ShopQueryQuery extends Query<ShopQueryResponse> {
    constructor(operationVariables: ShopQueryQueryArguments) {
      super(
        "fragment Shop on QueryRoot { __typename shop { __typename availableChannelApps(first: \$first) { __typename edges { __typename node { __typename id } } } } } query ShopQuery(\$first: Int!) { __typename ... Shop }",
        {
          "first": `${operationVariables.first}`
        },
        new Array<GraphSelection>().concat(Fragments.Shop.getSelections(operationVariables))
      )
    }

    decodeResponse(jsonObject: Object): ShopQueryResponse {
      return ShopQueryResponse.fromJson(jsonObject)
    }
}
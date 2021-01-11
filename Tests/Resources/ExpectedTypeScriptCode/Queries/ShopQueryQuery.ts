import { SimpleDocument } from "graphql-typed"
import { ID, GraphSelection, SyrupOperation, copyWithTypeCondtion } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"
import * as Fragments from "../Fragments"

export namespace ShopQueryQueryData {
  export interface Variables {
    first: number
  }

}

export interface ShopQueryQueryData {
  shop: Fragments.Shop
}

const document: SimpleDocument<SyrupOperation, ShopQueryQueryData.Variables> = {
  id: "04e13fa3830949681d0c1fcf44b493003d3e99b6d01b0ba77248a5efaea56706",
  name: "ShopQuery",
  source: "fragment Shop on QueryRoot { __typename shop { __typename availableChannelApps(first: \$first) { __typename edges { __typename node { __typename id } } } } } query ShopQuery(\$first: Int!) { __typename ... Shop }",
  __typeData: {
    operationType: 'query',
    selections: [].concat(Fragments.shopSelections)
  }
}
export default document

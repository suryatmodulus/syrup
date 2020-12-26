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
  id: "ShopQuery",
  name: "ShopQuery",
  source: "fragment Shop on QueryRoot { __typename shop { __typename availableChannelApps(first: \$first) { __typename edges { __typename node { __typename id } } } } } query ShopQuery(\$first: Int!) { __typename ... Shop }",
  __typeData: {
    operationType: 'query',
    selections: [].concat(Fragments.shopSelections)
  }
}
export default document

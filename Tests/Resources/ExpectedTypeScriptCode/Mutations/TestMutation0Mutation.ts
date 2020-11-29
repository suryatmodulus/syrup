
import { ID, GraphSelection, Mutation } from "../GraphApi"
import { TestMutation0Response } from "../Responses/TestMutation0Response"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"
import * as Fragments from "../Fragments"

export interface TestMutation0MutationArguments {
  input: Inputs.CustomerInput
}

export class TestMutation0Mutation extends Mutation<TestMutation0Response> {
    constructor(operationVariables: TestMutation0MutationArguments) {
      super(
        "mutation TestMutation0(\$input: CustomerInput!) { __typename customerUpdate(input: \$input) { __typename customer { __typename id } } }",
        {
          "input": `${operationVariables.input}`
        },
        new Array<GraphSelection>(
new GraphSelection({
name: "customerUpdate",
type: "CustomerUpdatePayload",
cacheKey: `customerUpdate(input: ${operationVariables["input"]})`,
passedGID: null,
typeCondition: "Mutation",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "customer",
type: "Customer",
cacheKey: `customer`,
passedGID: null,
typeCondition: "CustomerUpdatePayload",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>(
new GraphSelection({
name: "id",
type: "ID",
cacheKey: `id`,
passedGID: null,
typeCondition: "Customer",
shouldSkipBasedOnConditionalDirective: false,
selections: new Array<GraphSelection>()}))}))}))
      )
    }

    decodeResponse(jsonObject: Object): TestMutation0Response {
      return TestMutation0Response.fromJson(jsonObject)
    }
}
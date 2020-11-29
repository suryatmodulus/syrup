
export const DEFINED_NULL_FLAG = "__DEFINED_NULL"

export interface GraphSelectionArguments {
  cacheKey: string,
  name: string,
  type: string,
  passedGID: string | null,
  typeCondition: string | null,
  shouldSkipBasedOnConditionalDirective: boolean,
  selections: Array<GraphSelection>
}

export class GraphSelection {
  readonly cacheKey: string
  readonly name: string
  readonly type: string
  readonly passedGID: string | null
  readonly typeCondition: string | null
  readonly shouldSkipBasedOnConditionalDirective: boolean
  readonly selections: Array<GraphSelection>

  constructor(graphSelectionArguments: GraphSelectionArguments) {
    this.cacheKey = graphSelectionArguments.cacheKey
    this.name = graphSelectionArguments.name
    this.type = graphSelectionArguments.type
    this.passedGID = graphSelectionArguments.passedGID
    this.typeCondition = graphSelectionArguments.typeCondition
    this.shouldSkipBasedOnConditionalDirective = graphSelectionArguments.shouldSkipBasedOnConditionalDirective
    this.selections = graphSelectionArguments.selections
  }

  hasSelections(): boolean {
    return this.selections.length != 0
  }

  copyWithTypeCondition(typeCondition: string | null): GraphSelection {
    return new GraphSelection({
      cacheKey: this.cacheKey,
      name: this.name,
      type: this.type,
      passedGID: this.passedGID,
      typeCondition: typeCondition,
      shouldSkipBasedOnConditionalDirective: this.shouldSkipBasedOnConditionalDirective,
      selections: this.selections,
    })
  }
}

export interface Response {}

export abstract class SyrupOperation<T extends Response> {
  constructor(
    readonly rawQueryString: string,
    readonly operationVariables: Record<string, string>,
    readonly selections: Array<GraphSelection>
  ) {}

  getQueryString(): string {
    if (Object.keys(this.operationVariables).length != 0) {
      const variablesStringified = JSON.stringify(this.operationVariables)
      const variablesWithNulls = setDefinedNulls(variablesStringified)

      return `{ "query": "${this.rawQueryString}", "variables": ${variablesWithNulls} }`
    }

    return `{ "query": "${this.rawQueryString}" }`
  }

  abstract decodeResponse(jsonObject: Object): T
}

export abstract class Query<T extends Response> extends SyrupOperation<T> {}

export abstract class Mutation<T extends Response> extends SyrupOperation<T> {}

export abstract class Subscription<T extends Response> extends SyrupOperation<T> {}

export class ID {
  constructor(readonly id: string) {}
}

export function setDefinedNulls(value: string): string {
  return value.replace(`${DEFINED_NULL_FLAG}`, "null")
}

import { ID } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"

export interface MetafieldInput_Arguments {
  description?: string | undefined | null,
  id?: ID | undefined | null,
  key?: string | undefined | null,
  'namespace'?: string | undefined | null,
  value?: string | undefined | null,
  valueType?: Enums.MetafieldValueType | undefined | null
}

export class MetafieldInput {
  public description: string | undefined | null = undefined
  public id: ID | undefined | null = undefined
  public key: string | undefined | null = undefined
  public 'namespace': string | undefined | null = undefined
  public value: string | undefined | null = undefined
  public valueType: Enums.MetafieldValueType | undefined | null = undefined

  constructor(inputArguments: MetafieldInput_Arguments = {}) {
    this.description = inputArguments.description
    this.id = inputArguments.id
    this.key = inputArguments.key
    this.namespace = inputArguments.namespace
    this.value = inputArguments.value
    this.valueType = inputArguments.valueType
  }
}

import { ID } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"

export interface PrivateMetafieldInput_Arguments {
  owner?: ID | undefined | null,
  'namespace'?: string,
  key?: string,
  valueInput?: Inputs.PrivateMetafieldValueInput
}

export class PrivateMetafieldInput {
  public owner: ID | undefined | null = undefined
  public 'namespace': string
  public key: string
  public valueInput: Inputs.PrivateMetafieldValueInput

  constructor(inputArguments: PrivateMetafieldInput_Arguments = {}) {
    this.owner = inputArguments.owner
    this.namespace = inputArguments.namespace
    this.key = inputArguments.key
    this.valueInput = inputArguments.valueInput
  }
}

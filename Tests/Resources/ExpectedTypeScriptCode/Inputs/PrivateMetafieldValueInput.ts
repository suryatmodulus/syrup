import { ID } from "../GraphApi"
import * as Enums from "../Enums"
import * as Inputs from "../Inputs"

export interface PrivateMetafieldValueInput_Arguments {
  value?: string,
  valueType?: Enums.PrivateMetafieldValueType
}

export class PrivateMetafieldValueInput {
  public value: string
  public valueType: Enums.PrivateMetafieldValueType

  constructor(inputArguments: PrivateMetafieldValueInput_Arguments = {}) {
    this.value = inputArguments.value
    this.valueType = inputArguments.valueType
  }
}

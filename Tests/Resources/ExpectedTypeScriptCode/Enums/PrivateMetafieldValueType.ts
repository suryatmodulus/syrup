

export enum PrivateMetafieldValueType {

  /**
   * A string metafield.
   */
  STRING = "STRING",

  /**
   * An integer metafield.
   */
  INTEGER = "INTEGER",

  /**
   * A JSON string metafield.
   */
  JSON_STRING = "JSON_STRING",

  /**
   * Unknown Syrup enum.
   */
  UNKNOWN_SYRUP_ENUM = "UNKNOWN_SYRUP_ENUM"
}

export class PrivateMetafieldValueTypeUtil {
  static safeValueOf(value: string): PrivateMetafieldValueType {
    const values = Object.keys(PrivateMetafieldValueType).map(x => PrivateMetafieldValueType[x])

    if (values.some(x => x === value)) {
      return <PrivateMetafieldValueType> value
    } else {
      return PrivateMetafieldValueType.UNKNOWN_SYRUP_ENUM
    }
  }
}
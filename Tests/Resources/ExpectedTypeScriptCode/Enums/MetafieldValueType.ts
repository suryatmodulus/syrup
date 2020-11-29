

export enum MetafieldValueType {

  /**
   * A string.
   */
  STRING = "STRING",

  /**
   * An integer.
   */
  INTEGER = "INTEGER",

  /**
   * A JSON string.
   */
  JSON_STRING = "JSON_STRING",

  /**
   * Unknown Syrup enum.
   */
  UNKNOWN_SYRUP_ENUM = "UNKNOWN_SYRUP_ENUM"
}

export class MetafieldValueTypeUtil {
  static safeValueOf(value: string): MetafieldValueType {
    const values = Object.keys(MetafieldValueType).map(x => MetafieldValueType[x])

    if (values.some(x => x === value)) {
      return <MetafieldValueType> value
    } else {
      return MetafieldValueType.UNKNOWN_SYRUP_ENUM
    }
  }
}
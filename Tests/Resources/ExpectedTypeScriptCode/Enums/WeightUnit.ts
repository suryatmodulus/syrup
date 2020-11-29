

export enum WeightUnit {

  /**
   * 1 kilogram equals 1000 grams.
   */
  KILOGRAMS = "KILOGRAMS",

  /**
   * Metric system unit of mass.
   */
  GRAMS = "GRAMS",

  /**
   * 1 pound equals 16 ounces.
   */
  POUNDS = "POUNDS",

  /**
   * Imperial system unit of mass.
   */
  OUNCES = "OUNCES",

  /**
   * Unknown Syrup enum.
   */
  UNKNOWN_SYRUP_ENUM = "UNKNOWN_SYRUP_ENUM"
}

export class WeightUnitUtil {
  static safeValueOf(value: string): WeightUnit {
    const values = Object.keys(WeightUnit).map(x => WeightUnit[x])

    if (values.some(x => x === value)) {
      return <WeightUnit> value
    } else {
      return WeightUnit.UNKNOWN_SYRUP_ENUM
    }
  }
}
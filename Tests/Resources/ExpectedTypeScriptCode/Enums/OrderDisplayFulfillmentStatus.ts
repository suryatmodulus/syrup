

export enum OrderDisplayFulfillmentStatus {

  /**
   * Displayed as **Unfulfilled**.
   */
  UNFULFILLED = "UNFULFILLED",

  /**
   * Displayed as **Partially fulfilled**.
   */
  PARTIALLY_FULFILLED = "PARTIALLY_FULFILLED",

  /**
   * Displayed as **Fulfilled**.
   */
  FULFILLED = "FULFILLED",

  /**
   * Displayed as **Restocked**.
   */
  RESTOCKED = "RESTOCKED",

  /**
   * Displayed as **Pending fulfillment**.
   */
  PENDING_FULFILLMENT = "PENDING_FULFILLMENT",

  /**
   * Displayed as **Open**.
   */
  OPEN = "OPEN",

  /**
   * Displayed as **In progress**.
   */
  IN_PROGRESS = "IN_PROGRESS",

  /**
   * Unknown Syrup enum.
   */
  UNKNOWN_SYRUP_ENUM = "UNKNOWN_SYRUP_ENUM"
}

export class OrderDisplayFulfillmentStatusUtil {
  static safeValueOf(value: string): OrderDisplayFulfillmentStatus {
    const values = Object.keys(OrderDisplayFulfillmentStatus).map(x => OrderDisplayFulfillmentStatus[x])

    if (values.some(x => x === value)) {
      return <OrderDisplayFulfillmentStatus> value
    } else {
      return OrderDisplayFulfillmentStatus.UNKNOWN_SYRUP_ENUM
    }
  }
}
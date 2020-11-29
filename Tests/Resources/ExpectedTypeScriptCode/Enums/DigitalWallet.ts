

export enum DigitalWallet {

  /**
   * Apple Pay.
   */
  APPLE_PAY = "APPLE_PAY",

  /**
   * Android Pay.
   */
  ANDROID_PAY = "ANDROID_PAY",

  /**
   * Google Pay.
   */
  GOOGLE_PAY = "GOOGLE_PAY",

  /**
   * Shopify Pay.
   */
  SHOPIFY_PAY = "SHOPIFY_PAY",

  /**
   * Unknown Syrup enum.
   */
  UNKNOWN_SYRUP_ENUM = "UNKNOWN_SYRUP_ENUM"
}

export class DigitalWalletUtil {
  static safeValueOf(value: string): DigitalWallet {
    const values = Object.keys(DigitalWallet).map(x => DigitalWallet[x])

    if (values.some(x => x === value)) {
      return <DigitalWallet> value
    } else {
      return DigitalWallet.UNKNOWN_SYRUP_ENUM
    }
  }
}
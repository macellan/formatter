import { CurrencyOptions } from './Currency.types'

export default class Currency {
  protected options: CurrencyOptions

  constructor(options: CurrencyOptions) {
    this.options = options
  }

  public static getSymbol(code: string) {
    let currencySymbol

    const parts = new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: code,
      currencyDisplay: 'narrowSymbol',
    }).formatToParts(1)

    parts.forEach(part => {
      if (part.type === 'currency') {
        currencySymbol = part.value
      }
    })

    return currencySymbol
  }

  protected formatInltCurrency(code: string) {
    return new Intl.NumberFormat(this.options.locale, {
      style: 'currency',
      currency: code,
      currencyDisplay: 'narrowSymbol',
    })
  }

  public format(amount: number, code: string) {
    return this.formatInltCurrency(code).format(amount)
  }

  public formatToDetails(amount: number, code: string) {
    const formatter = this.formatInltCurrency(code)

    const parts = formatter.formatToParts(amount)

    const result = {
      symbol: '',
      digid: '',
      text: '',
      parts: parts,
    }

    parts.forEach(part => {
      if (part.type === 'currency') {
        result.symbol = part.value
        return
      }

      if (part.type === 'fraction' && part.value === '00') {
        result.digid = result.digid.slice(0, -1)
        return
      }

      result.digid += part.value
    })

    result.text = result.symbol + result.digid

    return result
  }
}

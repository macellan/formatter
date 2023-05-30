import { CurrencyOptions } from './Currency.types';

export default class Currency {
  protected options: CurrencyOptions;

  constructor(options: CurrencyOptions) {
    this.options = options;
  }

  public format(amount: number, code: string) {
    const formatter = new Intl.NumberFormat(this.options.locale, {
      style: 'currency',
      currency: code,
      currencyDisplay: 'narrowSymbol',
    });

    const parts = formatter.formatToParts(amount);

    const result = {
      symbol: '',
      text: '',
      digid: '',
    };

    parts.forEach(part => {
      if (part.type === 'symbol') {
        result.symbol = part.value;
        return;
      }

      if (part.type === 'fraction' && part.value === '00') {
        result.digid = result.digid.slice(0, -1);
        return;
      }

      result.digid += part.value;
    });

    result.text = result.symbol + result.digid;

    return result;
  }
}

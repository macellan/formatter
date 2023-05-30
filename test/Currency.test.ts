import { CurrencyCode, CurrencyFormatter, Locale } from '../src'

describe('test formatToDetails method', () => {
  it('should give correct output according to the given parameters. (tr, TRY)', () => {
    const Formatter = new CurrencyFormatter({
      locale: Locale.tr,
    })

    expect(Formatter.formatToDetails(1000, CurrencyCode.TRY)).toMatchObject({
      symbol: '₺',
      text: '₺1.000',
      digid: '1.000',
    })
  })

  it('should give correct output according to the given parameters. (en, USD) ', () => {
    const Formatter = new CurrencyFormatter({
      locale: Locale.en,
    })

    expect(Formatter.formatToDetails(1000, CurrencyCode.USD)).toMatchObject({
      symbol: '$',
      text: '$1,000',
      digid: '1,000',
    })
  })
})

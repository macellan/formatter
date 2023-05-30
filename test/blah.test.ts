import { CurrencyFormatter } from '../src'

describe('Currency Formatter', () => {
  it('works', () => {
    const Formatter = new CurrencyFormatter({
      locale: 'tr-TR',
    })

    expect(Formatter.formatToDetails(1000, 'TRY')).toEqual({
      symbol: '₺',
      text: '₺1,000.00',
      digid: '1.000',
    })
  })
})

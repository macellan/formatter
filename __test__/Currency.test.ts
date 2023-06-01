import { CurrencyFormatter } from '../src'

describe('test formatToDetails method', () => {
  it('should give correct output according to the given parameters. (tr, TL)', () => {
    expect(CurrencyFormatter.formatToDetails(1000, 'tr', 'TL')).toMatchObject({
      symbol: '₺',
      text: '1.000,00 ₺',
      digid: '1.000,00',
    })
  })

  it('should give correct output according to the given parameters. (en, USD) ', () => {
    expect(CurrencyFormatter.formatToDetails(1000, 'en', 'USD')).toMatchObject({
      symbol: '$',
      text: '$1,000.00',
      digid: '1,000.00',
    })
  })
})

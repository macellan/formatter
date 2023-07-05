import { currencyFormat, getCurrencySymbol } from 'simple-currency-format'

import { CurrencyCode, Locale } from './Types'

const formatCode = (code: CurrencyCode) => (code === 'TL' ? 'TRY' : code)

const format = (
    amount: number,
    locale: Locale,
    code: CurrencyCode,
    decimal: number | undefined = 2
) => {
    return currencyFormat(amount, locale, formatCode(code), decimal)
}

const getSymbol = (code: CurrencyCode) => {
    return getCurrencySymbol(formatCode(code))
}

const formatToDetails = (
    amount: number,
    locale: Locale,
    code: CurrencyCode,
    decimal: number | undefined = 2
) => {
    const formatted = format(amount, locale, code, decimal)

    const result = {
        symbol: getSymbol(code),
        digid: '',
        text: formatted,
    }

    result.digid = formatted.replace(result.symbol, '').trim()

    return result
}

export default {
    format,
    getSymbol,
    formatToDetails,
}

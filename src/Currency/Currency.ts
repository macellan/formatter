import { currencyFormat, getCurrencySymbol } from 'simple-currency-format'

import { CurrencyCode, Locale } from './Types'

export default class CurrencyFormatter {
    public static formatCode = (code: CurrencyCode) =>
        code === 'TL' ? 'TRY' : code

    public static getSymbol = (code: CurrencyCode) => {
        return getCurrencySymbol(CurrencyFormatter.formatCode(code))
    }

    public static formatToDetails = (
        amount: number,
        locale: Locale,
        code: CurrencyCode,
        decimal: number | undefined = 2
    ) => {
        const formatted = currencyFormat(
            amount,
            locale,
            CurrencyFormatter.formatCode(code),
            decimal
        )

        const result = {
            symbol: CurrencyFormatter.getSymbol(code),
            digid: '',
            text: formatted,
        }

        result.digid = formatted.replace(result.symbol, '').trim()

        return result
    }

    public static format = (
        amount: number,
        locale: Locale,
        code: CurrencyCode,
        decimal: number | undefined = 2
    ) => {
        const details = CurrencyFormatter.formatToDetails(
            amount,
            locale,
            code,
            decimal
        )

        return details.text + details.digid
    }
}

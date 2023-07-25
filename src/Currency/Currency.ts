import currencyFormat from 'currency-formatter'

import { CurrencyCode, Locale } from './Types'

export default class CurrencyFormatter {
    public static formatCode = (code: CurrencyCode) =>
        code === 'TL' ? 'TRY' : code

    public static getSymbol = (code: CurrencyCode) => {
        return currencyFormat.findCurrency(CurrencyFormatter.formatCode(code))
            ?.symbol as string
    }

    public static getLocaleSeparators = (locale: Locale) => {
        const formattedNumber = (1000.1).toLocaleString(locale)

        const separators = {
            separator: formattedNumber.charAt(1),
            decimal: formattedNumber.charAt(formattedNumber.length - 2),
        }

        return separators
    }

    public static getRawValue = (
        formatted: string,
        locale: Locale,
        code: CurrencyCode
    ) => {
        return currencyFormat.unformat(formatted, {
            locale: locale,
            code: CurrencyFormatter.formatCode(code),
        })
    }

    public static formatToDetails = (
        amount: number,
        locale: Locale,
        code: CurrencyCode
    ) => {
        const formatted = amount.toLocaleString(locale, {
            minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
            maximumFractionDigits: 2,
        })

        const result = {
            symbol: CurrencyFormatter.getSymbol(code),
            digid: '',
            text: formatted,
        }

        result.digid = formatted
            .replace((result.symbol as unknown) as string, '')
            .trim()

        return result
    }

    public static format = (
        amount: number,
        locale: Locale,
        code: CurrencyCode
    ) => {
        const details = CurrencyFormatter.formatToDetails(amount, locale, code)
        return details.symbol + details.digid
    }
}

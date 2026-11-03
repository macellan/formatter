import { Locale } from './Types'

export default class PercentFormatter {
    public static format = (value: number | string, locale: Locale) => {
        return new Intl.NumberFormat(locale, {
            maximumFractionDigits: 2,
            style: 'percent',
        }).format(Number(value) / 100)
    }
}

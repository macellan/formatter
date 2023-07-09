import NumberFormatter from '../Number/Number'
import CreditCardConstants from './Constants'

export default class CreditCardFormatter {
    private static trim = (value: string) => {
        return value.replace(/\s/g, '')
    }

    public static getRawValue = (value: string) => {
        return NumberFormatter.format(value)
    }

    public static validate = (value: string) => {
        const issuer = CreditCardFormatter.getIssuer(value)
        const rawValue = CreditCardFormatter.trim(value)

        return issuer ? issuer.pattern.test(rawValue) : false
    }

    public static getIssuer = (value: string) => {
        const text = CreditCardFormatter.getRawValue(value)

        return CreditCardConstants.Issuers.find(issuer =>
            issuer.simplePattern.test(text)
        )
    }

    public static format = (value: string) => {
        const text = CreditCardFormatter.getRawValue(value)

        const issuer = CreditCardFormatter.getIssuer(text)
        if (!issuer) return text
        return text.replace(issuer.groupPattern, (_, ...groups) => {
            let formatted = groups[0]

            groups.slice(1).every(group => {
                return typeof group === 'string'
                    ? (formatted += ' ' + group)
                    : false
            })

            return formatted.slice(0, issuer.maxLength)
        })
    }
}

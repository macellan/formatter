import CreditCardConstants from './Constants'

export default class CreditCard {
    private static clear = (text: string) => {
        return text.replaceAll(' ', '')
    }

    public static getIssuer = (value: string) => {
        const text = CreditCard.clear(value)

        return CreditCardConstants.Issuers.find(issuer =>
            issuer.simplePattern.test(text)
        )
    }

    public static format = (value: string) => {
        const text = CreditCard.clear(value)

        const issuer = CreditCard.getIssuer(text)
        if (!issuer) return text
        return text.replace(issuer.groupPattern, (_, ...groups) => {
            let formatted = groups[0]

            groups.slice(1).every(group => {
                return typeof group === 'string'
                    ? (formatted += ' ' + group)
                    : false
            })

            return formatted
        })
    }
}

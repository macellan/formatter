import { CardIssuer } from './Types'

const Issuers: CardIssuer[] = [
    {
        name: 'amex',
        title: 'American Express',
        pattern: /^3[47]\d{13}$/,
        simplePattern: /^3[47]\d*$/,
        groupPattern: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
        digits: 15,
        maxLength: 17,
        cvcLength: 4,
    },
    {
        name: 'visa',
        title: 'Visa',
        pattern: /^4\d{12}(\d{3}|\d{6})?$/,
        simplePattern: /^4/,
        groupPattern: /(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?(\d{1,3})?/,
        digits: 16,
        maxLength: 19,
        cvcLength: 3,
    },
    {
        name: 'mastercard',
        title: 'Mastercard',
        pattern: /^5[1-5]\d*$/,
        simplePattern: /^5[1-5]\d*$/,
        groupPattern: /(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?/,
        digits: 16,
        maxLength: 19,
        cvcLength: 3,
    },
    {
        name: 'troy',
        title: 'Troy',
        pattern: /^9792\d{12}$/,
        simplePattern: /^9792/,
        groupPattern: /(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?/,
        digits: 16,
        maxLength: 19,
        cvcLength: 3,
    },
]

export default {
    Issuers: Issuers,
}

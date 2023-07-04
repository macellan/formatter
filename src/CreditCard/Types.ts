export interface CardIssuer {
    name: string
    title: string
    pattern: RegExp
    simplePattern: RegExp
    groupPattern: RegExp
    digits: number
    maxLength: number
    cvcLength: number
}

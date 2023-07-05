export default class NumberFormatter {
    public static format(value: string) {
        return value.replace(/[^\d.-]+/g, '')
    }
}

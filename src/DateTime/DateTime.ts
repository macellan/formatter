import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

export default class DateTimeFormatter {
    public static format = (value: string, pattern: string) => {
        let formattedText = ''
        let patternIndex = 0
        let valueIndex = 0

        while (patternIndex < pattern.length && valueIndex < value.length) {
            const patternChar = pattern[patternIndex]
            const valueChar = value[valueIndex]

            if (['D', 'M', 'Y', 'h', 'm', 's'].includes(patternChar)) {
                if (valueChar.match(/[0-9]/)) {
                    formattedText += valueChar
                    patternIndex++
                }

                valueIndex++
                continue
            }

            formattedText += patternChar
            patternIndex++

            if (valueChar === patternChar) {
                valueIndex++
            }
        }

        return formattedText
    }

    public static getRawValue = (value: string, pattern: string) => {
        return dayjs(value, pattern).toDate()
    }

    public static validate = (value: string, pattern: string) => {
        return dayjs(value, pattern).isValid()
    }
}

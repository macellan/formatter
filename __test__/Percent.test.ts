import { PercentFormatter } from '../src'

describe('test format method', () => {
    it('should put the percent sign before the value for tr', () => {
        expect(PercentFormatter.format(10, 'tr')).toBe('%10')
    })

    it('should put the percent sign after the value for en', () => {
        expect(PercentFormatter.format(10, 'en')).toBe('10%')
    })

    it('should use the locale decimal separator', () => {
        expect(PercentFormatter.format(12.5, 'tr')).toBe('%12,5')
        expect(PercentFormatter.format(12.5, 'en')).toBe('12.5%')
    })

    it('should round to at most two fraction digits', () => {
        expect(PercentFormatter.format(12.3456, 'en')).toBe('12.35%')
    })

    it('should accept string values', () => {
        expect(PercentFormatter.format('10.00', 'tr')).toBe('%10')
    })
})

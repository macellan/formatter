import { NumberFormatter } from '../src'

describe('test format method', () => {
    it('should give only numbers from value', () => {
        expect(NumberFormatter.format('A 1000-D321')).toMatch('1000')
    })
})

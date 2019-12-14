const rules = require('../../../../src/modules/uniqueid/uniqueid.rules')

describe('uniqueid.rules.js', () => {
    it('exports 4 key-value pairs', () => {
        const actual = Object.keys(rules)
        const expected = ['joinOn', 'times', 'randomUniqueIdGenerator', '__version']
        expect(actual).toEqual(expected)
        expect(actual.length).toEqual(expected.length) // redundant
    })
    it('exports randomUniqueIdGenerator function', () => {
        expect(typeof rules.randomUniqueIdGenerator).toEqual('function')
        expect(typeof rules.randomUniqueIdGenerator()).toEqual('string')
    })
    it('exports `times` which is 3', () => {
        expect(rules.times).toEqual(3)
    })
    it('exports `joinOn` which is "-"', () => {
        expect(rules.joinOn).toEqual('-')
    })
    describe('__version', () => {
        it('has internal version of 1', () => {
            expect(rules.__version.internal).toEqual(1)
        })
        it('has external version of "uuid/v4"', () => {
            expect(rules.__version.external).toEqual('uuid/v4')
        })
    })
})

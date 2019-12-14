const lib = require('../../../../src/modules/uniqueid/uniqueid.module')

describe('uniqueid.module.js', () => {
    it('lib is a function of arity 1', () => {
        expect(typeof lib).toEqual('function')
        expect(lib.length).toEqual(1)
    })
    it('lib() returns an object containing `generate` function and `__version` object', () => {
        const expected = ['generate', '__version']
        const actual = Object.keys(lib())
        expect(actual).toEqual(expected)
    })
    it('lib().generate is a function', () => {
        const expected = 'function'
        const actual = typeof lib().generate
        expect(actual).toEqual(expected)
    })
    it('lib().generate() has arity of 0', () => {
        const expected = 0
        const actual = lib().generate.length
        expect(actual).toEqual(expected)
    })
    it('lib().generate() returns object with result and __version info', () => {
        const expected = ['result', '__version']
        const actual = Object.keys(lib().generate())
        expect(actual).toEqual(expected)
    })
    it('lib().generate() returns separate result values on each invocation', () => {
        const expected = lib().generate().result
        const actual = lib().generate().result
        expect(actual).not.toEqual(expected)
    })
    it('lib().generate() returns values that contain 15 dashes', () => {
        const expected = 15
        const actual = lib().generate().result.split('-').length
        expect(actual).toEqual(expected)
    })
})

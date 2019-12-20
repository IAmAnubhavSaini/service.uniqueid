const lib = require('../../../src/server/server.rules')

describe('src/server/server.rules', () => {
  it('is a function of arity 6', () => {
    expect(typeof lib).toEqual('function')
    expect(lib.length).toBe(6)
  })
  it('lib() returns expected object', () => {
    var expectedKeys = [
      'PORT',
      'HOST',
      'server',
      'bodyParser',
      'modules',
      'logger',
      'EXIT',
      'requestId'
    ]
    var actualKeys = Object.keys(lib())
    expect(actualKeys).toEqual(expectedKeys)
  })
  it('EXIT has known password', () => {
    expect(lib().EXIT.PASSWORD).toEqual('password@123')
  })
  it('EXIT has known duration', () => {
    expect(lib().EXIT.DURATION).toEqual(60 * 60 * 1000)
  })
})

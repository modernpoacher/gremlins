const {
  expect
} = require('chai')

const {
  ValueGremlin,
  CheckGremlin
} = require('#gremlins/gremlins')

describe('#gremlins/gremlins', () => {
  describe('`ValueGremlin`', () => {
    it('is a function', () => {
      expect(ValueGremlin)
        .to.be.a('function')
    })
  })

  describe('`CheckGremlin`', () => {
    it('is a function', () => {
      expect(CheckGremlin)
        .to.be.a('function')
    })
  })
})

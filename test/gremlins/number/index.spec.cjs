const {
  expect
} = require('chai')

const Number = require('#gremlins/gremlins/number')

describe('#gremlins/gremlins/number', () => {
  describe('`Number`', () => {
    it('is a function', () => {
      expect(Number)
        .to.be.a('function')
    })
  })
})

const {
  expect
} = require('chai')

const Email = require('#gremlins/gremlins/email')

describe('#gremlins/gremlins/email', () => {
  describe('`Email`', () => {
    it('is a function', () => {
      expect(Email)
        .to.be.a('function')
    })
  })
})

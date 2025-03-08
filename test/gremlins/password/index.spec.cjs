const {
  expect
} = require('chai')

const Password = require('#gremlins/gremlins/password')

describe('#gremlins/gremlins/password', () => {
  describe('`Password`', () => {
    it('is a function', () => {
      expect(Password)
        .to.be.a('function')
    })
  })
})

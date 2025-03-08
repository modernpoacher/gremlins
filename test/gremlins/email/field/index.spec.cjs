const {
  expect
} = require('chai')

const Field = require('#gremlins/gremlins/email/field')

describe('#gremlins/gremlins/email/field', () => {
  describe('`Field`', () => {
    it('is a function', () => {
      expect(Field)
        .to.be.a('function')
    })
  })
})

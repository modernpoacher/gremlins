const {
  expect
} = require('chai')

const Field = require('#gremlins/gremlins/text/field')

describe('#gremlins/gremlins/text/field', () => {
  describe('`Field`', () => {
    it('is a function', () => {
      expect(Field)
        .to.be.a('function')
    })
  })
})

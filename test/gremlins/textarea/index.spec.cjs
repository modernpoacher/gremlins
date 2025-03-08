const {
  expect
} = require('chai')

const Textarea = require('#gremlins/gremlins/textarea')

describe('#gremlins/gremlins/textarea', () => {
  describe('`Textarea`', () => {
    it('is a function', () => {
      expect(Textarea)
        .to.be.a('function')
    })
  })
})

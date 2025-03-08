const {
  expect
} = require('chai')

const Text = require('#gremlins/gremlins/text')

describe('#gremlins/gremlins/text', () => {
  describe('`Text`', () => {
    it('is a function', () => {
      expect(Text)
        .to.be.a('function')
    })
  })
})

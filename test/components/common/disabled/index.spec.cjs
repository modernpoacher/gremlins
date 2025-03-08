const {
  expect
} = require('chai')

const Disabled = require('#gremlins/components/common/disabled')

describe('#gremlins/components/common/disabled', () => {
  describe('`Disabled`', () => {
    it('is a function', () => {
      expect(Disabled)
        .to.be.a('function')
    })
  })
})

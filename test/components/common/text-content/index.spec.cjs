const {
  expect
} = require('chai')

const TextContent = require('#gremlins/components/common/text-content')

describe('#gremlins/components/common/text-content', () => {
  describe('`TextContent`', () => {
    it('is a function', () => {
      expect(TextContent)
        .to.be.a('function')
    })
  })
})

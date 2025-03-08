const {
  expect
} = require('chai')

const Group = require('#gremlins/components/group')

describe('#gremlins/components/group', () => {
  describe('`Group`', () => {
    it('is a function', () => {
      expect(Group)
        .to.be.a('function')
    })
  })
})

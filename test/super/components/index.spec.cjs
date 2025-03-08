const {
  expect
} = require('chai')

const {
  Field,
  Group
} = require('#gremlins/super/components')

describe('#gremlins/components', () => {
  describe('`Field`', () => {
    it('is a function', () => {
      expect(Field)
        .to.be.a('function')
    })
  })

  describe('`Group`', () => {
    it('is a function', () => {
      expect(Group)
        .to.be.a('function')
    })
  })
})

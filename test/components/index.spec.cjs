const {
  expect
} = require('chai')

const {
  Field,
  Group
} = require('#gremlins/components')

describe('#gremlins/components', () => {
  describe('`Field`', () => {
    it('is an object', () => {
      expect(Field)
        .to.be.an('object')
    })
  })

  describe('`Group`', () => {
    it('is a function', () => {
      expect(Group)
        .to.be.a('function')
    })
  })
})

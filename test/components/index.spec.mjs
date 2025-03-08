import {
  expect
} from 'chai'

import {
  Field,
  Group
} from '#gremlins/components'

describe('#gremlins/components', () => {
  describe('`Field`', () => {
    it('is a function', () => {
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

import {
  expect
} from 'chai'

import {
  FieldGremlin,
  GroupGremlin
} from '#gremlins/super/gremlins'

describe('#gremlins/super/gremlins', () => {
  describe('`FieldGremlin`', () => {
    it('is a function', () => {
      expect(FieldGremlin)
        .to.be.a('function')
    })
  })

  describe('`GroupGremlin`', () => {
    it('is a function', () => {
      expect(GroupGremlin)
        .to.be.a('function')
    })
  })
})

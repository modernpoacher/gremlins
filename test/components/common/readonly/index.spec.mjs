import {
  expect
} from 'chai'

import ReadOnly from '#gremlins/components/common/readonly'

describe('#gremlins/components/common/readonly', () => {
  describe('`ReadOnly`', () => {
    it('is a function', () => {
      expect(ReadOnly)
        .to.be.a('function')
    })
  })
})

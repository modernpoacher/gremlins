import {
  expect
} from 'chai'

import Required from '#gremlins/components/common/required'

describe('#gremlins/components/common/required', () => {
  describe('`Required`', () => {
    it('is a function', () => {
      expect(Required)
        .to.be.a('function')
    })
  })
})

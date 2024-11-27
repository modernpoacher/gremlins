import React from 'react'
import renderer from 'react-test-renderer'

import Component from '#gremlins/components/common/required'

jest.useFakeTimers()

describe('#gremlins/components/common/required', () => {
  describe('<Component />', () => {
    it('renders', () => {
      return expect(renderer.create(<Component />).toJSON())
        .toMatchSnapshot()
    })
  })
})

import React from 'react'
import renderer from 'react-test-renderer'

import Group from '#gremlins/components/group'

describe('#gremlins/components/group', () => {
  describe('<Group />', () => {
    describe('With required props', () => {
      const component = (
        <Group />
      )

      it('renders', () => {
        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('`getClassName`', () => {
        it('is defined', () => {
          return expect(Group.prototype.getClassName)
            .toBeDefined()
        })
      })

      describe('`shouldComponentUpdate`', () => {
        it('is defined', () => {
          return expect(Group.prototype.shouldComponentUpdate)
            .toBeDefined()
        })
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <Group
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`getClassName()`', () => {
      it('returns the classname', () => {
        const component = (
          <Group />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        return expect(instance.getClassName())
          .toBe('group')
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      const MOCK_ON_CHANGE = jest.fn()

      const component = (
        <Group
          onChange={MOCK_ON_CHANGE}
        />
      )

      let instance

      beforeEach(() => {
        instance = (
          renderer.create(component)
            .getInstance()
        )
      })

      describe('`props` have changed', () => {
        it('returns true', () => {
          return expect(instance.shouldComponentUpdate({
            onChange: jest.fn()
          }))
            .toBe(true)
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          return expect(instance.shouldComponentUpdate({ // instance.props
            onChange: MOCK_ON_CHANGE
          }))
            .toBe(false)
        })
      })
    })
  })
})

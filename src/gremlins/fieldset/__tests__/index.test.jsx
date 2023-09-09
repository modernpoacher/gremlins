import React from 'react'
import renderer from 'react-test-renderer'

import classnames from 'classnames'

import { GroupGremlin as Super } from '@modernpoacher/gremlins/gremlins'
import Gremlin from '../index.jsx'

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('../group/index.jsx')

describe('@modernpoacher/gremlins/gremlins/fieldset', () => {
  describe('<Gremlin />', () => {
    describe('With required props', () => {
      const component = (
        <Gremlin />
      )

      it('renders', () => {
        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('`getClassName`', () => {
        it('is defined', () => {
          return expect(Gremlin.prototype.getClassName)
            .toBeDefined()
        })
      })

      describe('`renderGroup`', () => {
        it('is defined', () => {
          return expect(Gremlin.prototype.renderGroup)
            .toBeDefined()
        })
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <Gremlin
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`getClassName()`', () => {
      let returnValue

      beforeEach(() => {
        jest.spyOn(Super.prototype, 'getClassName').mockReturnValue('MOCK GETCLASSNAME')

        const component = (
          <Gremlin />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        returnValue = instance.getClassName()
      })

      it('invokes `classnames`', () => {
        return expect(classnames)
          .toBeCalledWith('MOCK GETCLASSNAME', 'fieldset')
      })

      it('returns the classname', () => {
        return expect(returnValue)
          .toBe('MOCK CLASSNAME')
      })
    })
  })
})

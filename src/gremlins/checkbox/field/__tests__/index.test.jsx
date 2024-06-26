import React, { Component as mockComponent } from 'react'
import renderer from 'react-test-renderer'
import classnames from 'classnames'

import { CheckField } from '@modernpoacher/gremlins/components/field'
import Field from '@modernpoacher/gremlins/gremlins/checkbox/field'

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('@modernpoacher/gremlins/components/field', () => {
  class MockField extends mockComponent {
    getClassName () { }

    handleChange () { }

    handleClick () { }
  }

  return {
    __esModule: true,
    CheckField: class CheckField extends MockField { },
    default: MockField
  }
})

describe('@modernpoacher/gremlins/gremlins/checkbox/field', () => {
  describe('<Field />', () => {
    describe('With required props', () => {
      const component = (
        <Field
          name='MOCK NAME'
          value='MOCK VALUE'
        />
      )

      it('renders', () => {
        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('`getClassName`', () => {
        it('is defined', () => {
          return expect(Field.prototype.getClassName)
            .toBeDefined()
        })
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <Field
            name='MOCK NAME'
            id='MOCK ID'
            value='MOCK VALUE'
            required
            disabled
            readOnly
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`getClassName()`', () => {
      let returnValue

      beforeEach(() => {
        jest.spyOn(CheckField.prototype, 'getClassName').mockReturnValue('MOCK GETCLASSNAME')

        const component = (
          <Field
            name='MOCK NAME'
            value='MOCK VALUE'
          />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        returnValue = instance.getClassName()
      })

      it('invokes `classnames`', () => {
        return expect(classnames)
          .toBeCalledWith('MOCK GETCLASSNAME', 'checkbox')
      })

      it('returns the classname', () => {
        return expect(returnValue)
          .toBe('MOCK CLASSNAME')
      })
    })
  })
})

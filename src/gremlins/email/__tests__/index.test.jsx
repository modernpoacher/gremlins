import React, { Component as mockComponent } from 'react'
import renderer from 'react-test-renderer'
import classnames from 'classnames'

import { ValueGremlin } from '#gremlins/gremlins'
import Gremlin from '#gremlins/gremlins/email'

import Field from '#gremlins/gremlins/email/field'

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('#gremlins/gremlins', () => {
  class MockGremlin extends mockComponent {
    getClassName () {
      return 'MOCK CLASSNAME'
    }

    getId () {
      return 'MOCK ID'
    }

    renderField () {
      return 'MOCK FIELD'
    }

    render () {
      const className = this.getClassName()

      return (
        <div className={className}>
          {this.renderField()}
        </div>
      )
    }
  }

  return {
    __esModule: true,
    ValueGremlin: class ValueGremlin extends MockGremlin { },
    default: MockGremlin
  }
})

jest.mock('#gremlins/gremlins/email/field')

describe('#gremlins/gremlins/email', () => {
  describe('<Gremlin />', () => {
    describe('With required props', () => {
      const component = (
        <Gremlin name='MOCK NAME' />
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

      describe('`renderField`', () => {
        it('is defined', () => {
          return expect(Gremlin.prototype.renderField)
            .toBeDefined()
        })
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <Gremlin
            name='MOCK NAME'
            id='MOCK ID'
            value='MOCK VALUE'
            tabIndex={1}
            accessKey='MOCK ACCESS KEY'
            required
            disabled
            readOnly
            placeholder='MOCK PLACEHOLDER'
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
        jest.spyOn(ValueGremlin.prototype, 'getClassName').mockReturnValue('MOCK GETCLASSNAME')

        const component = (
          <Gremlin name='MOCK NAME' />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        returnValue = instance.getClassName()
      })

      it('does not invoke `classnames`', () => {
        return expect(classnames)
          .toBeCalledWith('MOCK GETCLASSNAME', 'email')
      })

      it('returns the classname', () => {
        return expect(returnValue)
          .toBe('MOCK CLASSNAME')
      })
    })

    describe('`renderField()`', () => {
      const component = (
        <Gremlin
          name='MOCK NAME'
          id='MOCK ID'
          value='MOCK VALUE'
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          required
          disabled
          readOnly
          placeholder='MOCK PLACEHOLDER'
          onChange={jest.fn()}
        />
      )

      let instance

      let getIdSpy

      beforeEach(() => {
        jest.clearAllMocks()

        instance = (
          renderer.create(component)
            .getInstance()
        )

        getIdSpy = jest.spyOn(Gremlin.prototype, 'getId').mockReturnValue('MOCK ID')

        instance.renderField()
      })

      it('invokes `getId`', () => {
        return expect(getIdSpy)
          .toBeCalled()
      })

      it('renders `<Field />`', () => {
        return expect(Field)
          .toBeCalledWith({
            name: 'MOCK NAME',
            id: 'MOCK ID',
            value: 'MOCK VALUE',
            tabIndex: 1,
            accessKey: 'MOCK ACCESS KEY',
            required: true,
            disabled: true,
            readOnly: true,
            placeholder: 'MOCK PLACEHOLDER',
            onChange: expect.any(Function)
          }, {})
      })
    })
  })
})

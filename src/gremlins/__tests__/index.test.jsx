import React from 'react'
import renderer from 'react-test-renderer'
import classnames from 'classnames'

import Field from '#gremlins/components/field'

import { FieldGremlin as Gremlin, ValueGremlin, CheckGremlin } from '#gremlins/gremlins'

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('#gremlins/components/field')

describe('#gremlins/gremlins', () => {
  describe('<Gremlin />', () => {
    describe('With required props', () => {
      const component = (
        <Gremlin name='MOCK NAME' />
      )

      it('renders', () => {
        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('Prototype', () => {
        describe('`getClassName`', () => {
          it('is defined', () => {
            return expect(Gremlin.prototype.getClassName)
              .toBeDefined()
          })
        })

        describe('`getId`', () => {
          it('is defined', () => {
            return expect(Gremlin.prototype.getId)
              .toBeDefined()
          })
        })

        describe('`shouldComponentUpdate`', () => {
          it('is defined', () => {
            return expect(Gremlin.prototype.shouldComponentUpdate)
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
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <Gremlin
            name='MOCK NAME'
            id='MOCK ID'
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
      beforeEach(() => {
        classnames.mockReset()
      })

      describe('With required props', () => {
        let returnValue

        beforeEach(() => {
          classnames.mockReturnValue('MOCK CLASSNAME')

          const component = (
            <Gremlin name='MOCK NAME' />
          )

          const instance = (
            renderer.create(component)
              .getInstance()
          )

          returnValue = instance.getClassName()
        })

        it('invokes `classnames`', () => {
          return expect(classnames)
            .toBeCalledWith('gremlin', { required: false, disabled: false, readOnly: false })
        })

        it('returns the classname', () => {
          return expect(returnValue)
            .toBe('MOCK CLASSNAME')
        })
      })

      describe('With additional props', () => {
        describe('`props` has `required`', () => {
          let returnValue

          beforeEach(() => {
            classnames.mockReturnValue('MOCK CLASSNAME')

            const component = (
              <Gremlin name='MOCK NAME' required />
            )

            const instance = (
              renderer.create(component)
                .getInstance()
            )

            returnValue = instance.getClassName()
          })

          it('invokes `classnames`', () => {
            return expect(classnames)
              .toBeCalledWith('gremlin', { required: true, disabled: false, readOnly: false })
          })

          it('returns the classname', () => {
            return expect(returnValue)
              .toBe('MOCK CLASSNAME')
          })
        })

        describe('`props` has `disabled`', () => {
          let returnValue

          beforeEach(() => {
            classnames.mockReturnValue('MOCK CLASSNAME')

            const component = (
              <Gremlin name='MOCK NAME' disabled />
            )

            const instance = (
              renderer.create(component)
                .getInstance()
            )

            returnValue = instance.getClassName()
          })

          it('invokes `classnames`', () => {
            return expect(classnames)
              .toBeCalledWith('gremlin', { required: false, disabled: true, readOnly: false })
          })

          it('returns the classname', () => {
            return expect(returnValue)
              .toBe('MOCK CLASSNAME')
          })
        })

        describe('`props` has `readOnly`', () => {
          let returnValue

          beforeEach(() => {
            classnames.mockReturnValue('MOCK CLASSNAME')

            const component = (
              <Gremlin name='MOCK NAME' readOnly />
            )

            const instance = (
              renderer.create(component)
                .getInstance()
            )

            returnValue = instance.getClassName()
          })

          it('invokes `classnames`', () => {
            return expect(classnames)
              .toBeCalledWith('gremlin', { required: false, disabled: false, readOnly: true })
          })

          it('returns the classname', () => {
            return expect(returnValue)
              .toBe('MOCK CLASSNAME')
          })
        })
      })
    })

    describe('`getId()`', () => {
      describe('With required props', () => {
        describe('`props` has `name`', () => {
          it('returns the id', () => {
            const component = (
              <Gremlin name='MOCK NAME' />
            )

            return expect(renderer.create(component).getInstance().getId())
              .toBe('MOCK NAME')
          })
        })
      })

      describe('With additional props', () => {
        describe('`props` has `id`', () => {
          it('returns the id', () => {
            const component = (
              <Gremlin name='MOCK NAME' id='MOCK ID' />
            )

            return expect(renderer.create(component).getInstance().getId())
              .toBe('MOCK ID')
          })
        })
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      const MOCK_ON_CHANGE = jest.fn()

      const component = (
        <Gremlin
          name='MOCK NAME'
          id='MOCK ID'
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          required
          disabled
          readOnly
          placeholder='MOCK PLACEHOLDER'
          onChange={MOCK_ON_CHANGE}
        />
      )

      let instance

      beforeEach(() => {
        instance = renderer.create(component).getInstance()
      })

      describe('`props` have changed', () => {
        it('returns true', () => {
          return expect(instance.shouldComponentUpdate({
            name: 'MOCK CHANGE NAME',
            id: 'MOCK CHANGE ID',
            tabIndex: 0,
            accessKey: 'MOCK CHANGE ACCESS KEY',
            required: false,
            disabled: false,
            readOnly: false,
            placeholder: 'MOCK CHANGE PLACEHOLDER',
            onChange: jest.fn()
          }))
            .toBe(true)
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          return expect(instance.shouldComponentUpdate({ // instance.props
            name: 'MOCK NAME',
            id: 'MOCK ID',
            tabIndex: 1,
            accessKey: 'MOCK ACCESS KEY',
            required: true,
            disabled: true,
            readOnly: true,
            placeholder: 'MOCK PLACEHOLDER',
            onChange: MOCK_ON_CHANGE
          }))
            .toBe(false)
        })
      })
    })

    describe('`renderField()`', () => {
      const component = (
        <Gremlin
          name='MOCK NAME'
          id='MOCK ID'
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          required
          disabled
          readOnly
          placeholder='MOCK PLACEHOLDER'
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

  describe('<ValueGremlin />', () => {
    describe('With required props', () => {
      const component = (
        <ValueGremlin name='MOCK NAME' />
      )

      it('renders', () => {
        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('Prototype', () => {
        describe('`shouldComponentUpdate`', () => {
          it('is defined', () => {
            return expect(ValueGremlin.prototype.shouldComponentUpdate)
              .toBeDefined()
          })
        })
      })

      describe('Instance', () => {
        describe('Extends `<Gremlin />`', () => {
          it('is defined', () => {
            return expect(renderer.create(component).getInstance())
              .toBeInstanceOf(Gremlin)
          })
        })
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <ValueGremlin
            name='MOCK NAME'
            id='MOCK ID'
            tabIndex={1}
            accessKey='MOCK ACCESS KEY'
            required
            disabled
            readOnly
            value='MOCK VALUE'
            placeholder='MOCK PLACEHOLDER'
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      const MOCK_ON_CHANGE = jest.fn()

      const component = (
        <ValueGremlin
          name='MOCK NAME'
          id='MOCK ID'
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          required
          disabled
          readOnly
          value='MOCK VALUE'
          placeholder='MOCK PLACEHOLDER'
          onChange={MOCK_ON_CHANGE}
        />
      )

      let instance

      beforeEach(() => {
        instance = renderer.create(component).getInstance()
      })

      describe('`props` have changed', () => {
        it('returns true', () => {
          return expect(instance.shouldComponentUpdate({
            ...instance.props,
            value: 'MOCK CHANGE VALUE',
            onChange: jest.fn()
          }))
            .toBe(true)
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          return expect(instance.shouldComponentUpdate({
            ...instance.props,
            value: 'MOCK VALUE',
            onChange: MOCK_ON_CHANGE
          }))
            .toBe(false)
        })
      })
    })
  })

  describe('<CheckGremlin />', () => {
    describe('With required props', () => {
      const component = (
        <CheckGremlin name='MOCK NAME' />
      )

      it('renders', () => {
        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('Prototype', () => {
        describe('`shouldComponentUpdate`', () => {
          it('is defined', () => {
            return expect(CheckGremlin.prototype.shouldComponentUpdate)
              .toBeDefined()
          })
        })
      })

      describe('Instance', () => {
        describe('Extends `<Gremlin />`', () => {
          it('is defined', () => {
            return expect(renderer.create(component).getInstance())
              .toBeInstanceOf(Gremlin)
          })
        })
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <CheckGremlin
            name='MOCK NAME'
            id='MOCK ID'
            tabIndex={1}
            accessKey='MOCK ACCESS KEY'
            required
            disabled
            readOnly
            checked
            placeholder='MOCK PLACEHOLDER'
            onChange={jest.fn()}
            onClick={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      const MOCK_ON_CHANGE = jest.fn()

      const component = (
        <CheckGremlin
          name='MOCK NAME'
          id='MOCK ID'
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          required
          disabled
          readOnly
          checked
          placeholder='MOCK PLACEHOLDER'
          onChange={MOCK_ON_CHANGE}
        />
      )

      let instance

      beforeEach(() => {
        instance = renderer.create(component).getInstance()
      })

      describe('`props` have changed', () => {
        it('returns true', () => {
          return expect(instance.shouldComponentUpdate({
            ...instance.props,
            checked: false
          }))
            .toBe(true)
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          return expect(instance.shouldComponentUpdate({ // instance.props
            ...instance.props,
            checked: true
          }))
            .toBe(false)
        })
      })
    })
  })
})

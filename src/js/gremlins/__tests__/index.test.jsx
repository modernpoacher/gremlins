/**
 *  @typedef {GremlinsTypes.Gremlins.ValueProps} ValueProps
 *  @typedef {GremlinsTypes.Gremlins.CheckProps} CheckProps
 */
import React from 'react'

import {
  snapshotOf
} from 'react-component-snapshot'

import {
  getInstanceFromContainerElement
} from 'react-component-instance'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import {
  ValueGremlin,
  CheckGremlin
} from '#gremlins/gremlins'

import {
  FieldGremlin as Super
} from '#gremlins/super/gremlins'

jest.mock('classnames', () => jest.fn().mockReturnValue('MOCK CLASSNAME'))

describe('#gremlins/gremlins', () => {
  describe('<ValueGremlin />', () => {
    const MOCK_FIELD_REF = { current: null }
    const MOCK_ON_CHANGE = jest.fn()

    describe('With required props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: gremlin
          }
        } = render(
          <ValueGremlin
            name='MOCK NAME'
          />
        )

        expect(gremlin)
          .toBeInstanceOf(HTMLDivElement)
      })

      describe('Always', () => {
        /**
         *  @type {undefined | jest.SpyInstance}
         */
        let getClassNameSpy

        /**
         *  @type {undefined | jest.SpyInstance}
         */
        let renderFieldSpy

        beforeEach(() => {
          getClassNameSpy = jest.spyOn(ValueGremlin.prototype, 'getClassName')

          renderFieldSpy = jest.spyOn(ValueGremlin.prototype, 'renderField')

          render(
            <ValueGremlin
              name='MOCK NAME'
            />
          )
        })

        it('invokes `getClassName`', () => {
          expect(getClassNameSpy)
            .toHaveBeenCalled()
        })

        it('invokes `renderField`', () => {
          expect(renderFieldSpy)
            .toHaveBeenCalled()
        })
      })

      it('matches the snapshot', () => {
        const {
          container: {
            firstElementChild: element
          }
        } = render(
          <ValueGremlin
            name='MOCK NAME'
          />
        )

        expect(snapshotOf(element))
          .toMatchSnapshot()
      })
    })

    describe('With additional props', () => {
      describe('Value is a string', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: gremlin
            }
          } = render(
            <ValueGremlin
              name='MOCK NAME'
              id='MOCK ID'
              value='MOCK VALUE'
              tabIndex={1}
              accessKey='MOCK ACCESS KEY'
              required
              disabled
              readOnly
              placeholder='MOCK PLACEHOLDER'
              fieldRef={MOCK_FIELD_REF}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(gremlin)
            .toBeInstanceOf(HTMLDivElement)
        })

        describe('Always', () => {
          /**
           *  @type {undefined | jest.SpyInstance}
           */
          let getClassNameSpy

          /**
           *  @type {undefined | jest.SpyInstance}
           */
          let renderFieldSpy

          beforeEach(() => {
            getClassNameSpy = jest.spyOn(ValueGremlin.prototype, 'getClassName')

            renderFieldSpy = jest.spyOn(ValueGremlin.prototype, 'renderField')

            render(
              <ValueGremlin
                name='MOCK NAME'
                id='MOCK ID'
                value='MOCK VALUE'
                tabIndex={1}
                accessKey='MOCK ACCESS KEY'
                required
                disabled
                readOnly
                placeholder='MOCK PLACEHOLDER'
                fieldRef={MOCK_FIELD_REF}
                onChange={MOCK_ON_CHANGE}
              />
            )
          })

          it('invokes `getClassName`', () => {
            expect(getClassNameSpy)
              .toHaveBeenCalled()
          })

          it('invokes `renderField`', () => {
            expect(renderFieldSpy)
              .toHaveBeenCalled()
          })
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: element
            }
          } = render(
            <ValueGremlin
              name='MOCK NAME'
              id='MOCK ID'
              value='MOCK VALUE'
              tabIndex={1}
              accessKey='MOCK ACCESS KEY'
              required
              disabled
              readOnly
              placeholder='MOCK PLACEHOLDER'
              fieldRef={MOCK_FIELD_REF}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(element))
            .toMatchSnapshot()
        })
      })

      describe('Default value is a string', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: gremlin
            }
          } = render(
            <ValueGremlin
              name='MOCK NAME'
              id='MOCK ID'
              defaultValue='MOCK DEFAULT VALUE'
              tabIndex={1}
              accessKey='MOCK ACCESS KEY'
              required
              disabled
              readOnly
              placeholder='MOCK PLACEHOLDER'
              fieldRef={MOCK_FIELD_REF}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(gremlin)
            .toBeInstanceOf(HTMLDivElement)
        })

        describe('Always', () => {
          /**
           *  @type {undefined | jest.SpyInstance}
           */
          let getClassNameSpy

          /**
           *  @type {undefined | jest.SpyInstance}
           */
          let renderFieldSpy

          beforeEach(() => {
            getClassNameSpy = jest.spyOn(ValueGremlin.prototype, 'getClassName')

            renderFieldSpy = jest.spyOn(ValueGremlin.prototype, 'renderField')

            render(
              <ValueGremlin
                name='MOCK NAME'
                id='MOCK ID'
                defaultValue='MOCK DEFAULT VALUE'
                tabIndex={1}
                accessKey='MOCK ACCESS KEY'
                required
                disabled
                readOnly
                placeholder='MOCK PLACEHOLDER'
                fieldRef={MOCK_FIELD_REF}
                onChange={MOCK_ON_CHANGE}
              />
            )
          })

          it('invokes `getClassName`', () => {
            expect(getClassNameSpy)
              .toHaveBeenCalled()
          })

          it('invokes `renderField`', () => {
            expect(renderFieldSpy)
              .toHaveBeenCalled()
          })
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: element
            }
          } = render(
            <ValueGremlin
              name='MOCK NAME'
              id='MOCK ID'
              defaultValue='MOCK DEFAULT VALUE'
              tabIndex={1}
              accessKey='MOCK ACCESS KEY'
              required
              disabled
              readOnly
              placeholder='MOCK PLACEHOLDER'
              fieldRef={MOCK_FIELD_REF}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(element))
            .toMatchSnapshot()
        })
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      describe('Value is a string', () => {
        /**
         *  @type {undefined | Super<ValueProps>}
         */
        let instance

        beforeEach(() => {
          /**
           *  Always return false (we're not testing conditions in `super.shouldComponentUpdate()`)
           */
          jest.spyOn(Super.prototype, 'shouldComponentUpdate').mockReturnValue(false)

          const {
            container
          } = render(
            <ValueGremlin
              name='MOCK NAME'
              id='MOCK ID'
              value='MOCK VALUE'
            />
          )

          instance = getInstanceFromContainerElement(container)
        })

        describe('`props` have changed', () => {
          describe('Prop `value` has changed', () => {
            it('returns true', () => {
              expect(instance.shouldComponentUpdate({
                ...instance.props,
                value: 'MOCK CHANGED VALUE'
              }))
                .toBe(true)
            })
          })
        })

        describe('`props` have not changed', () => {
          it('returns false', () => {
            expect(instance.shouldComponentUpdate({ // instance.props
              ...instance.props
            }))
              .toBe(false)
          })
        })
      })

      describe('Default value is a string', () => {
        /**
         *  @type {undefined | Super<ValueProps>}
         */
        let instance

        beforeEach(() => {
          /**
           *  Always return false (we're not testing conditions in `super.shouldComponentUpdate()`)
           */
          jest.spyOn(Super.prototype, 'shouldComponentUpdate').mockReturnValue(false)

          const {
            container
          } = render(
            <ValueGremlin
              name='MOCK NAME'
              id='MOCK ID'
              defaultValue='MOCK DEFAULT VALUE'
            />
          )

          instance = getInstanceFromContainerElement(container)
        })

        describe('`props` have changed', () => {
          describe('Prop `defaultValue` has changed', () => {
            it('returns true', () => {
              expect(instance.shouldComponentUpdate({
                ...instance.props,
                defaultValue: 'MOCK CHANGED DEFAULT VALUE'
              }))
                .toBe(true)
            })
          })
        })

        describe('`props` have not changed', () => {
          it('returns false', () => {
            expect(instance.shouldComponentUpdate({ // instance.props
              ...instance.props
            }))
              .toBe(false)
          })
        })
      })
    })

    describe('`renderField()`', () => {
      it('invokes `getId`', () => {
        const {
          container
        } = render(
          <ValueGremlin
            name='MOCK NAME'
            id='MOCK ID'
            value='MOCK VALUE'
          />
        )

        const instance = getInstanceFromContainerElement(container)

        /**
         *  Spy (and mock the return value)
         */
        const getIdSpy = jest.spyOn(instance, 'getId').mockReturnValue('MOCK ID')

        instance.renderField()

        expect(getIdSpy)
          .toHaveBeenCalled()
      })
    })
  })

  describe('<CheckGremlin />', () => {
    const MOCK_FIELD_REF = { current: null }
    const MOCK_ON_CHANGE = jest.fn()

    describe('With required props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: gremlin
          }
        } = render(
          <CheckGremlin
            name='MOCK NAME'
            value='MOCK VALUE'
          />
        )

        expect(gremlin)
          .toBeInstanceOf(HTMLDivElement)
      })

      describe('Always', () => {
        /**
         *  @type {undefined | jest.SpyInstance}
         */
        let getClassNameSpy

        /**
         *  @type {undefined | jest.SpyInstance}
         */
        let renderFieldSpy

        beforeEach(() => {
          getClassNameSpy = jest.spyOn(CheckGremlin.prototype, 'getClassName')

          renderFieldSpy = jest.spyOn(CheckGremlin.prototype, 'renderField')

          render(
            <CheckGremlin
              name='MOCK NAME'
              value='MOCK VALUE'
            />
          )
        })

        it('invokes `getClassName`', () => {
          expect(getClassNameSpy)
            .toHaveBeenCalled()
        })

        it('invokes `renderField`', () => {
          expect(renderFieldSpy)
            .toHaveBeenCalled()
        })
      })

      it('matches the snapshot', () => {
        const {
          container: {
            firstElementChild: element
          }
        } = render(
          <CheckGremlin
            name='MOCK NAME'
            value='MOCK VALUE'
          />
        )

        expect(snapshotOf(element))
          .toMatchSnapshot()
      })
    })

    describe('With additional props', () => {
      describe('Checked is a boolean', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: gremlin
            }
          } = render(
            <CheckGremlin
              name='MOCK NAME'
              id='MOCK ID'
              value='MOCK VALUE'
              tabIndex={1}
              accessKey='MOCK ACCESS KEY'
              checked
              required
              disabled
              readOnly
              fieldRef={MOCK_FIELD_REF}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(gremlin)
            .toBeInstanceOf(HTMLDivElement)
        })

        describe('Always', () => {
          /**
           *  @type {undefined | jest.SpyInstance}
           */
          let getClassNameSpy

          /**
           *  @type {undefined | jest.SpyInstance}
           */
          let renderFieldSpy

          beforeEach(() => {
            getClassNameSpy = jest.spyOn(CheckGremlin.prototype, 'getClassName')

            renderFieldSpy = jest.spyOn(CheckGremlin.prototype, 'renderField')

            render(
              <CheckGremlin
                name='MOCK NAME'
                id='MOCK ID'
                value='MOCK VALUE'
                tabIndex={1}
                accessKey='MOCK ACCESS KEY'
                checked
                required
                disabled
                readOnly
                fieldRef={MOCK_FIELD_REF}
                onChange={MOCK_ON_CHANGE}
              />
            )
          })

          it('invokes `getClassName`', () => {
            expect(getClassNameSpy)
              .toHaveBeenCalled()
          })

          it('invokes `renderField`', () => {
            expect(renderFieldSpy)
              .toHaveBeenCalled()
          })
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: element
            }
          } = render(
            <CheckGremlin
              name='MOCK NAME'
              id='MOCK ID'
              value='MOCK VALUE'
              tabIndex={1}
              accessKey='MOCK ACCESS KEY'
              checked
              required
              disabled
              readOnly
              fieldRef={MOCK_FIELD_REF}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(element))
            .toMatchSnapshot()
        })
      })

      describe('Default checked is a boolean', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: gremlin
            }
          } = render(
            <CheckGremlin
              name='MOCK NAME'
              id='MOCK ID'
              value='MOCK VALUE'
              tabIndex={1}
              accessKey='MOCK ACCESS KEY'
              defaultChecked
              required
              disabled
              readOnly
              fieldRef={MOCK_FIELD_REF}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(gremlin)
            .toBeInstanceOf(HTMLDivElement)
        })

        describe('Always', () => {
          /**
           *  @type {undefined | jest.SpyInstance}
           */
          let getClassNameSpy

          /**
           *  @type {undefined | jest.SpyInstance}
           */
          let renderFieldSpy

          beforeEach(() => {
            getClassNameSpy = jest.spyOn(CheckGremlin.prototype, 'getClassName')

            renderFieldSpy = jest.spyOn(CheckGremlin.prototype, 'renderField')

            render(
              <CheckGremlin
                name='MOCK NAME'
                id='MOCK ID'
                value='MOCK VALUE'
                tabIndex={1}
                accessKey='MOCK ACCESS KEY'
                defaultChecked
                required
                disabled
                readOnly
                fieldRef={MOCK_FIELD_REF}
                onChange={MOCK_ON_CHANGE}
              />
            )
          })

          it('invokes `getClassName`', () => {
            expect(getClassNameSpy)
              .toHaveBeenCalled()
          })

          it('invokes `renderField`', () => {
            expect(renderFieldSpy)
              .toHaveBeenCalled()
          })
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: element
            }
          } = render(
            <CheckGremlin
              name='MOCK NAME'
              id='MOCK ID'
              value='MOCK VALUE'
              tabIndex={1}
              accessKey='MOCK ACCESS KEY'
              defaultChecked
              required
              disabled
              readOnly
              fieldRef={MOCK_FIELD_REF}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(element))
            .toMatchSnapshot()
        })
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      describe('Checked is a boolean', () => {
        /**
         *  @type {undefined | Super<CheckProps>}
         */
        let instance

        beforeEach(() => {
          /**
           *  Always return false (we're not testing conditions in `super.shouldComponentUpdate()`)
           */
          jest.spyOn(Super.prototype, 'shouldComponentUpdate').mockReturnValue(false)

          const {
            container
          } = render(
            <CheckGremlin
              name='MOCK NAME'
              id='MOCK ID'
              checked
            />
          )

          instance = getInstanceFromContainerElement(container)
        })

        describe('`props` have changed', () => {
          describe('Prop `checked` has changed', () => {
            it('returns true', () => {
              expect(instance.shouldComponentUpdate({
                ...instance.props,
                checked: false
              }))
                .toBe(true)
            })
          })
        })

        describe('`props` have not changed', () => {
          it('returns false', () => {
            expect(instance.shouldComponentUpdate({ // instance.props
              ...instance.props
            }))
              .toBe(false)
          })
        })
      })

      describe('Default checked is a boolean', () => {
        /**
         *  @type {undefined | Super<CheckProps>}
         */
        let instance

        beforeEach(() => {
          /**
           *  Always return false (we're not testing conditions in `super.shouldComponentUpdate()`)
           */
          jest.spyOn(Super.prototype, 'shouldComponentUpdate').mockReturnValue(false)

          const {
            container
          } = render(
            <CheckGremlin
              name='MOCK NAME'
              id='MOCK ID'
              defaultChecked
            />
          )

          instance = getInstanceFromContainerElement(container)
        })

        describe('`props` have changed', () => {
          describe('Prop `defaultChecked` has changed', () => {
            it('returns true', () => {
              expect(instance.shouldComponentUpdate({
                ...instance.props,
                defaultChecked: false
              }))
                .toBe(true)
            })
          })
        })

        describe('`props` have not changed', () => {
          it('returns false', () => {
            expect(instance.shouldComponentUpdate({ // instance.props
              ...instance.props
            }))
              .toBe(false)
          })
        })
      })
    })

    describe('`renderField()`', () => {
      it('invokes `getId`', () => {
        const {
          container
        } = render(
          <CheckGremlin
            name='MOCK NAME'
            id='MOCK ID'
            value='MOCK VALUE'
          />
        )

        const instance = getInstanceFromContainerElement(container)

        /**
         *  Spy (and mock the return value)
         */
        const getIdSpy = jest.spyOn(instance, 'getId').mockReturnValue('MOCK ID')

        instance.renderField()

        expect(getIdSpy)
          .toHaveBeenCalled()
      })
    })
  })
})

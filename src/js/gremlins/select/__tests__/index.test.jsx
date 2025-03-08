import React from 'react'
import classnames from 'classnames'

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
  ValueGremlin
} from '#gremlins/gremlins'

import Gremlin from '#gremlins/gremlins/select'

jest.mock('classnames', () => jest.fn().mockReturnValue('MOCK CLASSNAME'))

describe('#gremlins/gremlins/select', () => {
  describe('<Gremlin />', () => {
    const MOCK_FIELD_REF = { current: null }
    const MOCK_ON_CHANGE = jest.fn()

    describe('With required props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: gremlin
          }
        } = render(
          <Gremlin
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
          getClassNameSpy = jest.spyOn(Gremlin.prototype, 'getClassName')

          renderFieldSpy = jest.spyOn(Gremlin.prototype, 'renderField')

          render(
            <Gremlin
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
            firstElementChild: gremlin
          }
        } = render(
          <Gremlin
            name='MOCK NAME'
          />
        )

        expect(snapshotOf(gremlin))
          .toMatchSnapshot()
      })
    })

    describe('With additional props', () => {
      describe('Multiple is true', () => {
        describe('Value is an array', () => {
          it('renders', () => {
            const {
              container: {
                firstElementChild: gremlin
              }
            } = render(
              <Gremlin
                name='MOCK NAME'
                id='MOCK ID'
                value={['MOCK VALUE']}
                tabIndex={1}
                accessKey='MOCK ACCESS KEY'
                required
                disabled
                readOnly
                multiple
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
              getClassNameSpy = jest.spyOn(Gremlin.prototype, 'getClassName')

              renderFieldSpy = jest.spyOn(Gremlin.prototype, 'renderField')

              render(
                <Gremlin
                  name='MOCK NAME'
                  id='MOCK ID'
                  value={['MOCK VALUE']}
                  tabIndex={1}
                  accessKey='MOCK ACCESS KEY'
                  required
                  disabled
                  readOnly
                  multiple
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
                firstElementChild: gremlin
              }
            } = render(
              <Gremlin
                name='MOCK NAME'
                id='MOCK ID'
                value={['MOCK VALUE']}
                tabIndex={1}
                accessKey='MOCK ACCESS KEY'
                required
                disabled
                readOnly
                multiple
                fieldRef={MOCK_FIELD_REF}
                onChange={MOCK_ON_CHANGE}
              />
            )

            expect(snapshotOf(gremlin))
              .toMatchSnapshot()
          })
        })

        describe('Default value is an array', () => {
          it('renders', () => {
            const {
              container: {
                firstElementChild: gremlin
              }
            } = render(
              <Gremlin
                name='MOCK NAME'
                id='MOCK ID'
                defaultValue={['MOCK DEFAULT VALUE']}
                tabIndex={1}
                accessKey='MOCK ACCESS KEY'
                required
                disabled
                readOnly
                multiple
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
              getClassNameSpy = jest.spyOn(Gremlin.prototype, 'getClassName')

              renderFieldSpy = jest.spyOn(Gremlin.prototype, 'renderField')

              render(
                <Gremlin
                  name='MOCK NAME'
                  id='MOCK ID'
                  defaultValue={['MOCK DEFAULT VALUE']}
                  tabIndex={1}
                  accessKey='MOCK ACCESS KEY'
                  required
                  disabled
                  readOnly
                  multiple
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
                firstElementChild: gremlin
              }
            } = render(
              <Gremlin
                name='MOCK NAME'
                id='MOCK ID'
                defaultValue={['MOCK DEFAULT VALUE']}
                tabIndex={1}
                accessKey='MOCK ACCESS KEY'
                required
                disabled
                readOnly
                multiple
                fieldRef={MOCK_FIELD_REF}
                onChange={MOCK_ON_CHANGE}
              />
            )

            expect(snapshotOf(gremlin))
              .toMatchSnapshot()
          })
        })
      })

      describe('Multiple is not true', () => {
        describe('Value is a string', () => {
          it('renders', () => {
            const {
              container: {
                firstElementChild: gremlin
              }
            } = render(
              <Gremlin
                name='MOCK NAME'
                id='MOCK ID'
                value='MOCK VALUE'
                tabIndex={1}
                accessKey='MOCK ACCESS KEY'
                required
                disabled
                readOnly
                multiple={false}
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
              getClassNameSpy = jest.spyOn(Gremlin.prototype, 'getClassName')

              renderFieldSpy = jest.spyOn(Gremlin.prototype, 'renderField')

              render(
                <Gremlin
                  name='MOCK NAME'
                  id='MOCK ID'
                  value='MOCK VALUE'
                  tabIndex={1}
                  accessKey='MOCK ACCESS KEY'
                  required
                  disabled
                  readOnly
                  multiple={false}
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
                firstElementChild: gremlin
              }
            } = render(
              <Gremlin
                name='MOCK NAME'
                id='MOCK ID'
                value='MOCK VALUE'
                tabIndex={1}
                accessKey='MOCK ACCESS KEY'
                required
                disabled
                readOnly
                multiple={false}
                fieldRef={MOCK_FIELD_REF}
                onChange={MOCK_ON_CHANGE}
              />
            )

            expect(snapshotOf(gremlin))
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
              <Gremlin
                name='MOCK NAME'
                id='MOCK ID'
                defaultValue='MOCK DEFAULT VALUE'
                tabIndex={1}
                accessKey='MOCK ACCESS KEY'
                required
                disabled
                readOnly
                multiple={false}
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
              getClassNameSpy = jest.spyOn(Gremlin.prototype, 'getClassName')

              renderFieldSpy = jest.spyOn(Gremlin.prototype, 'renderField')

              render(
                <Gremlin
                  name='MOCK NAME'
                  id='MOCK ID'
                  defaultValue='MOCK DEFAULT VALUE'
                  tabIndex={1}
                  accessKey='MOCK ACCESS KEY'
                  required
                  disabled
                  readOnly
                  multiple={false}
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
                firstElementChild: gremlin
              }
            } = render(
              <Gremlin
                name='MOCK NAME'
                id='MOCK ID'
                defaultValue='MOCK DEFAULT VALUE'
                tabIndex={1}
                accessKey='MOCK ACCESS KEY'
                required
                disabled
                readOnly
                multiple={false}
                fieldRef={MOCK_FIELD_REF}
                onChange={MOCK_ON_CHANGE}
              />
            )
            expect(snapshotOf(gremlin))
              .toMatchSnapshot()
          })
        })
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      /**
       *  @type {string[]}
       */
      const MOCK_VALUE = []

      /**
       *  @type {undefined | Gremlin<CheckProps & CheckboxProps>}
       */
      let instance

      beforeEach(() => {
        /**
         *  Always return false (we're not testing conditions in `super.shouldComponentUpdate()`)
         */
        jest.spyOn(ValueGremlin.prototype, 'shouldComponentUpdate').mockReturnValue(false)

        const {
          container
        } = render(
          <Gremlin
            name='MOCK NAME'
            id='MOCK ID'
            value={MOCK_VALUE}
            tabIndex={1}
            accessKey='MOCK ACCESS KEY'
            required
            disabled
            readOnly
            multiple={false}
            fieldRef={MOCK_FIELD_REF}
            onChange={MOCK_ON_CHANGE}>
            MOCK CHILDREN
          </Gremlin>
        )

        instance = getInstanceFromContainerElement(container)
      })

      describe('`props` have changed', () => {
        describe('Prop `value` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              value: 'MOCK CHANGE VALUE'
            }))
              .toBe(true)
          })
        })

        describe('Prop `defaultValue` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              defaultValue: 'MOCK CHANGE DEFAULT VALUE'
            }))
              .toBe(true)
          })
        })

        describe('Prop `multiple` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              multiple: true
            }))
              .toBe(true)
          })
        })

        describe('Prop `children` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              children: 'MOCK CHANGE CHILDREN'
            }))
              .toBe(true)
          })
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          return expect(instance.shouldComponentUpdate({ // instance.props
            ...instance.props
          }))
            .toBe(false)
        })
      })
    })

    describe('`getClassName()`', () => {
      it('invokes `classnames`', () => {
        /**
         *  Ensure `super.getClassName()` returns a value
         */
        const getClassNameSpy = jest.spyOn(ValueGremlin.prototype, 'getClassName').mockReturnValue('MOCK CLASSNAME')

        const {
          container
        } = render(
          <Gremlin
            name='MOCK NAME'
          />
        )

        const instance = getInstanceFromContainerElement(container)

        /**
         *  Ensure it is reset after render
         */
        classnames.mockClear()

        /**
         *  Ensure it is reset after render
         */
        getClassNameSpy.mockClear()

        instance.getClassName()

        expect(classnames)
          .toHaveBeenCalledWith('MOCK CLASSNAME', 'select')
      })
    })

    describe('`handleChange()`', () => {
      describe('Multiple is true', () => {
        describe('Value is an array', () => {
          it('invokes `onChange`', () => {
            const {
              container
            } = render(
              <Gremlin
                name='MOCK NAME'
                value={['MOCK VALUE']}
                multiple
                onChange={MOCK_ON_CHANGE}
              />
            )

            const instance = getInstanceFromContainerElement(container)

            /**
             *  Ensure it is reset after render
             */
            MOCK_ON_CHANGE.mockClear()

            instance.handleChange(['MOCK CHANGED VALUE'])

            expect(MOCK_ON_CHANGE)
              .toHaveBeenCalledWith(['MOCK CHANGED VALUE'])
          })
        })

        describe('Default value is an array', () => {
          it('invokes `onChange`', () => {
            const {
              container
            } = render(
              <Gremlin
                name='MOCK NAME'
                defaultValue={['MOCK DEFAULT VALUE']}
                multiple
                onChange={MOCK_ON_CHANGE}
              />
            )

            const instance = getInstanceFromContainerElement(container)

            /**
             *  Ensure it is reset after render
             */
            MOCK_ON_CHANGE.mockClear()

            instance.handleChange(['MOCK CHANGED DEFAULT VALUE'])

            expect(MOCK_ON_CHANGE)
              .toHaveBeenCalledWith(['MOCK CHANGED DEFAULT VALUE'])
          })
        })
      })

      describe('Multiple is not true', () => {
        describe('Value is a string', () => {
          it('invokes `onChange`', () => {
            const {
              container
            } = render(
              <Gremlin
                name='MOCK NAME'
                value='MOCK VALUE'
                multiple={false}
                onChange={MOCK_ON_CHANGE}
              />
            )

            const instance = getInstanceFromContainerElement(container)

            /**
             *  Ensure it is reset after render
             */
            MOCK_ON_CHANGE.mockClear()

            instance.handleChange('MOCK CHANGED VALUE')

            expect(MOCK_ON_CHANGE)
              .toHaveBeenCalledWith('MOCK CHANGED VALUE')
          })
        })

        describe('Default value is a string', () => {
          it('invokes `onChange`', () => {
            const {
              container
            } = render(
              <Gremlin
                name='MOCK NAME'
                defaultValue='MOCK DEFAULT VALUE'
                multiple={false}
                onChange={MOCK_ON_CHANGE}
              />
            )

            const instance = getInstanceFromContainerElement(container)

            /**
             *  Ensure it is reset after render
             */
            MOCK_ON_CHANGE.mockClear()

            instance.handleChange('MOCK CHANGED DEFAULT VALUE')

            expect(MOCK_ON_CHANGE)
              .toHaveBeenCalledWith('MOCK CHANGED DEFAULT VALUE')
          })
        })
      })
    })

    describe('`renderField()`', () => {
      it('invokes `getId`', () => {
        const {
          container
        } = render(
          <Gremlin
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

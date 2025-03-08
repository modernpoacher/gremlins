/**
 *  @typedef {GremlinsTypes.Super.Gremlins.FieldGremlinProps} FieldGremlinProps
 *  @typedef {GremlinsTypes.Super.Gremlins.GroupGremlinProps} GroupGremlinProps
 */

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
  FieldGremlin,
  GroupGremlin
} from '#gremlins/super/gremlins'

jest.mock('classnames', () => jest.fn().mockReturnValue('MOCK CLASSNAME'))

describe('#gremlins/super/gremlins', () => {
  describe('<FieldGremlin />', () => {
    const MOCK_FIELD_REF = { current: null }
    const MOCK_ON_CHANGE = jest.fn()

    describe('With required props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: gremlin
          }
        } = render(
          <FieldGremlin
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
          getClassNameSpy = jest.spyOn(FieldGremlin.prototype, 'getClassName')

          renderFieldSpy = jest.spyOn(FieldGremlin.prototype, 'renderField')

          render(
            <FieldGremlin
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
          <FieldGremlin
            name='MOCK NAME'
          />
        )

        expect(snapshotOf(gremlin))
          .toMatchSnapshot()
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: gremlin
          }
        } = render(
          <FieldGremlin
            name='MOCK NAME'
            id='MOCK ID'
            value='MOCK VALUE'
            tabIndex={1}
            accessKey='MOCK ACCESS KEY'
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
          getClassNameSpy = jest.spyOn(FieldGremlin.prototype, 'getClassName')

          renderFieldSpy = jest.spyOn(FieldGremlin.prototype, 'renderField')

          render(
            <FieldGremlin
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
            firstElementChild: gremlin
          }
        } = render(
          <FieldGremlin
            name='MOCK NAME'
            id='MOCK ID'
            value='MOCK VALUE'
            tabIndex={1}
            accessKey='MOCK ACCESS KEY'
            required
            disabled
            readOnly
            fieldRef={MOCK_FIELD_REF}
            onChange={MOCK_ON_CHANGE}
          />
        )

        expect(snapshotOf(gremlin))
          .toMatchSnapshot()
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      /**
       *  @type {undefined | FieldGremlin<GremlinProps>}
       */
      let instance

      beforeEach(() => {
        const {
          container
        } = render(
          <FieldGremlin
            name='MOCK NAME'
            id='MOCK ID'
            value='MOCK VALUE'
            tabIndex={1}
            accessKey='MOCK ACCESS KEY'
            required
            disabled
            readOnly
            fieldRef={MOCK_FIELD_REF}
            onChange={MOCK_ON_CHANGE}
          />
        )

        instance = getInstanceFromContainerElement(container)
      })

      describe('`props` have changed', () => {
        describe('Prop `name` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              name: 'MOCK CHANGE NAME'
            }))
              .toBe(true)
          })
        })

        describe('Prop `id` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              id: 'MOCK CHANGE ID'
            }))
              .toBe(true)
          })
        })

        describe('Prop `value` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              value: 'MOCK CHANGE VALUE'
            }))
              .toBe(true)
          })
        })

        describe('Prop `required` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              required: false
            }))
              .toBe(true)
          })
        })

        describe('Prop `disabled` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              disabled: false
            }))
              .toBe(true)
          })
        })

        describe('Prop `readOnly` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              readOnly: false
            }))
              .toBe(true)
          })
        })

        describe('Prop `tabIndex` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              tabIndex: 0
            }))
              .toBe(true)
          })
        })

        describe('Prop `accessKey` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              accessKey: 'MOCK CHANGE ACCESS KEY'
            }))
              .toBe(true)
          })
        })

        describe('Prop `placeholder` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              placeholder: 'MOCK CHANGE PLACEHOLDER'
            }))
              .toBe(true)
          })
        })

        describe('Prop `onChange` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              onChange: jest.fn()
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

    describe('`getClassName()`', () => {
      it('invokes `classnames`', () => {
        const {
          container
        } = render(
          <FieldGremlin
            name='MOCK NAME'
          />
        )

        const instance = getInstanceFromContainerElement(container)

        /**
         *  Ensure it is reset after render
         */
        classnames.mockClear()

        instance.getClassName()

        expect(classnames)
          .toHaveBeenCalledWith('gremlin', { required: false, disabled: false, readOnly: false })
      })
    })

    describe('`renderField()`', () => {
      it('invokes `getId`', () => {
        const {
          container
        } = render(
          <FieldGremlin
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

  describe('<GroupGremlin />', () => {
    describe('With required props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: gremlin
          }
        } = render(
          <GroupGremlin />
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
        let renderGroupSpy

        beforeEach(() => {
          getClassNameSpy = jest.spyOn(GroupGremlin.prototype, 'getClassName')

          renderGroupSpy = jest.spyOn(GroupGremlin.prototype, 'renderGroup')

          render(
            <GroupGremlin />
          )
        })

        it('invokes `getClassName`', () => {
          expect(getClassNameSpy)
            .toHaveBeenCalled()
        })

        it('invokes `renderGroup`', () => {
          expect(renderGroupSpy)
            .toHaveBeenCalled()
        })
      })

      it('matches the snapshot', () => {
        const {
          container: {
            firstElementChild: sprocket
          }
        } = render(
          <GroupGremlin />
        )

        expect(snapshotOf(sprocket))
          .toMatchSnapshot()
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: sprocket
          }
        } = render(
          <GroupGremlin>
            MOCK CHILDREN
          </GroupGremlin>
        )

        expect(sprocket)
          .toBeInstanceOf(HTMLDivElement)
      })

      it('matches the snapshot', () => {
        const {
          container: {
            firstElementChild: sprocket
          }
        } = render(
          <GroupGremlin>
            MOCK CHILDREN
          </GroupGremlin>
        )

        expect(snapshotOf(sprocket))
          .toMatchSnapshot()
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      /**
       *  @type {undefined | GroupGremlin<GroupGremlinProps>}
       */
      let instance

      beforeEach(() => {
        const {
          container
        } = render(
          <GroupGremlin>
            MOCK CHILDREN
          </GroupGremlin>
        )

        instance = getInstanceFromContainerElement(container)
      })

      describe('`props` have changed', () => {
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
          expect(instance.shouldComponentUpdate({ // instance.props
            ...instance.props
          }))
            .toBe(false)
        })
      })
    })

    describe('`getClassName()`', () => {
      it('returns a string', () => {
        const {
          container
        } = render(
          <GroupGremlin>
            MOCK CHILDREN
          </GroupGremlin>
        )

        const instance = getInstanceFromContainerElement(container)

        expect(instance.getClassName())
          .toEqual(expect.any(String))
      })
    })
  })
})

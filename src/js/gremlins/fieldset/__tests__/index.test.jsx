import React from 'react'
import {
  snapshotOf
} from 'react-component-snapshot'
import classnames from 'classnames'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import {
  getInstanceFromContainerElement
} from 'react-component-instance'

import {
  GroupGremlin as Super
} from '#gremlins/super/gremlins'

import Gremlin from '#gremlins/gremlins/fieldset'

jest.mock('classnames', () => jest.fn().mockReturnValue('MOCK CLASSNAME'))

describe('#gremlins/gremlins/fieldset', () => {
  describe('<Gremlin />', () => {
    describe('With required props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: sprocket
          }
        } = render(
          <Gremlin />
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
          <Gremlin />
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
          <Gremlin>
            MOCK CHILDREN
          </Gremlin>
        )

        expect(sprocket)
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
          getClassNameSpy = jest.spyOn(Gremlin.prototype, 'getClassName')

          renderGroupSpy = jest.spyOn(Gremlin.prototype, 'renderGroup')

          render(
            <Gremlin />
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
          <Gremlin>
            MOCK CHILDREN
          </Gremlin>
        )

        expect(snapshotOf(sprocket))
          .toMatchSnapshot()
      })
    })

    describe('`getClassName()`', () => {
      it('invokes `classnames`', () => {
        /**
         *  Ensure `super.getClassName()` returns a value
         */
        const getClassNameSpy = jest.spyOn(Super.prototype, 'getClassName').mockReturnValue('MOCK CLASSNAME')

        const {
          container
        } = render(
          <Gremlin />
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
          .toHaveBeenCalledWith('MOCK CLASSNAME', 'fieldset')
      })
    })
  })
})

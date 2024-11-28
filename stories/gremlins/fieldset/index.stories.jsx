import React from 'react'

import FieldsetGremlin from '@modernpoacher/gremlins/gremlins/fieldset'

import CheckboxGremlin from '@modernpoacher/gremlins/gremlins/checkbox'
import CheckboxState from '#stories/state/checkbox'

import EmailGremlin from '@modernpoacher/gremlins/gremlins/email'
import EmailState from '#stories/state/email'

import NumberGremlin from '@modernpoacher/gremlins/gremlins/number'
import NumberState from '#stories/state/number'

import PasswordGremlin from '@modernpoacher/gremlins/gremlins/password'
import PasswordState from '#stories/state/password'

import RadioGremlin from '@modernpoacher/gremlins/gremlins/radio'
import RadioState from '#stories/state/radio'

import SelectGremlin from '@modernpoacher/gremlins/gremlins/select'
import SelectState from '#stories/state/select'

import TextGremlin from '@modernpoacher/gremlins/gremlins/text'
import TextState from '#stories/state/text'

import TextareaGremlin from '@modernpoacher/gremlins/gremlins/textarea'
import TextareaState from '#stories/state/textarea'

export default {
  title: 'Stories/Gremlins/Fieldset',
  component: FieldsetGremlin
}

export function Default () {
  return (
    <FieldsetGremlin>
      <CheckboxState checked>
        <CheckboxGremlin
          id='checkbox'
          name='checkbox'
          value='value'
        />
      </CheckboxState>
      <EmailState value='email@email.com'>
        <EmailGremlin
          id='email'
          name='email'
        />
      </EmailState>
      <NumberState value={1}>
        <NumberGremlin
          id='number'
          name='number'
        />
      </NumberState>
      <PasswordState value='password'>
        <PasswordGremlin
          id='password'
          name='password'
        />
      </PasswordState>
      <RadioState value='two'>
        <RadioGremlin
          id='radio-1'
          name='radio'
          value='one'
        />
        <RadioGremlin
          id='radio-2'
          name='radio'
          value='two'
        />
        <RadioGremlin
          id='radio-3'
          name='radio'
          value='three'
        />
      </RadioState>
      <SelectState value='one'>
        <SelectGremlin
          id='select'
          name='select'>
          <option value='one'>One</option>
          <option value='two'>Two</option>
          <option value='three'>Three</option>
        </SelectGremlin>
      </SelectState>
      <TextState value='Value'>
        <TextGremlin
          id='text'
          name='text'
        />
      </TextState>
      <TextareaState value='Value'>
        <TextareaGremlin
          id='textarea'
          name='textarea'
        />
      </TextareaState>
    </FieldsetGremlin>
  )
}

export function NoFields () {
  return (
    <FieldsetGremlin />
  )
}

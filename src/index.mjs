import debug from 'debug'

import CheckboxGremlin from './gremlins/checkbox/index.cjs'
import EmailGremlin from './gremlins/email/index.cjs'
import NumberGremlin from './gremlins/number/index.cjs'
import PasswordGremlin from './gremlins/password/index.cjs'
import RadioGremlin from './gremlins/radio/index.cjs'
import SelectGremlin from './gremlins/select/index.cjs'
import TextGremlin from './gremlins/text/index.cjs'
import TextareaGremlin from './gremlins/textarea/index.cjs'

const log = debug('@modernpoacher/gremlins')

log('`gremlins` is awake')

export { default as CheckboxGremlin } from './gremlins/checkbox/index.cjs'
export { default as EmailGremlin } from './gremlins/email/index.cjs'
export { default as NumberGremlin } from './gremlins/number/index.cjs'
export { default as PasswordGremlin } from './gremlins/password/index.cjs'
export { default as RadioGremlin } from './gremlins/radio/index.cjs'
export { default as SelectGremlin } from './gremlins/select/index.cjs'
export { default as TextGremlin } from './gremlins/text/index.cjs'
export { default as TextareaGremlin } from './gremlins/textarea/index.cjs'

export default {
  CheckboxGremlin,
  EmailGremlin,
  NumberGremlin,
  PasswordGremlin,
  RadioGremlin,
  SelectGremlin,
  TextGremlin,
  TextareaGremlin
}

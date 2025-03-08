require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/sprockets|@modernpoacher\/gremlins)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/gremlins')

log('`gremlins` is awake')

const CheckboxGremlin = require('./gremlins/checkbox/index.cjs')
const EmailGremlin = require('./gremlins/email/index.cjs')
const NumberGremlin = require('./gremlins/number/index.cjs')
const PasswordGremlin = require('./gremlins/password/index.cjs')
const RadioGremlin = require('./gremlins/radio/index.cjs')
const SelectGremlin = require('./gremlins/select/index.cjs')
const TextGremlin = require('./gremlins/text/index.cjs')
const TextareaGremlin = require('./gremlins/textarea/index.cjs')
const FieldsetGremlin = require('./gremlins/fieldset/index.cjs')

module.exports.CheckboxGremlin = CheckboxGremlin
module.exports.EmailGremlin = EmailGremlin
module.exports.NumberGremlin = NumberGremlin
module.exports.PasswordGremlin = PasswordGremlin
module.exports.RadioGremlin = RadioGremlin
module.exports.SelectGremlin = SelectGremlin
module.exports.TextGremlin = TextGremlin
module.exports.TextareaGremlin = TextareaGremlin
module.exports.FieldsetGremlin = FieldsetGremlin

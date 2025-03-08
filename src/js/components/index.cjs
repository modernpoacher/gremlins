require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/sprockets|@modernpoacher\/gremlins)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/gremlins/components')

log('`gremlins` is awake')

const {
  ValueField,
  CheckField,
  toInputValue
} = require('./field/index.jsx')

module.exports.Field = {
  ValueField,
  CheckField,
  toInputValue
}

const {
  default: Group
} = require('./group/index.jsx')

module.exports.Group = Group

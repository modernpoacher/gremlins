require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/sprockets|@modernpoacher\/gremlins)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/gremlins/super/components')

log('`gremlins` is awake')

const {
  default: Field
} = require('./field/index.jsx')

module.exports.Field = Field

const {
  default: Group
} = require('./group/index.jsx')

module.exports.Group = Group

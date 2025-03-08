require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/sprockets|@modernpoacher\/gremlins)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/gremlins/gremlins/select/field')

log('`gremlins` is awake')

const {
  default: Field
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Field

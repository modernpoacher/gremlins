require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/sprockets|@modernpoacher\/gremlins)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/gremlins/gremlins/email')

log('`gremlins` is awake')

const {
  default: Email
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Email

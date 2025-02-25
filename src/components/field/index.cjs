require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/sprockets|@modernpoacher\/gremlins)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/gremlins/components/field')

log('`gremlins` is awake')

/**
 *  Exports default, etc
 */
module.exports = require('./index.jsx')

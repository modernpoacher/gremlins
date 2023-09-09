require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/gremlins|@modernpoacher\/sprockets)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/gremlins/gremlins')

log('`gremlins` is awake')

/**
 *  Has default export, etc
 */
module.exports = require('./index.jsx')

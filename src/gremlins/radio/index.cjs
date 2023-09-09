require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/gremlins|@modernpoacher\/sprockets)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/gremlins/gremlins/radio')

log('`gremlins` is awake')

const {
  default: component
} = require('./index.jsx')

module.exports = component

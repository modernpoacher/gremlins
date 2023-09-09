require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/sprockets)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/sprockets/components/group')

log('`sprockets` is awake')

const {
  default: component
} = require('./index.jsx')

module.exports = component

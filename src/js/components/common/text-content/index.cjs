require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/sprockets|@modernpoacher\/gremlins)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/gremlins/components/common/text-content')

log('`gremlins` is awake')

const {
  default: TextComponent
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = TextComponent

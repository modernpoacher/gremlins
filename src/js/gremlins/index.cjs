require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/sprockets|@modernpoacher\/gremlins)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/gremlins/gremlins')

log('`gremlins` is awake')

const {
  ValueGremlin,
  CheckGremlin,
  toInputValue
} = require('./index.jsx')

module.exports.ValueGremlin = ValueGremlin
module.exports.CheckGremlin = CheckGremlin
module.exports.toInputValue = toInputValue

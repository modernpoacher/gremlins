require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/sprockets|@modernpoacher\/gremlins)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/gremlins/super/gremlins')

log('`gremlins` is awake')

const {
  FieldGremlin,
  GroupGremlin
} = require('./index.jsx')

/**
 *  Exports `FieldGremlin` and `GroupGremlin`
 */
module.exports.FieldGremlin = FieldGremlin
module.exports.GroupGremlin = GroupGremlin

const debug = require('debug')

const log = debug('@modernpoacher/gremlins')

const {
  env: {
    NODE_ENV = 'development'
  }
} = process

log('`gremlins` is awake')

function env () {
  log({ NODE_ENV })

  return (
    NODE_ENV === 'production'
  )
}

const presets = [
  [
    '@babel/env', {
      targets: {
        node: 'current',
        browsers: [
          'last 4 versions',
          'safari >= 9',
          'ios >= 8',
          'ie >= 9',
          '> 2%'
        ]
      },
      useBuiltIns: 'usage',
      corejs: 3
    }
  ],
  '@babel/react'
]

const plugins = [
  '@babel/syntax-jsx',
  '@babel/proposal-export-default-from',
  '@babel/proposal-export-namespace-from',
  [
    '@babel/proposal-class-properties',
    {
      loose: false
    }
  ],
  [
    'module-resolver', {
      alias: {
        /**
         *  Storybook
         */
        '@modernpoacher/gremlins/gremlins/checkbox/field': './src/gremlins/checkbox/field/index.jsx',
        '@modernpoacher/gremlins/gremlins/checkbox': './src/gremlins/checkbox/index.jsx',
        '@modernpoacher/gremlins/gremlins/email/field': './src/gremlins/email/field/index.jsx',
        '@modernpoacher/gremlins/gremlins/email': './src/gremlins/email/index.jsx',
        '@modernpoacher/gremlins/gremlins/number/field': './src/gremlins/number/field/index.jsx',
        '@modernpoacher/gremlins/gremlins/number': './src/gremlins/number/index.jsx',
        '@modernpoacher/gremlins/gremlins/password/field': './src/gremlins/password/field/index.jsx',
        '@modernpoacher/gremlins/gremlins/password': './src/gremlins/password/index.jsx',
        '@modernpoacher/gremlins/gremlins/radio/field': './src/gremlins/radio/field/index.jsx',
        '@modernpoacher/gremlins/gremlins/radio': './src/gremlins/radio/index.jsx',
        '@modernpoacher/gremlins/gremlins/select/field': './src/gremlins/select/field/index.jsx',
        '@modernpoacher/gremlins/gremlins/select': './src/gremlins/select/index.jsx',
        '@modernpoacher/gremlins/gremlins/text/field': './src/gremlins/text/field/index.jsx',
        '@modernpoacher/gremlins/gremlins/text': './src/gremlins/text/index.jsx',
        '@modernpoacher/gremlins/gremlins/textarea/field': './src/gremlins/textarea/field/index.jsx',
        '@modernpoacher/gremlins/gremlins/textarea': './src/gremlins/textarea/index.jsx',
        '@modernpoacher/gremlins/gremlins/fieldset/group': './src/gremlins/fieldset/group/index.jsx',
        '@modernpoacher/gremlins/gremlins/fieldset': './src/gremlins/fieldset/index.jsx',
        '@modernpoacher/gremlins/gremlins': './src/gremlins/index.jsx',
        '@modernpoacher/gremlins/components/common/disabled': './src/components/common/disabled/index.jsx',
        '@modernpoacher/gremlins/components/common/readonly': './src/components/common/readonly/index.jsx',
        '@modernpoacher/gremlins/components/common/required': './src/components/common/required/index.jsx',
        '@modernpoacher/gremlins/components/common/text-content': './src/components/common/text-content/index.jsx',
        '@modernpoacher/gremlins/components/field': './src/components/field/index.jsx',
        '#stories/state/checkbox': './stories/state/checkbox/index.jsx',
        '#stories/state/email': './stories/state/email/index.jsx',
        '#stories/state/number': './stories/state/number/index.jsx',
        '#stories/state/password': './stories/state/password/index.jsx',
        '#stories/state/radio': './stories/state/radio/index.jsx',
        '#stories/state/select': './stories/state/select/index.jsx',
        '#stories/state/text': './stories/state/text/index.jsx',
        '#stories/state/textarea': './stories/state/textarea/index.jsx',
        '#stories/state': './stories/state/index.jsx',
        '#stories': './stories'
      }
    }
  ]
]

module.exports = (api) => {
  if (api) api.cache.using(env)

  return {
    presets,
    plugins,
    ignore: [
      /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/gremlins|@modernpoacher\/sprockets)/
    ]
  }
}

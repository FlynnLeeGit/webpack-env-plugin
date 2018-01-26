##  WebpackEnvPlugin 
### emit a `env.json` by own env variables

install
```shell
yarn add webpack-env-plugin
# or
npm install webpack-env-plugin
```

use
```js
const EnvPlugin = require('webpack-env-plugin')
// webpack.config.js
{
  plugins:[
    new EnvPlugin({
      filename:'env.json', // default env.json
      env:{
        a:1,
        b:2
      },
      verbose:true // default:true
    })
  ]
}
```

it will produce a env.json in your dist folder
env.json
```json
{
  "a": 1,
  "b": 2
}

```
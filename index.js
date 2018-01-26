const EnvPlugin = class {
  constructor(config) {
    this.config = Object.assign(
      {
        filename: 'env.json',
        env: {},
        verbose: true
      },
      config
    )
  }
  apply(compiler) {
    let writed = false
    compiler.plugin('emit', (compilation, callback) => {
      if (!writed) {
        const json = JSON.stringify(this.config.env, null, 2)
        if (this.config.verbose) {
          console.log(
            '\n',
            `[EnvPlugin] inject [${this.config.filename}]`,
            '\n',
            `[EnvPlugin] env is ${JSON.stringify(this.config.env, null, 2)}`
          )
        }
        compilation.assets[this.config.filename] = {
          source() {
            return json
          },
          size() {
            return json.length
          }
        }
        writed = true
      }
      callback()
    })
  }
}

module.exports = EnvPlugin

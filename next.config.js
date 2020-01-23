const path = require('path')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  target: 'serverless',
  assetPrefix: isProd ? '/_docs' : '',
  webpack (config) {
    config.resolve.modules.push(path.resolve('./'))
    return config
  }
}

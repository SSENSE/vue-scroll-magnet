const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const base = require('./webpack.base.conf')

var config = Object.assign({}, base)

config.output.filename = 'vue-scroll-magnet.min.js'

config.plugins = (config.plugins || []).concat([
  new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      sourceMap: false
  }),
  new CopyWebpackPlugin([
    { from: './src/ScrollMagnetContainer.vue' },
    { from: './src/ScrollMagnetItem.vue' }
  ]),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  })
])

module.exports = config
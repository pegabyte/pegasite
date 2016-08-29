import webpack from 'webpack'
import defaultConfig from './webpack.defaults'

module.exports = {
  ...defaultConfig,
  devtool: 'eval',
  cache: true,
  entry: {
    ...defaultConfig.entry,
    application: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?/sockjs-node/',
      ...defaultConfig.entry.application,
    ],
  },
  plugins: [
    ...defaultConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
  ],
}

import http from 'http'
import path from 'path'
import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import babelConfig from '../../webpack.config.babel'

const DIRNAME = path.dirname(require.main.filename)

const config = {
  devtool: 'eval',
  contentBase: path.join(DIRNAME, 'public'),
  publicPath: babelConfig.output.publicPath,
  historyApiFallback: false,
  progress: true,
  colors: true,
  profile: true,
}

export default () => (
  function devConfigure(appInput) {
    const app = appInput
    const appServer = http.createServer(app)
    const devServer = new WebpackDevServer(webpack(babelConfig), config)
    devServer.listeningApp = appServer
    app.listen = devServer.listen.bind(devServer)
    app.use(devServer.app)
  }
)

import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

const SRC_DIR = path.join(__dirname, 'src')

const sassResources = path.join(SRC_DIR, 'styles', 'resources.scss')

const CSSPlugin = new ExtractTextPlugin('application.css', {
  allChunks: true,
})

const output = {
  filename: '[name].js',
  path: path.join(__dirname, 'dist'),
  publicPath: '/',
}

const entry = {
  application: [
    './src/index',
  ],
}

const resolve = {
  extensions: ['', '.js', '.jsx'],
  alias: {
    'spectre.css': 'spectre.css/dist/spectre.css',
  },
}

const plugins = [
  new CopyWebpackPlugin([{
    from: './public/',
    to: './',
  }]),
  CSSPlugin,
  new webpack.EnvironmentPlugin([
    'NODE_ENV',
  ]),
]

const loaders = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel?cacheDirectory',
    include: [SRC_DIR],
    query: {
      presets: ['es2015', 'stage-0', 'react'],
      plugins: [
        ['transform-runtime', {
          polyfill: true,
          regenerator: true,
        }],
      ],
    },
  },
  {
    test: /\.json$/,
    exclude: /(node_modules|bower_components)/,
    loaders: ['json'],
  },
  {
    test: /\.s(a|c)ss$/,
    loader: CSSPlugin.extract(
    'style?sourceMap',
    [
      'css?modules&importLoaders=1',
      'resolve-url',
      'sass',
      'sass-resources',
    ].join('!')),
  },
  {
    test: /\.css$/,
    loader: CSSPlugin.extract('style', ['css']),
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file',
  },
  {
    test: /\.(woff|woff2)(\?.+)?$/,
    loader: 'url?prefix=font/&limit=10000',
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url?limit=10000&mimetype=application/octet-stream',
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url?limit=10000&mimetype=image/svg+xml',
  },
  {
    test: /\.txt$/,
    loader: 'raw',
  },
  {
    test: /\.gif/,
    loader: 'url-loader?limit=10000&mimetype=image/gif',
  },
  {
    test: /\.md$/,
    loader: 'html!markdown',
  },
  {
    test: /\.jpg/,
    loader: 'url-loader?limit=10000&mimetype=image/jpg',
  },
  {
    test: /\.png/,
    loader: 'url-loader?limit=10000&mimetype=image/png',
  },
  {
    test: /\.svg/,
    loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
  },
  {
    test: /\.ico/,
    loader: 'url-loader?limit=10000&mimetype=image/icon',
  },
]

export default {
  entry,
  sassResources,
  module: {
    loaders,
  },
  resolve,
  output,
  plugins,
}

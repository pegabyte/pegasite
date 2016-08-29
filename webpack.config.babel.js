module.exports = (function () {
  const env = process.env.NODE_ENV || 'development'
  switch (env) {
    case 'production':
      return require('./webpack.config.production')
    default:
      return require('./webpack.config.development')
  }
}())

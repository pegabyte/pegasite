import fs from 'fs'
import path from 'path'

const ENV_PREFIX = 'PEGA'

export default function configureApp(env = undefined, dir = '../../config') {
  let queued = Object.create(null)
  const DIRNAME = path.dirname(require.main.filename)
  const LOADENV = env || process.env.NODE_ENV || 'dev'
  const loadPath = path.resolve(DIRNAME, dir, `${LOADENV}.json`)

  try {
    const config = JSON.parse(fs.readFileSync(loadPath))

    if (LOADENV === 'dev') {
      queued.development = true
    }

    // Extend process.env
    Object.keys(process.env).forEach(key => {
      if (key.indexOf(`${ENV_PREFIX}_`) === 0) {
        queued[key.substr(ENV_PREFIX.length + 1).toLowerCase()] = process.env[key]
      }
    })

    Object.keys(config).forEach(key => {
      const pKey = `${ENV_PREFIX}_${key.toUpperCase()}`
      if (!(pKey in process.env)) {
        process.env[pKey] = config[key]
        queued[key.toLowerCase()] = config[key]
      }
    })
  } catch (e) {
    /* eslint-disable no-console */
    console.log('Failed to load config file:', loadPath)
    console.log(e)
    /* eslint-enable no-console */
  }

  return function applyConfig(app) {
    if (queued !== undefined) {
      Object.keys(queued).forEach(key => app.set(key, queued[key]))
      queued = undefined
    }
    return app
  }
}

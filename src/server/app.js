import { resolve } from 'path'
import express from 'express'
import configureApp from '../utils/configureApp'
import routes from './routes'

const app = configureApp()(express())

if (app.get('development')) {
  require('./dev').default(app)
} else {
  const dist = resolve(__dirname, '../../dist')
  app.use('/', express.static(dist))
  routes(app)
}


export default app

import { resolve } from 'path'
import routes from '../data/routes.json'

function render(req, res) {
  const OUTDIR = req.app.get('development')
    ? '../../public/'
    : '../../dist/'

  res.sendFile(resolve(__dirname, `${OUTDIR}index.html`))
}

export default function configureRoutes(app) {
  routes.forEach(route => {
    app.use(`/${route}`, render)
  })
}

import React from 'react'
import { Router as ReactRouter, browserHistory } from 'react-router'
import routes from '../routes'

export default () => (
  <ReactRouter onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    {routes()}
  </ReactRouter>
)

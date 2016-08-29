import React from 'react'
import App from '../containers/App'
import { IndexRoute, Route } from 'react-router'

import HomeRoute from './HomeRoute'
import PressRoute from './PressRoute'
import TeamsRoute from './TeamsRoute'
import LegalRoute from './LegalRoute'
import CareersRoute from './CareersRoute'
import CareersIndexRoute from './CareersIndexRoute'
import CareersItemRoute from './CareersItemRoute'
import ContactRoute from './ContactRoute'

export default () => (
  <Route path="/" component={App}>
    <IndexRoute component={HomeRoute} />
    <Route path="/legal" component={LegalRoute} />
    <Route path="/press" component={PressRoute} />
    <Route path="/teams" component={TeamsRoute} />
    <Route path="/careers" component={CareersRoute}>
      <IndexRoute component={CareersIndexRoute} />
      <Route path="/careers/:item" component={CareersItemRoute} />
    </Route>
    <Route path="/consultation" component={ContactRoute} />
  </Route>
)

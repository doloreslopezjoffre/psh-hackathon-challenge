import React from 'react'

import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { AuthRoute, GuestRoute } from 'use-eazy-auth/routes'

import Login from '@pages/Login'

import Developers from '@pages/Developers'
import Hackathons from '@pages/Hackathons'
import Hackathon from '@pages/HackathonDevs'

const Routes = () => (
  <Router>
    <Switch>
      <GuestRoute path="/login" redirectTo="/">
        <Login />
      </GuestRoute>

      <AuthRoute path="/hackathons" redirectTo="/login" component={Hackathons} />
      <AuthRoute path="/hackathons/:id" redirectTo="/login" component={Hackathon} />
      <AuthRoute path="/developers" redirectTo="/login" component={Developers} />

      <Redirect to="/hackathons" />
    </Switch>
  </Router>
)

export default Routes

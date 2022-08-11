import React from 'react'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { AuthRoute, GuestRoute } from 'use-eazy-auth/routes'

import Login from '@pages/Login'

import Developers from '@pages/Developers'
import Hackathons from '@pages/Hackathons'

const Routes = () => (
  <Router>
    <Switch>
      <GuestRoute path="/login" redirectTo="/">
        <Login />
      </GuestRoute>
      <Route path="/hackathons">
        <Hackathons />
      </Route>
      <AuthRoute path="/devs" redirectTo="/login">
        <Developers />
      </AuthRoute>
      <Redirect to="/hackathons" />
    </Switch>
  </Router>
)

export default Routes

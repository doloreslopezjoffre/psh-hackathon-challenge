import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import Auth from 'use-eazy-auth'
import { AuthRoute, GuestRoute } from 'use-eazy-auth/routes'

import { Login } from '@pages/Login'
import { login, me, refresh } from '@services/auth'

import { Home } from '@pages/Home'

const App: React.FC = (props) => {
  return (
    <>
      <Auth loginCall={login} meCall={me} refreshTokenCall={refresh}>
        <Router>
          <Switch>
            <GuestRoute path="/login" redirectTo="/">
              <Login />
            </GuestRoute>
            <AuthRoute path="/" redirectTo="/login">
              <Home />
            </AuthRoute>
          </Switch>
        </Router>
      </Auth>
    </>
  )
}

export default App

import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Auth from 'use-eazy-auth'
import { AuthRoute, GuestRoute } from 'use-eazy-auth/routes'

import Login from '@pages/Login'
import { login, me, refresh, logout } from '@services/auth'

import Developers from '@pages/Developers'
import Hackathons from '@pages/Hackathons'

import { Navbar } from '@components/Navbar'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App: React.FC = (props) => {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
      <Auth loginCall={login} meCall={me} refreshTokenCall={refresh} onLogout={logout}>
        <Navbar />
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
      </Auth>
    </>
  )
}

export default App

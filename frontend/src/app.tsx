import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Auth from 'use-eazy-auth'
import { AuthRoute, GuestRoute } from 'use-eazy-auth/routes'

import Login from '@pages/Login'
import { login, me, refresh, logout } from '@services/auth'

import Developers from '@pages/Developers'
import Hackathons from '@pages/Hackathons'

import { Navbar } from '@components/Navbar'
import { Layout } from '@components/Layout'

import 'dayjs/locale/en'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import dayjs from 'dayjs'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// eslint-disable-next-line import/no-named-as-default-member
dayjs.locale('en')
// eslint-disable-next-line import/no-named-as-default-member
dayjs.extend(LocalizedFormat)

const App: React.FC = () => {
  return (
    <div className="to-white">
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
        <Layout>
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
        </Layout>
      </Auth>
    </div>
  )
}

export default App

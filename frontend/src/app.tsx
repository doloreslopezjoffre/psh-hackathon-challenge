/* eslint-disable import/no-named-as-default-member */
import React from 'react'

import Auth from 'use-eazy-auth'

import { login, me, refresh, logout } from '@services/auth'

import { Navbar } from '@components/Navbar'
import { Layout } from '@components/Layout'

import 'dayjs/locale/en'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import dayjs from 'dayjs'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Routes from './Routes'

dayjs.locale('en')
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
          <Routes />
        </Layout>
      </Auth>
    </div>
  )
}

export default App

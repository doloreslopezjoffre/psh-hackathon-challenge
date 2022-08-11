/* eslint-disable import/no-named-as-default-member */
import React from 'react'

import Auth from 'use-eazy-auth'

import { login, me, refresh, logout } from '@services/auth'

import { Navbar } from '@components/Navbar'
import { Layout } from '@components/Layout'

import 'dayjs/locale/en'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import isToday from 'dayjs/plugin/isToday'
import dayjs from 'dayjs'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Routes from './Routes'

dayjs.locale('en')
dayjs.extend(LocalizedFormat)
dayjs.extend(isToday)

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
        <div className="pb-32 pt-8">
          <Layout>
            <Routes />
          </Layout>
        </div>
      </Auth>
    </div>
  )
}

export default App

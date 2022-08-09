import React from 'react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useAuthActions } from 'use-eazy-auth'
import { LoginCredentials } from '@services/auth'

import { Card } from '@components/Card'
import { Layout } from '@components/Layout'

import { TextInput } from '@components/TextInput'
import { Button } from '@components/Button'

const schema = yup.object().shape({
  username: yup.string().required('Who are you?'),
  password: yup.string().required(`It's ok, we won't tell anyone ;)`),
})

const Login = () => {
  const { login } = useAuthActions()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginCredentials>({ resolver: yupResolver(schema), mode: 'onBlur' })

  return (
    <Layout>
      <Card title="Welcome, Hacker!" bodyClassName="flex justify-center">
        <form className="w-5/6" onSubmit={handleSubmit(login)}>
          <TextInput
            id="username"
            label="Username"
            placeholder="cool_username49"
            register={register}
            error={errors.username?.message}
            autoComplete="username"
          />
          <TextInput
            id="password"
            type="password"
            label="Password"
            placeholder="********"
            register={register}
            error={errors.password?.message}
            autoComplete="current-password"
          />
          <div className="flex flex-row justify-end">
            <Button text="Login" type="submit" />
          </div>
        </form>
      </Card>
    </Layout>
  )
}

export default Login

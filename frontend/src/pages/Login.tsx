import React from 'react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useAuthActions } from 'use-eazy-auth'
import { LoginCredentials } from '@services/auth'

import { Card } from '@components/common/Card'

import { TextInput } from '@components/common/TextInput'
import { Button } from '@components/common/Button'

const schema = yup.object().shape({
  username: yup.string().required('Who are you?'),
  password: yup.string().required(`It's ok, we won't tell anyone ;)`),
})

const Login = () => {
  const { login } = useAuthActions()

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<LoginCredentials>({ resolver: yupResolver(schema), mode: 'onBlur' })

  const onSubmit = (data: LoginCredentials) => {
    reset()
    login(data)
  }

  return (
    <Card title="Welcome, Hacker!" bodyClassName="flex justify-center">
      <form className="w-5/6" onSubmit={handleSubmit(onSubmit)}>
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
  )
}

export default Login

import { Card } from '@components/Card'
import { Layout } from '@components/Layout'

import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { TextInput } from '@components/TextInput'
import { Button } from '@components/Button'

interface LoginFormValues {
  username: string
  password: string
}

const schema = yup.object().shape({
  username: yup.string().required('Who are you?'),
  password: yup.string().required(`It's ok, we won't tell anyone ;)`),
})

export const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormValues>({ resolver: yupResolver(schema), mode: 'onBlur' })

  const onSubmit = (values: LoginFormValues) => console.log(values)

  return (
    <Layout>
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
    </Layout>
  )
}

import classnames from 'classnames'
import React from 'react'
import { useAuthActions, useAuthState } from 'use-eazy-auth'
import { RoundedButton } from './Button'
import { Logo } from './Logo'

export const Navbar: React.FC = () => {
  const { logout } = useAuthActions()
  const { authenticated } = useAuthState()

  const linkProps = {
    className: classnames('link', !authenticated && 'disabled'),
    ...(!authenticated && {
      style: { pointerEvents: 'none' as any },
    }),
  }

  return (
    <div className="py-6 layout tracking-wider flex flex-row justify-between">
      <div className="w-40 items-center flex justify-start">
        <a className="cursor-pointer" href="/">
          <Logo />
        </a>
      </div>

      <div className="flex items-center text-center px-6 md:px-8 max-w-5xl mx-auto h-16">
        <ul className="w-full gap-8 md:flex-row items-center justify-between">
          <li className="md:text-[1.1rem]">
            <a href="/hackathons" {...linkProps}>
              Browse hackathons
            </a>
          </li>

          <li className="md:text-[1.1rem]">
            <a href="/devs" {...linkProps}>
              Best developers
            </a>
          </li>
        </ul>
      </div>

      <div className="w-40 items-center justify-end flex">
        {authenticated ? (
          <RoundedButton text="Logout" onClick={logout} />
        ) : (
          <RoundedButton text="Login" href="/login" />
        )}
      </div>
    </div>
  )
}

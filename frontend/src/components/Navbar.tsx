import classnames from 'classnames'
import React from 'react'
import { useAuthActions, useAuthState } from 'use-eazy-auth'
import { RoundedButton } from './Button'
import { Logo } from './Logo'

export const Navbar: React.FC = () => {
  const { logout } = useAuthActions()
  const { authenticated } = useAuthState()

  return (
    <div className="py-6 layout tracking-wider flex flex-row justify-between">
      <div className="w-40 items-center flex justify-start">
        <a className="cursor-pointer" href="/">
          <Logo />
        </a>
      </div>

      <div className="hidden text-center md:flex flex-row items-center justify-between px-6 md:px-8 max-w-5xl mx-auto h-16">
        <ul className="items-center justify-center w-full gap-8">
          <li className="md:text-[1.1rem]">
            <a className="link" href="/hackathons">
              Browse hackathons
            </a>
          </li>

          <li className="md:text-[1.1rem]">
            <a
              className={classnames('link', !authenticated && 'disabled')}
              href="/devs"
              {...(!authenticated && {
                style: { pointerEvents: 'none' },
              })}
            >
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

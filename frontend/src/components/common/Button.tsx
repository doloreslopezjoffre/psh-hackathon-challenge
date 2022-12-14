/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'

interface Props {
  text: React.ReactNode
  onClick?: () => void
  href?: string
  type?: 'button' | 'submit' | 'reset'
}

export const RoundedButton: React.FC<Props> = ({ text, href, onClick }) => {
  return (
    <a href={href}>
      <div className="items-center flex" onClick={onClick}>
        <div className="justify-center cursor-pointer text-center border-2 border-[#DED5E2] font-semibold transition-colors duration-200 bg-transparent text-black hover:border-black rounded-full px-4 py-2">
          <span>{text}</span>
        </div>
      </div>
    </a>
  )
}

export const Button: React.FC<Props> = ({ text, onClick, type = 'button' }) => {
  return (
    <a>
      <div className="sm:flex sm:space-x-4 space-y-4 sm:space-y-0">
        <button
          type={type}
          onClick={onClick}
          className="sm:min-w-[8rem] cursor-pointer text-center border-2 font-semibold transition-colors duration-200 bg-black text-white border-black hover:opacity-90 block rounded px-4 py-2 text-lg sm:flex-1"
        >
          {text}
        </button>
      </div>
    </a>
  )
}

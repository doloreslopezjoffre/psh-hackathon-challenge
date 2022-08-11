/* eslint-disable @typescript-eslint/no-empty-function */
import classnames from 'classnames'
import React from 'react'

interface Props {
  children: React.ReactNode
  onClick?: () => void
  background?: string
  className?: string
  small?: boolean
}

export const BoxTag: React.FC<Props> = ({
  children,
  onClick,
  background = 'bg-white-300',
  className,
}) => (
  <div
    onClick={onClick}
    className={classnames('tag rounded-md', background, className, onClick && 'simple-hover')}
  >
    {children}
  </div>
)

export const RoundTag: React.FC<Props> = ({ children, onClick, className }) => (
  <div
    onClick={onClick}
    className={classnames('tag bg-green-300 rounded-full', className, onClick && 'simple-hover')}
  >
    {children}
  </div>
)

export const BlackTag: React.FC<Props> = ({ children, className, small = false }) => (
  <span
    className={classnames(
      'inline-flex h-fit w-fit px-2 py-1 bg-black text-white text-md font-bold align-middle items-center justify-center',
      className,
      small && 'text-sm'
    )}
  >
    {children}
  </span>
)

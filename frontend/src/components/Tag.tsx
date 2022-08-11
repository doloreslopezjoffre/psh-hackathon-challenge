/* eslint-disable @typescript-eslint/no-empty-function */
import classnames from 'classnames'
import React from 'react'

interface Props {
  children: React.ReactNode
  onClick?: () => void
  background?: string
  className?: string
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

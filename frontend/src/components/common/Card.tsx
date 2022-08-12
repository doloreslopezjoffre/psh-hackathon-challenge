import React from 'react'

interface Props {
  children: React.ReactNode
  title: string
  subtitle?: string
  className?: string
  bodyClassName?: string
}

export const Card: React.FC<Props> = ({
  children,
  title,
  subtitle,
  className = '',
  bodyClassName = '',
}) => (
  <div
    className={`${className} max-w-2xl mx-auto h-128 pt-6 px-6 pb-6 text-center bg-white border-t border-x border-black-100 rounded-2xl sm:pb-16 sm:mt-4 sm:rounded-t-5xl 2xl:mt-16`}
  >
    <h1 className="mt-4 text-xl sm:mt-8 sm:text-4xl">{title}</h1>
    {subtitle && (
      <p className="mt-2 text-md text-black-500 font-medium sm:mt-4 sm:text-lg">{subtitle}</p>
    )}
    <div className={`w-full h-full ${bodyClassName} py-4 px-6`}>{children}</div>
  </div>
)

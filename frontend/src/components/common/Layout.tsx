import React from 'react'

interface Props {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => (
  <div className="layout w-full">{children}</div>
)

export const List: React.FC<Props> = ({ children }) => (
  <div className="divide-y-2 border-t-2 border-b-2 border-black">{children}</div>
)

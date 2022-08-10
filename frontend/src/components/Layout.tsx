import React from 'react'

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="layout w-full">{children}</div>
)

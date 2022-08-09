import React from 'react'

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">{children}</div>
)

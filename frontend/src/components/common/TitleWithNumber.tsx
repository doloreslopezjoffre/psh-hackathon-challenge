import React from 'react'

interface Props {
  title: string
  number?: number | false
}

export const TitleWithNumber: React.FC<Props> = ({ title, number }) => (
  <h2 className="text-2xl md:text-4xl font-semibold mb-3 mt-2">
    {title}
    {!!number && (
      <span className="ml-3 -mt-1 w-9 h-9 p-2 bg-black rounded-full text-white text-xl font-bold align-middle inline-flex items-center justify-center">
        {number}
      </span>
    )}
  </h2>
)

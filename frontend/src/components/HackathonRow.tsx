import React from 'react'

import { ArrowNarrowRightIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { Hackathon } from '../test_data'
import dayjs from 'dayjs'

export const HackathonRow: React.FC<Hackathon> = ({
  title,
  dateStart,
  dateEnd,
  location,
  motto,
  // participants,
  website,
  logo,
}) => {
  return (
    <a
      target="_blank"
      href={website}
      rel="noreferrer"
      className="cursor-pointer flex items-center py-4 px-4 lg:py-6 font-semibold text-lg hover:bg-gray-50/50"
    >
      <div>
        <img className="w-14 h-14 rounded-full border-2 border-black object-cover" src={logo} />
      </div>

      <div className="flex-1 lg:flex lg:items-center lg:space-x-16 ml-4">
        <div className="flex-1 mb-1">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm font-light text-black-400 tracking-wide">{motto}</p>
        </div>

        <div className="inline-flex items-center space-x-3 text-xs lg:text-lg">
          <time>{dayjs(dateStart).format('ll')}</time>
          <ArrowNarrowRightIcon className="h-5 w-5" />
          <time>{dayjs(dateEnd).format('ll')}</time>
        </div>

        <div className="hidden lg:block">
          <div className="inline-flex overflow font-medium items-center space-x-2 uppercase px-3 py-1 bg-green-300 border-2 border-black text-xs rounded-full">
            {location}
          </div>
        </div>
        <ChevronRightIcon className="h-4 w-4" />
      </div>
    </a>
  )
}

import React from 'react'

import { ArrowNarrowRightIcon, ExternalLinkIcon } from '@heroicons/react/outline'
import { Hackathon } from '../test_data'
import dayjs from 'dayjs'

export const HackathonCard: React.FC<Hackathon> = ({
  title,
  dateStart,
  dateEnd,
  location,
  // participants,
  website,
  logo,
}) => {
  return (
    <div className="border-2 rounded-lg border-black bg-white p-0 hover:bg-gray-50">
      <div className="p-6 lg:p-8 cursor-pointer">
        <div className="inline-flex overflow font-medium items-center space-x-2 uppercase px-3 py-1 bg-green-300 border-2 border-black text-xs rounded-full">
          {location}
        </div>

        <header className="flex items-center justify-between mt-8 mb-6">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold">{title}</h3>
          </div>
          <img className="w-14 h-14 rounded-full border-2 border-black object-cover" src={logo} />
        </header>

        <div className="inline-flex overflow font-medium items-center space-x-2 uppercase px-3 py-1 bg-white-300 border-2 border-black text-xs rounded-md">
          <time>{dayjs(dateStart).format('ll')}</time>
          <ArrowNarrowRightIcon className="h-5 w-5" />
          <time>{dayjs(dateEnd).format('ll')}</time>
        </div>
      </div>

      <a target="_blank" href={website} rel="noreferrer">
        <footer className="bg-yellow-300 hover:opacity-90 py-4 px-6 lg:px-8 flex items-center justify-between rounded-b-2 border-t-2 border-black">
          <span className="flex-1 font-semibold">Learn more</span>
          <ExternalLinkIcon className="h-5 w-5" />
        </footer>
      </a>
    </div>
  )
}

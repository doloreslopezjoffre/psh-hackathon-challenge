import React from 'react'

import { ArrowNarrowRightIcon, ExternalLinkIcon } from '@heroicons/react/outline'
import dayjs from 'dayjs'
import { BlackTag, BoxTag, RoundTag } from './Tag'
import { Hackathon } from '@utils/types/data'

export const HackathonCard: React.FC<Hackathon> = ({
  name,
  isNew,
  dateStart,
  dateEnd,
  location,
  // participants,
  website,
  logo,
}) => {
  return (
    <div className="border-2 rounded-lg border-black bg-white p-0 hover:bg-gray-50 flex flex-col">
      <div className="p-6 lg:p-8 cursor-pointer flex-1">
        <RoundTag>{location}</RoundTag>

        <header className="flex items-center justify-between mt-8 mb-6">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold">{name}</h3>
          </div>
          <img className="w-14 h-14 rounded-full border-2 border-black object-cover" src={logo} />
        </header>

        <div className="flex flex-row items-center justify-between">
          <BoxTag>
            <time>{dayjs(dateStart).format('ll')}</time>
            <ArrowNarrowRightIcon className="h-5 w-5" />
            <time>{dayjs(dateEnd).format('ll')}</time>
          </BoxTag>

          {isNew && <BlackTag className="hidden md:inline-flex">NEW</BlackTag>}
        </div>
      </div>

      <a target="_blank" href={website} rel="noreferrer" className="block">
        <footer className="h-14 bg-yellow-300 hover:opacity-90 py-4 px-6 lg:px-8 flex items-center justify-between rounded-b-lg border-t-2 border-black">
          <span className="flex-1 font-semibold">Visit their website</span>
          <ExternalLinkIcon className="h-5 w-5" />
        </footer>
      </a>
    </div>
  )
}

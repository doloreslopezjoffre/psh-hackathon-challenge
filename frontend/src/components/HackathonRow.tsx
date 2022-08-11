import React from 'react'
import dayjs from 'dayjs'

import { ArrowNarrowRightIcon, ExternalLinkIcon } from '@heroicons/react/outline'
import { BoxTag, RoundTag } from './Tag'

import { Hackathon } from '../test_data'

export const HackathonRow: React.FC<Hackathon> = ({
  name,
  dateStart,
  dateEnd,
  location,
  motto,
  // participants,
  website,
  logo,
}) => {
  return (
    <div className="cursor-pointer flex items-center py-4 px-4 lg:py-6 font-semibold text-lg hover:bg-gray-50/50">
      <div>
        <img className="w-14 h-14 rounded-full border-2 border-black object-cover" src={logo} />
      </div>

      <div className="flex-1 lg:flex lg:items-center lg:space-x-16 ml-4">
        <div className="flex-1 mb-1">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-sm font-light text-black-400 tracking-wide">{motto}</p>
        </div>

        <div className="inline-flex items-center space-x-3 text-xs lg:text-lg">
          <time>{dayjs(dateStart).format('ll')}</time>
          <ArrowNarrowRightIcon className="h-5 w-5" />
          <time>{dayjs(dateEnd).format('ll')}</time>
        </div>

        <div className="hidden lg:block">
          <RoundTag>{location}</RoundTag>
        </div>
      </div>

      <div className="ml-4">
        <a href={website} target="_blank" rel="noreferrer" title="Visit their website">
          <BoxTag background="bg-yellow-300" className="!p-1 simple-hover">
            <ExternalLinkIcon className="h-5 w-5" />
          </BoxTag>
        </a>
      </div>
    </div>
  )
}

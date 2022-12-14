import React from 'react'

import { ExternalLinkIcon } from '@heroicons/react/outline'
import { BlackTag, BoxTag, RoundTag } from '../common/Tag'
import { Hackathon } from '@utils/types/data'
import { HackathonDates } from './HackathonDates'

interface Props extends Omit<Hackathon, 'id'> {
  onClick: () => void
}

export const HackathonRow: React.FC<Props> = ({
  name,
  isNew,
  location,
  motto,
  // participants,
  website,
  logo,
  onClick,
  ...dates
}) => {
  return (
    <div
      className="cursor-pointer flex items-center py-4 px-4 lg:py-6 font-semibold text-lg hover:bg-gray-50/50"
      onClick={onClick}
    >
      <div>
        <img className="w-14 h-14 rounded-full border-2 border-black object-cover" src={logo} />
      </div>

      <div className="flex-1 lg:flex lg:items-center lg:space-x-16 ml-4">
        <div className="flex-1 mb-1">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-sm font-light text-black-400 tracking-wide">{motto}</p>
        </div>

        <div className="inline-flex items-center md:space-x-3 text-xs lg:text-lg">
          {isNew && (
            <BlackTag small className="hidden md:inline-flex">
              NEW
            </BlackTag>
          )}

          <HackathonDates {...dates} />
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

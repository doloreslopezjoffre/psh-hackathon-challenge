import React from 'react'

import { ArrowNarrowRightIcon, ExternalLinkIcon } from '@heroicons/react/outline'
import dayjs from 'dayjs'
import { BlackTag, BoxTag, RoundTag } from '../common/Tag'
import { Hackathon } from '@utils/types/data'

interface Props extends Omit<Hackathon, 'id'> {
  onClick: () => void
}

export const HackathonCard: React.FC<Props> = ({
  name,
  isNew,
  dateStart,
  dateEnd,
  location,
  // participants,
  website,
  logo,
  onClick,
}) => {
  return (
    <div className="card hover:bg-gray-50">
      <div className="p-6 lg:p-8 cursor-pointer flex-1" onClick={onClick}>
        <RoundTag>{location}</RoundTag>

        <header className="flex items-center justify-between mt-8 mb-6">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold">{name}</h3>
          </div>
          <img className="w-14 h-14 rounded-full border-2 border-black object-cover" src={logo} />
        </header>

        <div className="flex flex-row items-center justify-between md:space-x-3">
          <BoxTag>
            <time>{dayjs(dateStart).format('ll')}</time>
            <ArrowNarrowRightIcon className="h-5 w-5" />
            <time>{dayjs(dateEnd).format('ll')}</time>
          </BoxTag>

          {isNew && <BlackTag className="hidden md:inline-flex">NEW</BlackTag>}
        </div>
      </div>

      <a target="_blank" href={website} rel="noreferrer" className="block">
        <footer className="h-14 bg-yellow-300 hover:bg-yellow-400/70 py-4 px-6 lg:px-8 flex items-center justify-between rounded-b-lg border-t-2 border-black">
          <span className="flex-1 font-semibold">Visit {website.replace(/^https?:\/\//, '')}</span>
          <ExternalLinkIcon className="h-5 w-5" />
        </footer>
      </a>
    </div>
  )
}

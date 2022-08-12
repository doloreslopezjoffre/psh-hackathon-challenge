import React from 'react'

import { BlackTag, BoxTag, RoundTag } from '../common/Tag'
import { Participant } from '@utils/types/data'
import { AtSymbolIcon } from '@heroicons/react/outline'

interface Props extends Omit<Participant, 'id'> {
  place: string
}

export const DeveloperCard: React.FC<Props> = ({ developer, score, place }) => {
  const { name, username, picture, country } = developer

  return (
    <div className="card h-80 w-full sm:w-2/3 md:w-5/6 mx-auto">
      <div className="p-6 lg:p-8 flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-between w-full">
          <RoundTag>{score} pts.</RoundTag>
          <BlackTag>{place}</BlackTag>
        </div>

        <header className="flex flex-col items-center mt-8 mb-6">
          <img
            className="w-24 h-24 rounded-full border-2 mb-2 border-black object-cover"
            src={picture}
          />
          <h3 className="text-md sm:text-lg font-semibold text-center">
            {name} <span className="text-xs sm:!text-sm">from {country}</span>
          </h3>
        </header>

        <BoxTag>
          <AtSymbolIcon className="h-4 w-4" />
          {username}
        </BoxTag>
      </div>
    </div>
  )
}

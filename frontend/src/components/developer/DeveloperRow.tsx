import React from 'react'

import { Hackathon, Participant } from '@utils/types/data'

import { ChipIcon } from '@heroicons/react/solid'
import { BlackTag, BoxTag, RoundTag } from '@components/common/Tag'
import { useHistory } from 'react-router-dom'
import { AtSymbolIcon } from '@heroicons/react/outline'

interface Props extends Omit<Participant, 'id'> {
  place: string
  hackathon?: Hackathon
}

export const DeveloperRow: React.FC<Props> = ({ developer, hackathon, score, place }) => {
  const history = useHistory()

  const { username, picture, name, country } = developer

  const goToHackathon = () => {
    if (hackathon) history.push(`/hackathons/${hackathon.id}`)
  }

  return (
    <div className="flex items-center py-4 px-4 lg:py-6 font-semibold text-lg">
      <div className="flex-col">
        <div className="flex flex-row items-center">
          <BlackTag small className="mr-3">
            {place}
          </BlackTag>
          <img
            className="w-14 h-14 rounded-full border-2 border-black object-cover"
            src={picture}
          />
        </div>
        <div className="inline-flex sm:hidden items-center mt-2">
          <AtSymbolIcon className="h-full w-4" />
          <h3 className="text-sm font-light text-black-400 tracking-wide">{username}</h3>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-end sm:space-x-16 ml-4">
        <div className="hidden sm:inline-block flex-1 mb-1">
          <div className="inline-flex items-center">
            <AtSymbolIcon className="h-full w-6" />
            <h3 className="text-xl font-semibold">{username}</h3>
          </div>
          <p className="text-sm font-light text-black-400 tracking-wide">
            {name} from {country}
          </p>
        </div>

        <div className="inline-flex items-center space-x-3 text-xs lg:text-lg">
          <RoundTag>{score} pts.</RoundTag>

          {hackathon && (
            <div className="hidden sm:inline-block ml-4" title={hackathon.name}>
              <BoxTag
                background="bg-yellow-300"
                className="!p-1 simple-hover"
                onClick={goToHackathon}
              >
                <ChipIcon className="h-5 w-5" />
                <p className="hidden lg:inline-flex ml-1"> {hackathon.name}</p>
              </BoxTag>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

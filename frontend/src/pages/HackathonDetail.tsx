import React, { useEffect } from 'react'

import useStore from '@store/index'
import { useParams } from 'react-router-dom'
import { DeveloperLeaderboard } from '@components/developer/DeveloperLeaderboard'
import { ExternalLinkIcon } from '@heroicons/react/outline'
import { BlackTag, BoxTag, RoundTag } from '@components/common/Tag'
import { HackathonDates } from '@components/hackathon/HackathonDates'

const Hackathon = () => {
  const { id } = useParams<{ id: string }>()
  const { hackathon, fetchHackathon } = useStore()

  useEffect(() => {
    fetchHackathon(id)
  }, [id])

  if (!hackathon) return null

  const { name, logo, motto, location, website, isNew, participants, ...dates } = hackathon

  return (
    <div className="grid grid-cols-1 gap-y-10 relative">
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between">
          <div className="inline-flex items-center space-x-3">
            <img
              className="w-8 md:w-14 h-8 md:h-14 rounded-full border-2 border-black object-cover"
              src={logo}
            />
            <h2 className="text-4xl md:text-5xl font-semibold">{name}</h2>
          </div>
          <div className="hidden md:block">
            <RoundTag>{location}</RoundTag>
          </div>
        </div>

        <p className="text-lg font-light text-black-400 tracking-wide">{motto}</p>

        <div className="mt-6 w-full inline-flex items-center justify-center sm:space-x-3 font-medium text-md lg:text-2xl">
          {isNew && (
            <BlackTag small className="hidden sm:inline-flex text-xs p-1 lg:text-sm lg:px-2">
              NEW
            </BlackTag>
          )}

          <HackathonDates {...dates} />
        </div>
      </div>
      <DeveloperLeaderboard participants={participants} />

      <div className="fixed bottom-5 right-5">
        <a target="_blank" href={website} rel="noreferrer" className="block">
          <BoxTag background="bg-yellow-300" className="px-3 py-2 lg:text-xl simple-hover">
            <span className="flex-1 font-semibold">
              Visit {website.replace(/^https?:\/\//, '')}
            </span>
            <ExternalLinkIcon className="h-5 w-5" />
          </BoxTag>
        </a>
      </div>
    </div>
  )
}

export default Hackathon

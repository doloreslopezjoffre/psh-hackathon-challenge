import React from 'react'

import { Hackathon } from '@utils/types/data'

import { HackathonCard } from './HackathonCard'
import { HackathonRow } from './HackathonRow'

interface Props {
  cards?: boolean
  hackathons: Hackathon[]
}

export const HackathonList: React.FC<Props> = ({ cards = false, hackathons }) => {
  if (cards) {
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 my-6">
        {hackathons.map((hackathon, i) => (
          <HackathonCard key={i} {...hackathon} />
        ))}
      </div>
    )
  }

  return (
    <div className="divide-y-2 border-t-2 border-b-2 border-black">
      {hackathons.map((hackathon, i) => (
        <HackathonRow key={i} {...hackathon} />
      ))}
    </div>
  )
}

import React from 'react'

import { Hackathon } from '@utils/types/data'

import { HackathonCard } from './HackathonCard'
import { HackathonRow } from './HackathonRow'
import { useHistory } from 'react-router-dom'
import { List } from '../common/Layout'

interface Props {
  cards?: boolean
  hackathons: Hackathon[]
}

export const HackathonList: React.FC<Props> = ({ cards = false, hackathons }) => {
  const history = useHistory()

  const goToHackathon = (hackathonId: string) => {
    history.push(`/hackathons/${hackathonId}`)
  }

  if (cards) {
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 my-6">
        {hackathons.map(({ id, ...hackathon }) => (
          <HackathonCard key={id} onClick={() => goToHackathon(id)} {...hackathon} />
        ))}
      </div>
    )
  }

  return (
    <List>
      {hackathons.map(({ id, ...hackathon }) => (
        <HackathonRow key={id} onClick={() => goToHackathon(id)} {...hackathon} />
      ))}
    </List>
  )
}

import React from 'react'
import classnames from 'classnames'

import { Hackathon, positional, Participant } from '@utils/types/data'
import { DeveloperCard } from './DeveloperCard'
import { List } from '@components/common/Layout'
import { DeveloperRow } from './DeveloperRow'

interface Props {
  participants: Participant[]
  hackathon?: Hackathon
}

export const DeveloperLeaderboard: React.FC<Props> = ({ participants, hackathon }) => (
  <div className="grid grid-cols-1 gap-y-10">
    <div>
      <Podium podium={participants.slice(0, 3)} />
    </div>

    <List>
      {participants.slice(3).map(({ id, ...participant }, i) => (
        <DeveloperRow
          key={id}
          {...participant}
          place={positional(i + 4)}
          hackathon={participant.hackathon ?? hackathon}
        />
      ))}
    </List>
  </div>
)

const Podium = ({ podium }: { podium: Participant[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-x-3 my-6 max-w-5xl mx-auto">
      {podium.map(({ id, ...participant }, i) => (
        <div
          key={id}
          className={classnames(
            !i
              ? 'md:order-2 lg:scale-110'
              : `${i === 1 ? 'md:order-1' : 'md:order-last'} md:scale-90`
          )}
        >
          <DeveloperCard place={positional(i + 1)} {...participant} />
        </div>
      ))}
    </div>
  )
}

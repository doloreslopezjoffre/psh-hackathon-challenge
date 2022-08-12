import React from 'react'
import classnames from 'classnames'

import { positional, Participant } from '@utils/types/data'
import { DeveloperCard } from './DeveloperCard'
import { List } from '@components/common/Layout'
import { DeveloperRow } from './DeveloperRow'
import { TitleWithNumber } from '@components/common/TitleWithNumber'

interface Props {
  participants: Participant[]
}

export const DeveloperLeaderboard: React.FC<Props> = ({ participants }) => {
  const top10 = participants.slice(3, 10)
  const top20 = participants.slice(10, 20)
  const top50 = participants.slice(20, 50)

  return (
    <div className="grid grid-cols-1 gap-y-10">
      <div>
        <Podium podium={participants.slice(0, 3)} />
      </div>

      {!!top10.length && (
        <div>
          <TitleWithNumber title="Top 10" />
          <DeveloperList participants={top10} start={3} />
        </div>
      )}

      {!!top20.length && (
        <div>
          <TitleWithNumber title="Top 20" number={top20.length < 10 && top20.length} />
          <DeveloperList participants={top20} start={10} />
        </div>
      )}

      {!!top50.length && (
        <div>
          <TitleWithNumber title="Top 50" number={top50.length < 30 && top50.length} />
          <DeveloperList participants={top50} start={20} />
        </div>
      )}
    </div>
  )
}

const DeveloperList = ({ participants, start }: { participants: Participant[]; start: number }) => (
  <List>
    {participants.map(({ id, ...participant }, i) => (
      <DeveloperRow
        key={id}
        {...participant}
        place={positional(i + 1 + start)}
        hackathon={participant.hackathon}
      />
    ))}
  </List>
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

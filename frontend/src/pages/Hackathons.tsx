import React, { useEffect } from 'react'
import { partition } from 'lodash'

import { TitleWithNumber } from '@components/TitleWithNumber'
import { HackathonList } from '@components/HackathonList'

import useStore from '@store/index'
import dayjs from 'dayjs'

const Hackathons = () => {
  const { hackathons, fetchHackathons } = useStore()

  useEffect(() => {
    fetchHackathons()
  }, [])

  const [upcoming, started] = partition(hackathons, (hackathon) =>
    dayjs(hackathon.dateStart).isAfter(dayjs())
  )

  const [ended, current] = partition(started, (hackathon) =>
    dayjs(hackathon.dateEnd).isBefore(dayjs())
  )

  return (
    <div className="grid grid-cols-1 gap-y-10">
      <div>
        <TitleWithNumber title="Live" number={current.length} />
        {current.length ? (
          <HackathonList hackathons={current} cards />
        ) : (
          <div className="px-4">
            <h3 className="text-xl">Where are the hackathons?!?</h3>
          </div>
        )}
      </div>

      {!!upcoming.length && (
        <div>
          <TitleWithNumber title="Upcoming" number={upcoming.length} />
          <HackathonList hackathons={upcoming.reverse().slice(0, 20)} />
        </div>
      )}

      {!!ended.length && (
        <div>
          <TitleWithNumber title="Ended" number={ended.length} />
          <HackathonList hackathons={ended.slice(0, 20)} />
        </div>
      )}
    </div>
  )
}

export default Hackathons

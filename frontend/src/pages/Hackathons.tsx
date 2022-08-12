import React, { useEffect } from 'react'
import { partition } from 'lodash'

import { TitleWithNumber } from '@components/common/TitleWithNumber'
import { HackathonList } from '@components/hackathon/HackathonList'

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
      {!hackathons.length && <EmptyState />}

      {!!current.length && (
        <div>
          <TitleWithNumber title="Live" number={current.length} />
          <HackathonList hackathons={current} cards />
        </div>
      )}

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

const EmptyState = () => (
  <div>
    <h3 className="text-2xl font-semibold">Where are the hackathons?!?</h3>
    <p className="text-lg">
      Be sure to run <span className="text-code text-sm">python manage.py crontab add</span> +{' '}
      <span className="text-code text-sm">
        crontab add <span className="italic">[hash]</span>
      </span>{' '}
      and just wait ~5 minutes
    </p>
  </div>
)

export default Hackathons

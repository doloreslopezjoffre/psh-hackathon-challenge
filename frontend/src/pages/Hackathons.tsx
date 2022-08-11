import React, { useEffect } from 'react'
import { partition } from 'lodash'

import { TitleWithNumber } from '@components/TitleWithNumber'
import { HackathonList } from '@components/HackathonList'

import useStore from '@store/index'

const Hackathons = () => {
  const { hackathons, fetchHackathons } = useStore()

  useEffect(() => {
    fetchHackathons()
  }, [])

  const [upcomingHackathons, pastHackathons] = partition(
    hackathons,
    (hackathon) => hackathon.dateStart > new Date()
  )

  return (
    <div className="grid grid-cols-1 gap-y-10">
      <div>
        <TitleWithNumber title="Upcoming" number={upcomingHackathons.length} />
        {upcomingHackathons.length ? (
          <HackathonList hackathons={upcomingHackathons} cards />
        ) : (
          <div className="px-4">
            <h3 className="text-xl">No more hackathons?!?</h3>
          </div>
        )}
      </div>

      {!!pastHackathons.length && (
        <div>
          <TitleWithNumber title="Past" number={pastHackathons.length} />
          <HackathonList hackathons={pastHackathons} />
        </div>
      )}
    </div>
  )
}

export default Hackathons

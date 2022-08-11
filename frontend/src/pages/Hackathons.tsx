import React, { useEffect } from 'react'
import { partition } from 'lodash'

import { TitleWithNumber } from '@components/TitleWithNumber'
import { HackathonList } from '@components/HackathonList'

import { hackathon1, hackathon2, hackathon3, hackathon4 } from '../test_data'
import useStore from '@store/index'

const Hackathons = () => {
  const modeStore = useStore()

  const mockHackathons = new Array(4).fill([hackathon1, hackathon2, hackathon3, hackathon4]).flat()

  const hackathons = mockHackathons || modeStore.hackathons

  useEffect(() => {
    modeStore.fetchHackathons()
  }, [])

  const [upcomingHackathons, pastHackathons] = partition(
    hackathons,
    (hackathon) => hackathon.dateStart > new Date()
  )

  return (
    <div className="grid grid-cols-1 gap-y-10">
      {!!upcomingHackathons.length && (
        <div>
          <TitleWithNumber title="Upcoming" number={upcomingHackathons.length} />
          <HackathonList hackathons={upcomingHackathons} cards />
        </div>
      )}

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

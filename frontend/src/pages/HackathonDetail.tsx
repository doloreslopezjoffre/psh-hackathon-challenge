import React, { useEffect } from 'react'

import useStore from '@store/index'
import { useParams } from 'react-router-dom'
import { DeveloperLeaderboard } from '@components/developer/DeveloperLeaderboard'

const Hackathon = () => {
  const { id } = useParams<{ id: string }>()
  const { hackathon, fetchHackathon } = useStore()

  useEffect(() => {
    fetchHackathon(id)
  }, [id])

  if (!hackathon) return <div>Loading hackathon data...</div>

  const { participants } = hackathon

  return (
    <div className="grid grid-cols-1 gap-y-10">
      <DeveloperLeaderboard participants={participants} />
    </div>
  )
}

export default Hackathon

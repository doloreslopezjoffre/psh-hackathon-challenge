import React, { useEffect } from 'react'

import useStore from '@store/index'
import { DeveloperLeaderboard } from '@components/developer/DeveloperLeaderboard'

const Developers = () => {
  const { developers, fetchDevelopers } = useStore()

  useEffect(() => {
    fetchDevelopers()
  }, [])

  return (
    <div className="grid grid-cols-1 gap-y-10">
      <DeveloperLeaderboard participants={developers} />
    </div>
  )
}

export default Developers

import React, { useEffect } from 'react'

import useStore from '@store/index'
import { useParams } from 'react-router-dom'

const Hackathon = () => {
  const { id } = useParams<{ id: string }>()
  const { hackathon, fetchHackathon } = useStore()

  useEffect(() => {
    fetchHackathon(id)
  }, [])

  if (!hackathon) return null

  return (
    <div className="grid grid-cols-1 gap-y-10">
      <div>{hackathon.name}</div>
    </div>
  )
}

export default Hackathon

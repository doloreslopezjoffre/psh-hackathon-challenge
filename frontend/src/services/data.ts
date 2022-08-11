import instance from '@utils/auth'
import { Hackathon } from '@utils/types/data'

export const listHackathons = async () => {
  const { data } = await instance.get<Hackathon[]>('hackathons/')
  return data
}

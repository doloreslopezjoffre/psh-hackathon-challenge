import instance from '@utils/auth'
import { Hackathon, Participant } from '@utils/types/data'

export const listHackathons = async () => {
  const { data } = await instance.get<Hackathon[]>('hackathons/all/')
  return data
}

export const getHackathon = async (id: string) => {
  const { data } = await instance.get<Hackathon>(`hackathons/${id}/`)
  return data
}

export const listDevelopers = async () => {
  const { data } = await instance.get<Participant[]>('developers/all/')
  return data
}

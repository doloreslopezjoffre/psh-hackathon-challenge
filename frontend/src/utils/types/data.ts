export interface Developer {
  username: string
  picture: string
  name: string
  country: string
}

export interface Participant {
  id: string
  developer: Developer
  score: number
  hackathon?: Hackathon
}

export interface Hackathon {
  id: string
  name: string
  motto: string
  isNew: boolean
  dateStart: Date
  dateEnd: Date
  location: string
  website: string
  logo: string
  participants: Participant[]
}

export const positional = (n: number) =>
  n.toString().concat(['st', 'nd', 'rd'][(((((n < 0 ? -n : n) + 90) % 100) - 10) % 10) - 1] || 'th')

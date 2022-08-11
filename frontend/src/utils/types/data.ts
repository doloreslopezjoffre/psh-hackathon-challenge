export interface Developer {
  username: string
  picture: string
  name: string
  country: string
}

export interface Participant {
  dev: Developer
  score: number
}

export interface Hackathon {
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

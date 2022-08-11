export interface Developer {
  username: string // login.username
  picture: string // picture.medium
  name: string // name.first
  country: string // location.country
}

export interface Participant {
  dev: Developer
  score: number // randint(1, 100)
}

export interface Hackathon {
  name: string // https://fakerjs.dev/api/random.html#words + Hackathon
  motto: string // https://fakerjs.dev/api/company.html#catchPhrase x3
  dateStart: Date // https://fakerjs.dev/api/date.html#recent | https://fakerjs.dev/api/date.html#soon
  dateEnd: Date //  https://fakerjs.dev/api/date.html#soon | ++
  location: string // https://fakerjs.dev/api/address.html#cityName, https://fakerjs.dev/api/address.html#country
  website: string // https://fakerjs.dev/api/internet.html#url
  logo: string // https://loremflickr.com/640/480/abstract
  participants: Participant[] // length --> randint(6, 20)
}

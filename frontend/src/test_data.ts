// https://randomuser.me/api
interface Developer {
  username: string // login.username
  picture: string // picture.medium
  name: string // name.first
  country: string // location.country
}

export const dev1 = {
  username: 'dev1',
  picture: 'https://randomuser.me/api/portraits/med/men/96.jpg',
  name: 'Dev 1',
  country: 'Argentina',
}

export const dev2 = {
  username: 'dev2',
  picture: 'https://randomuser.me/api/portraits/med/women/65.jpg',
  name: 'Dev 2',
  country: 'Germany',
}

export const dev3 = {
  username: 'dev3',
  picture: 'https://randomuser.me/api/portraits/med/women/39.jpg',
  name: 'Dev 3',
  country: 'Japan',
}

interface Participant {
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

// https://random-data-api.com/api/crypto_coin/random_crypto_coin --> logo

export const hackathon1: Hackathon = {
  name: 'Hackathon 1',
  motto: 'Prepare to hack',
  website: 'https://google.com',
  logo: 'https://i.imgur.com/pnupcJM.png',
  dateStart: new Date(2022, 6, 14),
  dateEnd: new Date(),
  location: 'Buenos Aires, Argentina',
  participants: [
    { dev: dev1, score: 60 },
    { dev: dev2, score: 93 },
  ],
}

export const hackathon2: Hackathon = {
  name: 'Hackathon 2',
  motto: 'Hacking for the future',
  website: 'https://google.com',
  logo: 'https://i.imgur.com/2HJr7OR.png',
  dateStart: new Date(2018, 1, 1),
  dateEnd: new Date(2018, 1, 31),
  location: 'Buenos Aires, Rumania',
  participants: [
    { dev: dev3, score: 54 },
    { dev: dev2, score: 78 },
  ],
}

export const hackathon3: Hackathon = {
  name: 'Hackathon 3',
  motto: 'I ❤️ Hackathons',
  website: 'https://google.com',
  logo: 'https://i.imgur.com/COLIHUE.png',
  dateStart: new Date(2022, 9, 14),
  dateEnd: new Date(2022, 10, 14),
  location: 'Buenos Aires, Taiwan',
  participants: [
    { dev: dev1, score: 39 },
    { dev: dev3, score: 27 },
  ],
}

export const hackathon4: Hackathon = {
  name: 'Hackathon 4',
  motto: 'Hack, get money, repeat',
  website: 'https://google.com',
  logo: 'https://i.imgur.com/xk6pQZy.png',
  dateStart: new Date(2025, 1, 1),
  dateEnd: new Date(5050, 1, 31),
  location: 'Buenos Aires, Hawaii',
  participants: [
    { dev: dev1, score: 100 },
    { dev: dev2, score: 13 },
    { dev: dev3, score: 90 },
  ],
}

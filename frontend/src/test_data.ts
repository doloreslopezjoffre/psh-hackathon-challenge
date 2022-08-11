import { Hackathon, Developer } from '@store/data'

// https://randomuser.me/api
export const dev1: Developer = {
  username: 'dev1',
  picture: 'https://randomuser.me/api/portraits/med/men/96.jpg',
  name: 'Dev 1',
  country: 'Argentina',
}

export const dev2: Developer = {
  username: 'dev2',
  picture: 'https://randomuser.me/api/portraits/med/women/65.jpg',
  name: 'Dev 2',
  country: 'Germany',
}

export const dev3: Developer = {
  username: 'dev3',
  picture: 'https://randomuser.me/api/portraits/med/women/39.jpg',
  name: 'Dev 3',
  country: 'Japan',
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

const mockHackathons = new Array(4).fill([hackathon1, hackathon2, hackathon3, hackathon4]).flat()

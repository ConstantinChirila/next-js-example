// To prevent camel cases checks for the API responses
/* eslint-disable @typescript-eslint/camelcase */

export const githubResponseWithUser = {
  login: 'kentcdodds',
  id: 1500684,
  avatar_url: 'https://avatars0.githubusercontent.com/u/1500684?v=4',
  name: 'Kent C. Dodds',
  blog: 'https://kentcdodds.com',
  email: 'me+github@kentcdodds.com',
  bio: 'Lovely bio from kentcdodds',
  twitter_username: 'kentcdodds',
}

export const gitubResponseWithRepositories = [
  {
    id: 5,
    name: 'most-starred-repo',
    html_url: 'https://github.com/kentcdodds/most-starred-repo',
    description: "Yo yo, I'm a king of github!",
    stargazers_count: 1000,
  },
  {
    id: 7,
    name: 'mid-starred-repo',
    html_url: 'https://github.com/kentcdodds/mid-sized-starred-repo',
    description: "I'm almost a king of github!",
    stargazers_count: 600,
  },
  {
    id: 300,
    name: 'most-hated-library',
    html_url: 'https://github.com/kentcdodds/most-hated-library',
    description: 'Nobody likes me...',
    stargazers_count: 50,
  },
  {
    id: 14,
    name: 'sort-of-accepted-library',
    html_url: 'https://github.com/kentcdodds/sort-of-library',
    description: "I'm sort of accepted",
    stargazers_count: 100,
  },
]

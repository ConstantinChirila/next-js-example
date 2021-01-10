export const authTokensForGithub = new Headers([
  ['Accept', 'application/vnd.github.v3+json'],
  ['Authorization', `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`],
])

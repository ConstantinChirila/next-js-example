# Next.js app for Tooploox

This is an app bootstrapped from `with-typescript-eslint-jest` from [here](https://github.com/vercel/next.js/tree/canary/examples/with-typescript-eslint-jest).

## What it does?

It's an app which looks for the users in Github.com based on the user input.
Shows details about the users, including name, link, top3 repositories.

## Technologies used

- Next.js (React, webpack under the hood)
- Typescript
- Styled-Components
- Jest + React Testing Library
- ESLint + multiple plugins
- React-Axe
- Jest-Axe
- Husky

## How to run it?

1. You need to generate an API key using this (guide)[https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token].
2. You have to add a new file called `.env.local`
3. Paste your generated API key in the `.env.local` file with this key on the front `NEXT_PUBLIC_GITHUB_TOKEN` with equal sign and quotes around the value.
   e.g

```
NEXT_PUBLIC_GITHUB_TOKEN='YOUR_KEY_HERE'
```

### Install dependencies

```javascript
yarn install
```

### Run build locally

```javascript
yarn dev
```

### Run build on the server

```javascript
yarn dev:ssr
```

By default the app will be served on the port `8080` both on build on server and locally.
The url will be `http://localhost:8080`.

### Run unit tests

```javascript
yarn test
```

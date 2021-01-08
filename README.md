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

By default the app will be served on the port `8080`.
The url will be `http://localhost:8080`.

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

### Run unit tests

```javascript
yarn test
```

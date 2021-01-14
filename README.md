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
- Husky

## How to run it?

1. You need to generate an API key using this [guide](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token).
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

### Export static version of app

Simply run this command put all of the contents from the `out` folder to your FTP.

```javascript
yarn export
```

By default the app will be served on the port `8080` both on build on server and locally.  
To access the app, use this link:
http://localhost:8080.

### Run unit tests

```javascript
yarn test
```

## Final thoughts

This was a nice and challenging task.  
Unfortunately, I couldn't get everything done as planned as I didn't have enough time because of personal things.

The things which I would change in the code :

- I would fix path mapping in the Jest tests as I needed to do the relative path imports in tests
- I would add Cypress to add some E2E tests
- I would add plop templates to easily generate new components
- Simplify margins, padding and font-sizes to use the unified sizes from the theme
- I would add Ghost Placeholders instead of Spinner for loading states
- I would add Jest-Axe testing to make sure components meet accessibility standards

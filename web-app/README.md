## Getting Started

NodeJS >= 16.13.0
Package manager: yarn

First, run the development server: Goto server folder to run the nodejs server

1. Inside the monorepo, run the server first, description on server folder, then run the client side using the code above

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

2. Create `.env` file inside `web-app` folder, and add:

```bash
NEXT_PUBLIC_SERVER_LINK=http://localhost:4000
```

3. Run the client side

```bash
yarn dev
```

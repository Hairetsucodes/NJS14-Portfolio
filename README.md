
## Getting Started - Install Packages

```bash
npm install
# or 
yarn install
# or
pnpm install
# or
bun install
``` 
## Initialize DB / Prisma
# Set up your .env to correctly include the DATABASE_URL

```bash
npx prisma generate
npx prisma db push
```

## Run Development Server 
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

## Deploy on VM with PM2

```bash
pm2 start ecosystem.config.js
``` 

## Blog Management

To setup/signin a user account go to localhost:3000/register localhost:3000/signin.

localhost:3000/dashboard is where you can manage your blog.

Enjoy! 🎉


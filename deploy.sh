cd /home/azureuser/OpenPortfolio
git pull origin main

pnpm install
pnpm build
pm2 del portfolio
pm2 start ecosystem.config.cjs
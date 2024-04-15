cd /home/azureuser/NJS14-Portfolio
git pull origin master

pnpm install
pnpm build
pm2 del portfolio
pm2 start ecosystem.config.cjs
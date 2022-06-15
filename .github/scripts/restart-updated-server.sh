echo "Kill all the running PM2 actions"
sudo pm2 kill

echo "Stash changes"
git stash

echo "Pull updates"
git pull origin main

echo "Check node version"
node -v
echo "Install app dependencies"
rm -rf node_modules
npm install

# echo "Print current env"
# printenv


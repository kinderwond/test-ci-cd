echo "Kill all the running PM2 actions"
#sudo pm2 kill

echo "Jump to app folder"
cd ~/test-ci-cd

echo "Update app from Git"
#git checkout main

echo "Pull updates"
git pull origin main

echo "Check node version"
node -v
echo "Install app dependencies"
rm -rf node_modules
npm install

echo "Print current env"
printenv


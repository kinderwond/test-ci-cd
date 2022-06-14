echo "Kill all the running PM2 actions"
#sudo pm2 kill

echo "Jump to app folder"
cd ~/test-ci-cd

echo "Update app from Git"
#git checkout main

echo "Pull updates"
git pull origin main

echo "Install app dependencies"
sudo rm -rf node_modules
sudo npm install

echo "Print current env"
printenv

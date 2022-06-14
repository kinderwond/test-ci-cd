echo "Kill all the running PM2 actions"
#sudo pm2 kill

echo "Jump to app folder"
cd ~/test-ci-cd

echo "Update app from Git"
git checkout main

echo "Pull updates"
git pull origin main

echo "Install app dependencies"
sudo rm -rf node_modules
sudo npm install

#echo "Build your app"
#sudo npm run build
#
#echo "Run new PM2 action"
#sudo cp /home/ubuntu/ecosystem.json ecosystem.json
#sudo pm2 start ecosystem.json

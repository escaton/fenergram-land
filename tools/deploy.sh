rsync -avzh ./ fenegram.com:/opt/fenegram/app \
    --exclude .git \
    --exclude static/node_modules \
    --exclude static/bower_components \
    --exclude server/node_modules \
    --exclude node_modules;
ssh fenegram.com "cd /opt/fenegram/app/server && npm i && pm2 restart fenegram"

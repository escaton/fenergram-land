rsync -avzh ./ fenegram.com:/opt/fenegram/app \
    --exclude .git \
    --exclude static/node_modules \
    --exclude static/bower_components \
    --exclude node_modules;
ssh fenegram.com "pm2 restart fenegram"

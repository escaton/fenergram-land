'use strict';

var config = require('config');
var environment = process.env.NODE_ENV || 'development';
var serveStatic = require('serve-static');
var path = require('path');
// controllers
var index = require('./controllers/index');
var share = require('./controllers/share');
var botstore = require('./controllers/botstore');
var adduser = require('./controllers/adduser');

module.exports = function(app) {

    app.get('/', index.index);
    app.get('/desktop', index.desktop, index.index);
    app.get('/mobile', index.mobile, index.index);
    app.get('/boarding', index.boarding, index.index);

    app.get('/ios-boarding', index.mobile, index.boarding);

    app.get('/share/:preset?', share.index);
    app.get('/~app/botstore', botstore.index);
    app.get('/add/:login', adduser.index);

    if (environment === 'development') {
        app.use(serveStatic(config.static.path));
        app.use(serveStatic(path.join(config.static.path, '..')));
    }

    app.get('*', function(req, res) {
        res.sendStatus(404);
    });

};

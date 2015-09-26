'use strict';

var Express = require('express');
var serveStatic = require('serve-static');
var config = require('config');
var environment = process.env.NODE_ENV || 'development';
var Ua = require('./lib/ua');
var path = require('path');
var log = require('npmlog');

var app = Express();

app.set('env', environment);
app.disable('x-powered-by');
app.enable('trust proxy');
app.disable('etag');

app.get('/', function(req, res) {

    var ua = Ua(req.headers['user-agent']);
    res.sendFile(path.join(config.static.path, ua.platform.toLowerCase() + '.index' + '.html'));

});

if (environment === 'development') {
    app.use(serveStatic(config.static.path));
    app.use(serveStatic(path.join(config.static.path, '..')));
}

app.get('*', function(req, res) {
    res.sendStatus(404);
});

app.listen(config.server.socket, function() {
    log.info('app', 'Start listen on ' + config.server.socket);
});

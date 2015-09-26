'use strict';

var Express = require('express');
var config = require('config');
var environment = process.env.NODE_ENV || 'development';
var log = require('npmlog');
var router = require('./router');

module.exports = function() {
    var app = Express();
    app.set('env', environment);
    app.disable('x-powered-by');
    app.enable('trust proxy');
    app.disable('etag');

    app.set('views', './views')
    app.set('view engine', 'jade');

    router(app);

    app.listen(config.server.socket, function() {
        log.info('app', 'Start listen on ' + config.server.socket);
    });
};

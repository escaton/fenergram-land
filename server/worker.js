'use strict';

var Express = require('express');
var serveStatic = require('serve-static');
var config = require('config');
var environment = process.env.NODE_ENV || 'development';
var Ua = require('./lib/ua');
var path = require('path');
var log = require('npmlog');

var app = Express();

// if (environment === 'development') {
//     app.use(serveStatic('../static/dist', {'index': ['index.html']}));
// }

app.get('/', function(req, res) {
    var ua = Ua(req.headers['user-agent']);

    if (ua.isMobile) {
        res.sendFile(path.join(config.static.path, 'index.' + ua.platform.toLowerCase() + '.html'));
    } else {
        res.sendFile(path.join(config.static.path, 'index.html'));
    }
});

app.listen(config.server.socket, function() {
    log.info('app', 'Start listen on ' + config.server.socket);
});

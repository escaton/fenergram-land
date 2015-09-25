'use strict';

var Express = require('express');
var config = require('config');

var app = Express();

app.get('*', function(req, res) {
    res.send('pong');
});

app.listen(config.server.socket);

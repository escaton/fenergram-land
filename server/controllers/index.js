'use strict';

var config = require('config');
var environment = process.env.NODE_ENV || 'development';
var Ua = require('../lib/ua');
var path = require('path');

exports.index = function(req, res) {
    var ua = Ua(req.headers['user-agent']);
    res.sendFile(path.join(config.static.path, ua.platform.toLowerCase() + '.index' + '.html'));
}

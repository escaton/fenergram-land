'use strict';

var config = require('config');
var environment = process.env.NODE_ENV || 'development';
var Ua = require('../lib/ua');
var path = require('path');

exports.mobile = function (req, res, next) {
    res.sendFile(path.join(config.static.path, 'ios.index.html'));
};

exports.boarding = function (req, res, next) {
    res.sendFile(path.join(config.static.path, 'ios.boarding.html'));
};

exports.index = function (req, res) {
    var ua = Ua(req);

    if (ua.isMobile) {
        res.sendFile(path.join(config.static.path, 'ios.boarding.html'));
    } else {
        res.sendFile(path.join(config.static.path, 'desktop.index.html'));
    }
};

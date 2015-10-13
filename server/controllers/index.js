'use strict';

var config = require('config');
var environment = process.env.NODE_ENV || 'development';
var Ua = require('../lib/ua');
var path = require('path');

exports.desktop = function (req, res, next) {
    req.ua = {
        isMobile: false,
        platform: 'desktop'
    };
    next();
};

exports.mobile = function (req, res, next) {
    req.ua = {
        isMobile: true,
        platform: 'iOS'
    };
    next();
};

exports.boarding = function (req, res, next) {
    req.ua = req.ua || Ua(req);

    // if (req.ua.platform == 'iOS' || req.ua.platform == 'Android') {
        // res.sendFile(path.join(config.static.path, req.ua.platform.toLowerCase() + '.boarding' + '.html'));
        // return;
    // }

    res.sendFile(path.join(config.static.path, 'ios.boarding.html'));


    // res.redirect(302, '/');
};

exports.index = function (req, res) {
    req.ua = req.ua || Ua(req);

    res.sendFile(path.join(config.static.path, req.ua.platform.toLowerCase() + '.index' + '.html'));
};

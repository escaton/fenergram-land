'use strict';

var config = require('config');
var environment = process.env.NODE_ENV || 'development';
var path = require('path');
var Ua = require('../lib/ua');
var _ = require('lodash');
var presets = require('../data/share');

exports.index = function(req, res) {
    var login = req.params.login;
    var url = 'tg://resolve?domain=' + login;
    res.render('adduser', {
        login: login,
        url: url
    });
}

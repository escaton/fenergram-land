'use strict';

var config = require('config');
var environment = process.env.NODE_ENV || 'development';
var Ua = require('../lib/ua');
var path = require('path');
var bots = require('../data/botstore');

exports.index = function(req, res) {
    res.render('botstore', bots);
}

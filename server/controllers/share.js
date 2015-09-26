'use strict';

var config = require('config');
var environment = process.env.NODE_ENV || 'development';
var path = require('path');
var Ua = require('../lib/ua');
var _ = require('lodash');
var presets = require('../data/share');

exports.index = function(req, res) {
    var ua = Ua(req);
    var presetName = req.params.preset || 'default';
    var shareData = _.extend({}, presets['default'], presets[presetName], req.query);

    if (ua.isBot) {
        res.render('share', shareData);
    } else {
        res.redirect(302, shareData.url);
    }
}

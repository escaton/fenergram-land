/* bundling */
require('../less/desktop.less');

/* logic */
var scroller = require('./lib/scroll');

$(document).ready(function () {
    var scroll = scroller($('.scroll'));
});

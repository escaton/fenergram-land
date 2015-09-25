/* bundling */
window.jQuery = window.$ = require('jquery');
require('owl.carousel');
require('../bower_components/owl.carousel/dist/assets/owl.carousel.css');
require('../bower_components/owl.carousel/dist/assets/owl.theme.default.css');

/* logic */
var scroller = require('./lib/scroll');

$(document).ready(function () {
    var scroll = scroller($('.scroll'));
});

/* bundling */
require('../less/ios.less');
$ = require('jquery');

/* logic */
var scroller = require('./lib/scroll');

$(window).load(function () {
    var scroll = scroller($('.scroll'));
    scroll.on('changed.owl.carousel', function (event) {
        var index = event.item.index || 0;
        var slide = $('.scroll__elem').eq(index);
        var title = slide.data('title');

        //$('.teaser__title').text(slide.data('title'));
        $('.teaser__text').text(slide.data('subtitle'));
    })
});

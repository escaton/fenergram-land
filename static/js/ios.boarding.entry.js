/* bundling */
require('../less/ios.boarding.less');
$ = require('jquery');

/* logic */
var scroller = require('./lib/scroll');

function callNativeApp () {
    try {
        webkit.messageHandlers.callbackHandler.postMessage("Hello from JavaScript");
    } catch(err) {
        console.log('The native context does not exist yet');
    }
}

$(document).ready(function () {
    var scroll = scroller($('.scroll'));
    scroll.on('changed.owl.carousel', function (event) {
        var index = event.item.index || 0;
        var slide = $('.scroll__elem').eq(index);
        var title = slide.data('title');

        $('.teaser__title').text(slide.data('title'));
        $('.teaser__text').text(slide.data('subtitle'));
    });

    $('button').click(function() {
        callNativeApp()
    });
});

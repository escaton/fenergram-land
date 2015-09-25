window.jQuery = window.$ = require('jquery');
require('owl.carousel');
require('../bower_components/owl.carousel/dist/assets/owl.carousel.css');
require('../bower_components/owl.carousel/dist/assets/owl.theme.default.css');

$(document).ready(function(){
    $('.scroll').owlCarousel({
        items: 1,
        loop: true,
        autoWidth: false,
        nav: false,
        navText: [],
        dots: false
        /*autoplay: true,
        autoplayTimeout: 3000*/
    });
});

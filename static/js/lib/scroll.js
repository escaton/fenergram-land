require('owl.carousel');

module.exports = function (scroll) {
    var onDragOnce = function () {
        scroll.trigger('stop.owl.autoplay');
        scroll.off('dragged.owl.carousel', onDragOnce);
    };
    setTimeout(function () {
        scroll.owlCarousel({
            items: 1,
            loop: true,
            autoWidth: true,
            nav: false,
            navText: [],
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000
        });
        scroll.on('dragged.owl.carousel', onDragOnce);
    }, 0);
    return scroll;
};

module.exports = function (scroll) {
    scroll.owlCarousel({
        items: 1,
        loop: true,
        autoWidth: false,
        nav: false,
        navText: [],
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000
    });
    var onDragOnce = function () {
        scroll.trigger('stop.owl.autoplay');
        scroll.off('dragged.owl.carousel', onDragOnce);
    };
    scroll.on('dragged.owl.carousel', onDragOnce);
    return scroll;
};

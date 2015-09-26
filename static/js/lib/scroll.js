require('owl.carousel');

module.exports = function (scroll) {
    var stopAutoPlay = function () {
        scroll.trigger('stop.owl.autoplay');
        scroll.off('dragged.owl.carousel', stopAutoPlay);
    };
    setTimeout(function () {
        scroll.owlCarousel({
            items: 1,
            loop: true,
            autoWidth: true,
            nav: false,
            navText: [],
            dots: true,
            autoplay: true,
            autoplayTimeout: 3000
        });
        scroll.on('dragged.owl.carousel', stopAutoPlay);
        var controls = scroll.find('.owl-dot');
        if (controls && controls.length) {
            controls.on('click', function () {
                stopAutoPlay();
                controls.off('click', this)
            });
        }
    }, 0);
    return scroll;
};

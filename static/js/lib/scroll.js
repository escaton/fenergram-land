require('owl.carousel');

module.exports = function (scroll, options) {
    options = options || {};
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
            autoplayTimeout: 3000,
            navContainer: options.navContainer || false,
            dotsContainer: options.dotsContainer || false
        });
        scroll.on('dragged.owl.carousel', stopAutoPlay);
        var controls = scroll.find('.owl-dot');
        controls =  options.dotsContainer ? controls.add(options.dotsContainer) : controls;
        if (controls && controls.length) {
            controls.on('click', function () {
                stopAutoPlay();
                controls.off('click', this)
            });
        }
    }, 0);
    return scroll;
};

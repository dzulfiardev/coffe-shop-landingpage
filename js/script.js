$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1500,
        smartSpeed: 1500,
        animateOut: 'fadeOut'
    });

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 450) {
            // $('#nav').addClass('light');
            $('#nav').addClass('fixed-top');
            $('#nav').addClass('black');
        }
        else {
            // $('#nav').removeClass('light');
            $('#nav').removeClass('fixed-top');
            $('#nav').removeClass('black');
        }
    });

});

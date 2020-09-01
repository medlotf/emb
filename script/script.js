$(function () {
    var slickOpts = {
        dots: true,
        slidesToShow: 1,
        centerMode: true,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
    };
    $(".persons").slick(slickOpts);
    var slickEnabled = true;
});

$(document).ready(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        itemsDesktop: [1000, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        pagination: true,
        navigation: false,
        navigationText: ["", ""],
        slideSpeed: 1000,
        singleItem: true,
        transitionStyle: "fade",
        autoPlay: true,
    });
});

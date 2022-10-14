jQuery(document).ready(function() {

    //Slider
    $('#slider .owl-carousel').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items: 1,
        margin: 0,
        stagePadding: 0,
        smartSpeed: 450,
        dots: true,
        loop: true,
        mouseDrag: true
    });

    $('#sliderVideo .owl-carousel').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items: 1,
        margin: 0,
        stagePadding: 0,
        smartSpeed: 450,
        dots: true,
        loop: true,
    });

    //productCarousel
    $('#bieuhienCarousel .owl-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        margin: 20,
        nav: false,
        navText: ["<i class='glyphicon glyphicon-chevron-left'></i>", "<i class='glyphicon glyphicon-chevron-right'></i>"],
        dots: false,
        loop: true,
        responsive: {
            0: {
                items: 2
            },
            640: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            },
            1200: {
                items: 5
            }
        }
    });
    // productCarousel
    $('#productCarousel .owl-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        margin: 20,
        nav: false,
        navText: ["<i class='glyphicon glyphicon-chevron-left'></i>", "<i class='glyphicon glyphicon-chevron-right'></i>"],
        dots: false,
        loop: true,
        responsive: {
            0: {
                items: 2
            },
            640: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            },
            1200: {
                items: 5
            }
        }
    });
});
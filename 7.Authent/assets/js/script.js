jQuery(document).ready(function() {
    $('#cusCarousel').carousel();
    // productCarousel
    $('#productCarousel .owl-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        margin: 30,
        nav: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 2
            },
            640: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });
    //serviceCarousel
    $('#serviceCarousel .owl-carousel').owlCarousel({
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        margin: 30,
        nav: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        dots: false,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });
    //promotionCarousel
    $('#promotionCarousel .owl-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        margin: 40,
        nav: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        dots: false,
        loop: true,
        responsive: {
            0: {
                items: 2
            },
            640: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });

});
jQuery(document).ready(function() {
    $(window).scroll(function() {
        if ($(".header-main").length > 0) {
            $(".header-main").addClass("animated");
            if ($(window).width() > 767) {
                if ($(window).scrollTop() > $(".header-main").outerHeight()) {
                    $(".header-main").addClass("head-sticky")
                } else {
                    $(".header-main").removeClass("head-sticky")
                }
            } else {
                $(".header-main").removeClass("head-sticky");
            }
        }
    });
    $("#navPrimary>ul").onePageNav({
        currentClass: "active",
        changeHash: true,
        scrollSpeed: 500,
        scrollThreshold: 0.5,
        easing: "swing"
    });

    //carouselCustommer
    $('#carouselCustommer').carousel();
    //productCarousel
    $('#productCarousel .owl-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        margin: 30,
        nav: true,
        navText: ["<i class='glyphicon glyphicon-chevron-left'></i>", "<i class='glyphicon glyphicon-chevron-right'></i>"],
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
    // Service
    $('#serviceCarousel .owl-carousel').owlCarousel({
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        margin: 30,
        nav: false,
        navText: ["<i class='glyphicon glyphicon-chevron-left'></i>", "<i class='glyphicon glyphicon-chevron-right'></i>"],
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
    // promotion
    var width = $(window).width();
    var optionPromotion = {
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        stagePadding: 400,
        loop: true,
        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    };
    if (width < 768) {
        optionPromotion = {
            autoplay: false,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            stagePadding: 30,
            loop: true,
            margin: 30,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                640: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        };
    }

    $('#promotionCarousel .owl-carousel').owlCarousel(optionPromotion);
});
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
    //Slider
    $('#systemSlider .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left fa-2x'></i>", "<i class='fa fa-angle-right fa-2x'></i>"],
        mouseDrag: false,
        autoplay: false,
        animateOut: 'slideOutUp',
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: false,
            },
            600: {
                items: 1,
                nav: false,
                dots: false,
            },
            1000: {
                items: 1
            }
        }
    });
    //carouselCustommer
    $('#cusCarousel').carousel();

    $('#timelineCarousel .owl-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        margin: 30,
        padding: 15,
        nav: true,
        navText: ["<i class='fa fa-angle-left fa-2x'></i>", "<i class='fa fa-angle-right fa-2x'></i>"],
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: false,
            },
            640: {
                items: 1,
                nav: false,
                dots: false,
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    });
});
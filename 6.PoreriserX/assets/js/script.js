jQuery(document).ready(function() {
    var trigger = $('.ic-menu'),
        overlay = $('.overlay'),
        isClosed = false;

    trigger.click(function() {
        hamburger_cross();
    });

    function hamburger_cross() {

        if (isClosed == true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }

    $('[data-toggle="offcanvas"]').click(function() {
        $('#wrapper').toggleClass('toggled');
    });

    $("#navPrimary>ul").onePageNav({
        currentClass: "active",
        changeHash: true,
        scrollSpeed: 500,
        scrollThreshold: 0.5,
        easing: "swing"
    });
    //Faqs
    $('.faq-content .collapse').on('shown.bs.collapse', function() {
        $(this).parent().find(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
    }).on('.faq-content hidden.bs.collapse', function() {
        $(this).parent().find(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
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
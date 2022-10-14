jQuery(document).ready(function() {
    //About
    if ($('.text-overflow').length > 0) {

        var text = $('.text-overflow .content'),
            btn = $('.text-overflow .btn-viewmore'),
            h = text[0].scrollHeight;
        if (h > 145) {
            btn.addClass('less');
            text.css('height', '145px');
        }
        btn.click(function(e) {
            e.stopPropagation();
            if (btn.hasClass('less')) {
                btn.removeClass('less');
                btn.addClass('more');
                btn.text('Thu gọn');
                text.animate({ 'height': h });
            } else {
                btn.addClass('less');
                btn.removeClass('more');
                btn.text('Đọc thêm');
                text.animate({ 'height': '145px' });
            }
        });
    }
    $('#cusCarousel').carousel();
    //video Carousel
    $('#sliderVideo .owl-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        margin: 26,
        nav: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        dots: false,
        loop: false,
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
                items: 4
            },
            1200: {
                items: 4
            }
        }
    });
    // productCarousel
    $('#productCarousel .owl-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        margin: 20,
        nav: true,
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
    //serviceCarousel
    $('#serviceCarousel .owl-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        margin: 20,
        nav: true,
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

});
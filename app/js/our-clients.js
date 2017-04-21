try {
    Typekit.load({async: false});
} catch (e) {
}

$(function () {

    var swiper = new Swiper('.swiper-clients-container', {
        scrollbarHide: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        autoplay: 3000,
        grabCursor: true,
        breakpoints: {
            500: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            600: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            800: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            1000: {
                slidesPerView: 5,
                spaceBetween: 40
            },
            1125: {
                slidesPerView: 6,
                spaceBetween: 40
            }
        }
    });
});
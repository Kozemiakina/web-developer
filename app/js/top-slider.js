try {
    Typekit.load({async: false});
} catch (e) { }

$(function () {

    var swiper = new Swiper('.swiper-main-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 5500,
        autoplayDisableOnInteraction: false,
        slidesPerView: 1,
        loop: true
    });

})




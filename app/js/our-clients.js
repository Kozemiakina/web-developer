try {
    Typekit.load({async: false});
} catch (e) { }

$(function () {

    var swiper = new Swiper('.swiper-clients-container', {
        scrollbar: '.swiper-scrollbar',
        scrollbarHide: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        autoplay: 2500,
        grabCursor: true
    });

})
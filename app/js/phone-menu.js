$(function(){
    $('#menu-trigger').click(function() {
        $(this).toggleClass('phone-menu on');
        $('.phone-menu .main-menu').slideToggle(1000);
    });
});


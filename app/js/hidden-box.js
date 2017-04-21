$(function () {
    $('a.open').click(function () {
        $(this)
            .closest('.order-form__text, .traffic_shema_text')
            .find('.hidden-text')
            .slideToggle(1000);
        $(this).remove();
        return false;
    });
});
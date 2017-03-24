/**
 * Created by alisa on 23.03.2017.
 */
$(function () {


    //MENU

    $('.scroll-menu').scroolly([
        {
            direction: 1,
            from: 'con-top + 45el',
            css: {
                '-transition': 'all .7s',
                position: 'fixed',
                top: '-45px'
            }
        },
        {
            direction: -1,
            from: 'con-top',
            css: {
                '-transition': 'all .7s',
                position: 'fixed',
                top: '45px'
            }
        }
    ], $('body'));
});
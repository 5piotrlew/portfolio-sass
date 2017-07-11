'use strict';

$(function () {

    $("a[href*='#']").click(function () {
        $('body').animate({
            scrollTop: $(this.hash).offset().top - 50
        }, 500);
    });

});

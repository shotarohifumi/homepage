$(function() {
    $(document).ready(function () {
        $('.button').mouseenter(function () {
            $(this).addClass('hovered');
        });

        $('.button').mouseleave(function () {
            $(this).removeClass('hovered');
        });
    });
});
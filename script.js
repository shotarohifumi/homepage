$(function() {
    $(document).ready(function () {
        $('.button').mouseenter(function () {
            $(this).addClass('hovered');
        });

        $('.button').mouseleave(function () {
            $(this).removeClass('hovered');
        });
    });
		// スクロール
		$(window).on("scroll", function () {
			let btn = $(".figtop").offset().top;

			let position = $(window).scrollTop();

			if (position >= btn) {
					$(".figtop").removeClass("topbtn");
			}
			//console.log(position);
			if (position == 0) {
					$(".figtop").addClass("topbtn");
			}
    });

    $(".figtop").on("click", function () {
        $("body,html").animate({ scrollTop: 0 }, 500);
    });

});
$(function() {
		// ボタン色味変化
    $(document).ready(function () {
        $('.button').mouseenter(function () {
            $(this).addClass('hovered');
        });

        $('.button').mouseleave(function () {
            $(this).removeClass('hovered');
        });
    });

		// to-the-topボタン
		$(window).on("scroll", function () {
			let btn = $(".figtop").offset().top;

			let position = $(window).scrollTop();

			if (position >= btn) {
					$(".figtop").removeClass("topbtn");
			}

			if (position == 0) {
					$(".figtop").addClass("topbtn");
			}
    });

    $(".figtop").on("click", function () {
        $("body,html").animate({ scrollTop: 0 }, 500);
    });

		// メニューバーからのスクロール
		$(document).ready(function() {
			$(".scroll-button").click(function() {
				var target = "#" + $(this).data("target");
				$('html, body').animate({
					scrollTop: $(target).offset().top
				}, 1000); // スクロールのアニメーション時間（ミリ秒）
			});
		});
		
});
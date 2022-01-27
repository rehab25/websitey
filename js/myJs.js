/*global $, jQuery, alert*/
$(document).ready(function () {
    "use strict";
    $(".Mygear-check").click(function () {
		$(".color-option").fadeToggle();
    });

    var colorLi = $(".color-option ul li");
    colorLi
		.eq(0).css("backgroundColor", "#e41817").end()
		.eq(1).css("backgroundColor", "#e426d5").end()
		.eq(2).css("backgroundColor", "#009aff").end()
		.eq(3).css("backgroundColor", "#638700");

/////////////////video 38   اشتغلت  ////////begin//////////////////
	colorLi.click(function () {
		$("link[href*='theme']").attr("href", $(this).attr("data-value"));
	});

/////////////////video 38   اشتغلت  /////////end////////////////////
});


/////////////////video 39 اشتغل  ////////begin//////////////////


$(document).ready(function () {
	"use strict";
	$(window).on('load', function () {
		$("body").css("overflow", 'auto');
		$(".secLoading").fadeOut(5000);
	});

	var scrollButton = $(".scroll-button");
	
	$(window).scroll(function () {
		console.log($(this).scrollTop());
		if ($(this).scrollTop() >= 500) {
			scrollButton.show();
		} else {
			scrollButton.hide();
		}
	});
	
		
	scrollButton.click(function () {
		$("html,body").animate({scrollTop: 0 }, 600);
	});
	
	$(".do-nicescrol4").niceScroll(".wrap"); 
	
});

	
/////////////////video 39 اشتغل  ////////end////////////////////
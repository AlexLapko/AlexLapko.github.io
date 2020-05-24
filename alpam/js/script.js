$(document).ready(function() {
	$(".main-slider").slick({
		arrows: false,
		dots: true
	});
})

$(document).ready(function () {
	$(".review-slider").slick({
		arrows: true,
		dots: true,
		slidesToShow: 3,
	});
})

$(document).ready(function () {
	$('.btnUp').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
});
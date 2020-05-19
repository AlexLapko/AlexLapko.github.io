$(document).ready(function(){
	var button = $('#button');
	var modal = $('#modal');
	var close = $('#close');

	button.on('click', function() {
		modal.addClass('modal_active');
	});

	close.on('click', function() {
		modal.removeClass('modal_active');
	});
});

$(document).ready(function () {
	var button = $('.card__link');
	var modal = $('#modal-price');
	var close = $('#close-btn');

	button.on('click', function () {
		modal.addClass('modal-price_active');
	});

	close.on('click', function () {
		modal.removeClass('modal-price_active');
	});
});

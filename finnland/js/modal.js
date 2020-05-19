$(document).ready(function () {
	var button = $('#price-button');
	var modal = $('#modal');
	var close = $('#close');

	button.on('click', function () {
		modal.addClass('modal_active');
	});

	close.on('click', function () {
		modal.removeClass('modal_active');
	});
});

$(document).ready(function () {
	var button = $('#navbar-button');
	var modal = $('#modal');
	var close = $('#close');

	button.on('click', function () {
		modal.addClass('modal_active');
	});

	close.on('click', function () {
		modal.removeClass('modal_active');
	});
});

$(document).ready(function () {
	var button = $('.services-card__arrow');
	var modal = $('#modal');
	var close = $('#close');

	button.on('click', function () {
		modal.addClass('modal_active');
	});

	close.on('click', function () {
		modal.removeClass('modal_active');
	});
});

$(document).ready(function () {
	var button = $('#services-button');
	var modal = $('#modal');
	var close = $('#close');

	button.on('click', function () {
		modal.addClass('modal_active');
	});

	close.on('click', function () {
		modal.removeClass('modal_active');
	});
});
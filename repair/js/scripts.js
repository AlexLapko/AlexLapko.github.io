$('#offer-form').on('submit', function(event) {
	event.preventDefault();
	$.ajax({
		url: 'mail.php',
		type: 'POST',
		data: $(this).serialize(),
		success: function(data) {
			alert(data + ', cпасибо за заявку, скоро мы вам перезвоним.');
			$('#offer-form')[0].reset();
		}
	});
});
$(document).ready(function () {
$('#modal').validate({
	errorClass: "invalid",
	rules: {
		username: {
			required: true,
			minlength: 2,
			maxlength: 15
		},
		userphone: {
			required: true
		},
		userquestion: {
			required: true,
			minlength: 3,
		},
	},
	messages: {
		username: {
			required: "Заполните поле",
			minlength: "Имя должно быть не короче 2 символов",
			maxlength: "Имя должно быть не больше 15 символов"
		},
		userphone: "Заполните поле",
		userquestion: {
			required: "Заполните поле",
			minlength: "Ваш вопрос должно быть не короче 3 символов",
		},
	},
	errorElement: 'div',
});
});

$('#contacts-form').validate({
errorClass: "invalid",
rules: {
	username: {
		required: true,
		minlength: 2,
		maxlength: 15
	},
	userphone: {
		required: true
	},
	userquestion: {
		required: true,
		minlength: 3,
	},
},
messages: {
	username: {
		required: "Заполните поле",
		minlength: "Имя должно быть не короче 2 символов",
		maxlength: "Имя должно быть не больше 15 символов"
	},
	userphone: "Заполните поле",
	userquestion: {
		required: "Заполните поле",
		minlength: "Ваш вопрос должно быть не короче 3 символов",
	},
},
errorElement: 'div',
});

$('#hero-form').validate({
	errorClass: "invalid",
	rules: {
		username: {
			required: true,
			minlength: 2,
			maxlength: 15
		},
		userphone: {
			required: true
		},
		select: {
			required: true
		},
	},
	messages: {
		username: {
			required: "Заполните поле",
			minlength: "Имя должно быть не короче 2 символов",
			maxlength: "Имя должно быть не больше 15 символов"
		},
		userphone: "Заполните поле",
		select: "Выберите время"
	},
	errorElement: 'div',
});

$('#footer-form').validate({
	errorClass: "invalid",
	rules: {
		username: {
			required: true,
			minlength: 2,
			maxlength: 15
		},
		userphone: {
			required: true
		},
		select: {
			required: true
		},
	},
	messages: {
		username: {
			required: "Заполните поле",
			minlength: "Имя должно быть не короче 2 символов",
			maxlength: "Имя должно быть не больше 15 символов"
		},
		userphone: "Заполните поле",
		select: "Выберите время"
	},
	errorElement: 'div',
});
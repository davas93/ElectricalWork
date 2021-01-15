const sendForm = () => {
	const form = document.querySelector('form[name = "form-callback"]'),
		name = form.querySelector('input[name = "fio"]'),
		phone = form.querySelector('input[name = "tel"]');

	/* form.addEventListener('submit', (event) => {
		console.log('clicked on validate');
	}); */
};

export default sendForm;

//^[а-яА-Я\s]+

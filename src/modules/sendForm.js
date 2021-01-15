const sendForm = () => {
	const form = document.querySelector('form[name = "form-callback"]'),
		input = form.querySelectorAll('input[type="text"]');

	const generateError = (text) => {
		const error = document.createElement('span');
		error.classList.add('err');
		error.innerHTML = text;
		return error;
	};

	const clearErrors = () => {
		const errors = form.querySelectorAll('.err');

		errors.forEach((item) => {
			item.remove();
		});
	};

	const checkCorrectData = () => {
		input.forEach((item) => {
			if (!item.value) {
				let error = generateError('Поле должно быть заполнено!');
				item.parentNode.append(error);
				item.style.borderColor = 'rgb(211, 27, 27)';
			} else {
				item.style.borderColor = '';
			}
		});
		if (
			!/^(?!\s+$)[А-Яа-я\s]+$/g.test(input[0].value) &&
			input[0].value !== ''
		) {
			let error = generateError(
				'Введите корректные данные! (только русские буквы)'
			);
			input[0].parentNode.append(error);
			input[0].style.borderColor = 'rgb(211, 27, 27)';
		}

		if (input[0].value.length < 2 && input[0].value !== '') {
			let error = generateError('Минимальное количество символов - 2');
			input[0].parentNode.append(error);
			input[0].style.borderColor = 'rgb(211, 27, 27)';
		}

		if (input[0].value.length > 50 && input[0].value !== '') {
			let error = generateError('Максимальное количество символов - 50');
			input[0].parentNode.append(error);
			input[0].style.borderColor = 'rgb(211, 27, 27)';
		}

		if (input[1].value.length < 15 && input[1].value !== '') {
			let error = generateError('Минимальное количество цифр - 9');
			input[1].parentNode.append(error);
			input[1].style.borderColor = 'rgb(211, 27, 27)';
		}
	};

	form.addEventListener('submit', (event) => {
		event.preventDefault();

		clearErrors();

		checkCorrectData();
	});
};

export default sendForm;

//^[а-яА-Я\s]+

//^(?!\s+$)[А-Яа-я\s]+$

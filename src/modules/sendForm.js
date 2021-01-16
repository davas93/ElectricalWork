const sendForm = () => {
	const form = document.querySelector('form[name = "form-callback"]'),
		input = form.querySelectorAll('input[type="text"]');

	const statusMessage = document.createElement('div');

	const loadMessage = `<div id="preloader">
	<div class="loader"></div>
	<div class="message">Пожалуйста, подождите, идет отправка данных...</div>
</div>`;
	const successMessage = `<div id="preloader">
					<img
						class="success-icon animate__animated animate__bounceIn"
						src="images/success.svg"
						alt="success"
					/>
					<div class="message">
						Данные получены, мы свяжемся с Вами в ближайшее время ;)
					</div>
				</div>`;
	const errorMessage = `<div class="error" id="preloader">
					<img
						class="error-icon animate__animated animate__bounceIn"
						src="images/error.svg"
						alt="error"
					/>
					<div class="message">
						Произошла ошибка, сeрвер не отвечает :( Попробуйте позже
					</div>
				</div>`;

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
		const validation = (value) => {
			value = true;
			input.forEach((item) => {
				if (item.value === '') {
					let error = generateError('Поле должно быть заполнено!');
					item.parentNode.append(error);
					item.style.borderColor = 'rgb(211, 27, 27)';
					value = false;
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
				value = false;
			}

			if (input[0].value.length < 2 && input[0].value !== '') {
				let error = generateError(
					'Минимальное количество символов - 2'
				);
				input[0].parentNode.append(error);
				input[0].style.borderColor = 'rgb(211, 27, 27)';
				value = false;
			}

			if (input[0].value.length > 50 && input[0].value !== '') {
				let error = generateError(
					'Максимальное количество символов - 50'
				);
				input[0].parentNode.append(error);
				input[0].style.borderColor = 'rgb(211, 27, 27)';
				value = false;
			}

			if (input[1].value.length < 15 && input[1].value !== '') {
				let error = generateError('Минимальное количество цифр - 9');
				input[1].parentNode.append(error);
				input[1].style.borderColor = 'rgb(211, 27, 27)';
				value = false;
			}

			return value;
		};

		if (validation()) {
			return true;
		} else {
			return false;
		}
	};

	const clearInputs = () => {
		input.forEach((item) => {
			item.value = '';
		});
	};

	form.addEventListener('submit', (event) => {
		event.preventDefault();

		clearErrors();

		if (checkCorrectData()) {
			form.parentNode.appendChild(statusMessage);
			statusMessage.innerHTML = loadMessage;

			const formData = new FormData(form);
			let body = {};

			formData.forEach((val, key) => {
				body[key] = val;
			});
			postData(body)
				.then((response) => {
					if (response.status !== 200) {
						throw new Error('status network not 200');
					}

					statusMessage.innerHTML = successMessage;
					setTimeout(() => {
						statusMessage.remove();
					}, 3000);
				})
				.catch((error) => {
					statusMessage.innerHTML = errorMessage;
					console.error(error);
					setTimeout(() => {
						statusMessage.remove();
					}, 3000);
					console.error(error);
				});
		}

		clearInputs();
	});
	const postData = (body) => {
		return fetch('./server.php', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body),
		});
	};
};

export default sendForm;

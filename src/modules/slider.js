const slider = () => {
	const topSlider = document.querySelector('.top-slider'),
		slide = topSlider.querySelectorAll('.item'),
		table = topSlider.querySelectorAll('.table');

	topSlider.insertAdjacentHTML('beforeend', '<ul class="slick-dots"></ul>');

	const dots = topSlider.querySelector('.slick-dots');

	for (let i = 0; i < slide.length; i++) {
		const newDot = document.createElement('li');
		dots.append(newDot);
		dots.firstElementChild.classList.add('slick-active');
	}

	const dot = dots.querySelectorAll('li');
	let currentSlide = 0,
		interval;

	const prevSlide = (elem, index, strClass) => {
		elem[index].classList.remove(strClass);
	};
	const nextSlide = (elem, index, strClass) => {
		elem[index].classList.add(strClass);
	};

	const autoPlaySlide = () => {
		prevSlide(table, currentSlide, 'active');
		prevSlide(dot, currentSlide, 'slick-active');
		prevSlide(slide, currentSlide, 'item-active');
		currentSlide++;
		if (currentSlide >= slide.length) {
			currentSlide = 0;
		}
		nextSlide(table, currentSlide, 'active');
		nextSlide(dot, currentSlide, 'slick-active');
		nextSlide(slide, currentSlide, 'item-active');
	};

	const startSlide = (time = 3000) => {
		interval = setInterval(autoPlaySlide, time);
	};

	const stopSlide = () => {
		clearInterval(interval);
	};

	topSlider.addEventListener('click', (event) => {
		event.preventDefault();

		let target = event.target;

		if (!target.matches('.slick-dots>li')) {
			return;
		}
		prevSlide(table, currentSlide, 'active');
		prevSlide(slide, currentSlide, 'item-active');
		prevSlide(dot, currentSlide, 'slick-active');

		if (target.matches('.slick-dots>li')) {
			dot.forEach((elem, index) => {
				if (elem === target) {
					currentSlide = index;
				}
			});
		}

		if (currentSlide >= slide.length) {
			currentSlide = 0;
		}

		if (currentSlide < 0) {
			currentSlide = slide.length - 1;
		}

		nextSlide(table, currentSlide, 'active');
		nextSlide(slide, currentSlide, 'item-active');
		nextSlide(dot, currentSlide, 'slick-active');
	});

	topSlider.addEventListener('mouseover', (event) => {
		if (event.target.matches('.slick-dots>li')) {
			stopSlide();
		}
	});

	topSlider.addEventListener('mouseout', (event) => {
		if (event.target.matches('.slick-dots>li')) {
			startSlide();
		}
	});

	startSlide();
};

export default slider;

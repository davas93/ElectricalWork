const carousel = () => {
	const carouselWrapper = document.querySelector('.services-elements'),
		carousel = carouselWrapper.querySelector('.services-carousel'),
		slide = carousel.querySelectorAll('.carousel-item'),
		arrows = document.querySelector('.services-arrow');

	let slidesShow = 3,
		slideWidth = 100 / slidesShow,
		position = 0;

	const prevSlider = () => {
		if (position <= 0) {
			position = slide.length - slidesShow;
		}
		if (position > 0) {
			--position;

			carousel.style.transform = `translateX(-${position * slideWidth}%)`;
		}
	};

	const nextSlider = () => {
		if (position < slide.length - slidesShow) {
			++position;
			if (position >= slide.length - slidesShow) {
				position = 0;
			}
			carousel.style.transform = `translateX(-${slideWidth * position}%)`;
		}
	};

	arrows.addEventListener('click', (event) => {
		let target = event.target;

		if (target.matches('.arrow-left')) {
			prevSlider();
		}

		if (target.matches('.arrow-right')) {
			nextSlider();
		}
	});
};

export default carousel;

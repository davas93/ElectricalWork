const carousel = () => {
	const carouselWrapper = document.querySelector('.services-elements'),
		carousel = carouselWrapper.querySelector('.services-carousel'),
		slide = carousel.querySelectorAll('.carousel-item'),
		arrows = document.querySelector('.services-arrow');

	const getCarousel = () => {
		if (window.innerWidth >= 992) {
			slidesShow = 3;
			carousel.style.transform = ``;
		}

		if (window.innerWidth < 992) {
			slidesShow = 2;
			carousel.style.transform = ``;
		}

		if (window.innerWidth < 768) {
			slidesShow = 1;
			carousel.style.transform = ``;
		}

		let slidesShow;
		let slideWidth = 100 / slidesShow,
			position = 0;

		const prevSlider = () => {
			if (position <= 0) {
				position = slide.length + 1 - slidesShow;
			}
			if (position > 0) {
				--position;

				carousel.style.transform = `translateX(-${
					position * slideWidth
				}%)`;
			}
		};

		const nextSlider = () => {
			if (position < slide.length + 1 - slidesShow) {
				++position;
				if (position >= slide.length + 1 - slidesShow) {
					position = 0;
				}
				carousel.style.transform = `translateX(-${
					slideWidth * position
				}%)`;
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

	getCarousel();

	window.addEventListener('resize', () => {
		getCarousel();
	});
};

export default carousel;

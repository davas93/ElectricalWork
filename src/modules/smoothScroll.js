const smoothScroll = () => {
	const links = document.querySelectorAll('.section-link'),
		btnUp = document.querySelector('.up');

	links.forEach((item) => {
		item.addEventListener('click', (event) => {
			event.preventDefault();

			let blockID = item.getAttribute('href');
			document.querySelector(blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		});
	});

	btnUp.addEventListener('click', (event) => {
		event.preventDefault();

		window.scrollTo({
			behavior: 'smooth',
			top: 0,
		});
	});

	document.addEventListener('scroll', () => {
		if (window.scrollY >= document.getElementById('services').offsetTop) {
			btnUp.classList.add('animate__animated', 'animate__backInRight');
			btnUp.style.display = 'block';
		} else {
			btnUp.style.display = '';
		}
	});
};

export default smoothScroll;

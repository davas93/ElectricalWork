const smoothScroll = () => {
	document.addEventListener('click', (event) => {
		event.preventDefault();
		let target = event.target;

		if (
			target.matches('.mobile-menu>ul>li>a') ||
			target.matches('.top-menu>ul>li>a')
		) {
			let blockID = target.getAttribute('href');

			document.querySelector(blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}

		if (target.matches('.up')) {
			window.scrollTo({
				behavior: 'smooth',
				top: 0,
			});
		}
	});

	const btnUp = document.querySelector('.up');

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

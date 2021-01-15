const toggleMenu = () => {
	const menu = document.querySelector('.mobile-menu'),
		menuBtn = document.querySelector('.mob-menu-btn'),
		overlay = document.querySelector('.overlay');

	menuBtn.addEventListener('click', () => {
		menu.classList.add('open');
	});

	menu.addEventListener('click', (event) => {
		let target = event.target;

		if (
			target.matches('.mobile-menu-close') ||
			target.matches('.callback-btn') ||
			target.matches('.mobile-menu>ul>li>a')
		) {
			menu.classList.remove('open');
		}
		return;
	});

	overlay.addEventListener('click', () => {
		menu.classList.remove('open');
	});
};

export default toggleMenu;

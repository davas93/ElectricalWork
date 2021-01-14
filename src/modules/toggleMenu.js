const toggleMenu = () => {
	const menu = document.querySelector('.mobile-menu');

	document.addEventListener('click', (event) => {
		let target = event.target;

		if (target.closest('.mob-menu-btn')) {
			menu.classList.add('open');
		}

		if (
			target.matches('.mobile-menu-close') ||
			target.matches('.overlay') ||
			target.matches('.callback-btn') ||
			target.matches('.mobile-menu>ul>li>a')
		) {
			menu.classList.remove('open');
		}
	});
};

export default toggleMenu;

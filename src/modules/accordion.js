const accordion = () => {
	const accordion = document.querySelector('.accordeon');

	accordion.addEventListener('click', (event) => {
		let target = event.target;

		if (target.matches('.element>.title')) {
			const parent = target.parentNode,
				content = parent.querySelector('.element-content');

			if (
				parent.classList.contains('active') &&
				content.classList.contains('active')
			) {
				parent.classList.remove('active');
				content.classList.remove('active');
			} else {
				document.querySelectorAll('.element').forEach((child) => {
					child.classList.remove('active');
				});
				document
					.querySelectorAll('.element-content')
					.forEach((child) => {
						child.classList.remove('active');
					});

				parent.classList.toggle('active');
				content.classList.toggle('active');
			}
		}
	});
};

export default accordion;

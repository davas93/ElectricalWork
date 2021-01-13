const modal = () => {
	const modalCallback = document.getElementById('callback'),
		modalOverlay = document.querySelector('.modal-overlay');

	const openModal = () => {
		modalCallback.style.display = 'block';
		modalCallback.classList.add('animate__animated', 'animate__fadeIn');
		modalOverlay.style.display = 'block';
	};

	const closeModal = () => {
		modalCallback.style.display = '';
		modalOverlay.style.display = '';
	};

	document.addEventListener('click', (event) => {
		let target = event.target;

		if (target.matches('.fancyboxModal')) {
			openModal();
		}

		if (
			target.closest('.modal-close') ||
			target.matches('.modal-overlay')
		) {
			closeModal();
		}
	});
};

export default modal;

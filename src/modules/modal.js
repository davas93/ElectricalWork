const modal = () => {
	const modalCallback = document.getElementById('callback'),
		modalOverlay = document.querySelector('.modal-overlay'),
		link = document.querySelectorAll('.fancyboxModal'),
		closeBtn = modalCallback.querySelector('.modal-close');

	const openModal = () => {
		modalCallback.style.display = 'block';
		modalCallback.classList.add('animate__animated', 'animate__fadeIn');
		modalOverlay.style.display = 'block';
	};

	const closeModal = () => {
		modalCallback.style.display = '';
		modalOverlay.style.display = '';
	};

	link.forEach((item) => {
		item.addEventListener('click', (event) => {
			event.preventDefault();

			openModal();
		});
	});

	closeBtn.addEventListener('click', () => {
		closeModal();
	});

	modalOverlay.addEventListener('click', () => {
		closeModal();
	});
};

export default modal;

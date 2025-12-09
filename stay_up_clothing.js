(function () {

	let menu = document.querySelector('.mobile-menu-icon');
	let overlay = document.querySelector('.overlay');

	menu.addEventListener('click', function () {
		this.classList.toggle('change');
		overlay.classList.toggle('height');
	});

}());
(function () {


	let menu = document.querySelector('.mobile-menu-icon');
	let overlay = document.querySelector('.overlay');
	let portraitViewStatement = document.querySelector('.home-body h1.portrait-view-statement');

	menu.addEventListener('click', function () {
		this.classList.toggle('change');
		overlay.classList.toggle('height');
		portraitViewStatement.classList.toggle('hide');
	});

	let h1 = document.querySelector('h1.desktop');

	if (document.documentElement.clientHeight < 390) {
		h1.setAttribute('id', 'ie-specificity');
	} else {
		h1.removeAttribute('ie-specificity');
	}


	window.addEventListener('resize', function () {
		let header = document.querySelector('h1.desktop');
		if (document.documentElement.clientHeight < 390) {
			header.setAttribute('id', 'ie-specificity');
		} else {
			header.removeAttribute('id');
		}

		 if (document.documentElement.clientWidth > 767 && overlay.classList.contains('height')) {
		 	portraitViewStatement.classList.remove('hide');
		 	console.log('removed hide');
		 } 
		 if (document.documentElement.clientWidth < 767 && overlay.classList.contains('height')) {
			portraitViewStatement.classList.add('hide');
			console.log('add hide');
		} 
		 
	});

}());
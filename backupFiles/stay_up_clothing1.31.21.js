(function () {


	let menu = document.querySelector(".mobile_menu_icon");
	let overlay = document.querySelector(".overlay");

	menu.addEventListener("click", function () {

		this.classList.toggle("change");
		overlay.classList.toggle("height");

	});

	let h1 = document.querySelector("h1.desktop");

	if (document.documentElement.clientHeight < 390) {
		h1.setAttribute('id', 'ie_specificity');
	} else {
		h1.removeAttribute('ie_specificity');
	}


	window.addEventListener("resize", function () {
		let header = document.querySelector("h1.desktop");
		if (document.documentElement.clientHeight < 390) {
			header.setAttribute('id', 'ie_specificity');
			console.log('yes');

		} else {
			header.removeAttribute('id');

		}
	})






	// let body = document.querySelector("body");
	// let bodyAfter = document.querySelector("body:after");
	// let overlayContent = document.querySelector(".overlay-content");
	// let overlayContentLinks = document.querySelectorAll(".overlay-content a");

	// if (document.documentElement.clientHeight < 300) {

	// 	overlayContent.classList.add("raise-content");
	// 	for (let links of overlayContentLinks) {
	// 		links.classList.add("raise-content");
	// 	}

	// 	body.classList.add("make_scroll");


	// } else {

	// 	overlayContent.classList.remove("raise-content");
	// 	for (let links of overlayContentLinks) {
	// 		links.classList.remove("raise-content");
	// 	}

	// 	body.classList.remove("make_scroll");

	// }

	// window.addEventListener("resize", function () {

	// 	if (document.documentElement.clientHeight < 300) {
	// 		overlayContent.classList.add("raise-content");
	// 		for (let links of overlayContentLinks) {
	// 			links.classList.add("raise-content");
	// 		}
	// 		body.classList.add("make_scroll");


	// 	} else {
	// 		overlayContent.classList.remove("raise-content");
	// 		for (let links of overlayContentLinks) {
	// 			links.classList.remove("raise-content");
	// 		}
	// 		body.classList.remove("make_scroll");


	// 	}


	// });


}());
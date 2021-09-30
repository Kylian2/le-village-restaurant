const nav = document.querySelector('#main-header');

const phone = document.querySelector('#phone');

window.addEventListener('scroll', () => {
	if (window.scrollY > 1000) {
		nav.classList.add('main-header-scroll');
	}
	else{
		nav.classList.remove('main-header-scroll');
		nav.classList.add('main-header-top-scroll');
	}
});

phone.addEventListener('mouseover', () => {
	phone.classList.add('phone-hover');
});

phone.addEventListener('mouseout', () => {
	phone.classList.remove('phone-hover');
	phone.classList.add('transition');
});


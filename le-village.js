const mainHeader = document.querySelector('#main-header');
const hamburgerMenu= document.querySelector('#hamburger-menu')
hamburgerActiv = false

window.addEventListener('scroll', () => {
	if (window.scrollY > 1000 & hamburgerActiv == false) {
		mainHeader.classList.add('main-header-scroll');
		hamburger.classList.add('pos2');
	}
	else{
		mainHeader.classList.remove('main-header-scroll');
		mainHeader.classList.add('main-header-top-scroll');
		hamburger.classList.remove('pos2');
	}
});

const phone = document.querySelector('#phone');

phone.addEventListener('mouseover', () => {
	phone.classList.add('phone-hover');
});

phone.addEventListener('mouseout', () => {
	phone.classList.remove('phone-hover');
	phone.classList.add('transition');
});

const hamburger = document.querySelector('#hamburger')
var clickCount = 0

hamburger.addEventListener('click', () => {
	if (clickCount == 0){
		mainHeader.classList.add('big')
		mainHeader.classList.remove('main-header-scroll');
		hamburgerMenu.classList.add('show')
		hamburger.classList.add('pos3');
		clickCount = 1
		hamburgerActiv = true
	}
	else{
		mainHeader.classList.remove('big')
		hamburgerActiv = false
		if (window.scrollY > 1000) {
			hamburgerMenu.classList.remove('show')
			mainHeader.classList.add('main-header-scroll');
			hamburger.classList.remove('pos3');

		}
		else{
			mainHeader.classList.remove('main-header-scroll');
			mainHeader.classList.add('main-header-top-scroll');
			hamburgerMenu.classList.remove('show')
			hamburger.classList.remove('pos3');

	}
		clickCount = 0
	}
});


function showResponsiveMenu() {
    var menu = document.getElementById("topnav_responsive_menu");
    var icon = document.getElementById("topnav_hamburger_icon");
    var root = document.getElementById("root");
    if (menu.className === "") {
        menu.className = "open";
        icon.className = "open";
        root.style.overflowY = "hidden";
    } else {
        menu.className = "";                    
        icon.className = "";
        root.style.overflowY = "";
    }
}
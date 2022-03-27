const menuselector = document.querySelector('.navbar .menu'),
	  burgerSelector = document.querySelector('.burger_menu');


/* const burger = (menuSelector, burgerSelector) => {
	const menuElem = document.querySelector(menuSelector),
		  burgerElem = document.querySelector(burgerSelector);

    menuElem.style.display = 'none';
	
	burgerElem.addEventListener('click', () => {
		if(menuElem.style.display == 'none' && window.screen.availWidth < 993) {
			menuElem.style.display = 'flex';
			burgerElem.classList.add('burger_menu_active');
		} else {
		menuElem.style.display = 'none';

		}
	});

	window.addEventListener('resize', () => {
		if (window.screen.availWidth > 992) {
			menuElem.style.display == 'none'; 
		}
	});
} */
/* burgerElem.addEventListener('click', () => {
	hamburger.classList.toggle('hamburger_active');
	menu.classList.toggle('menu_active');
}); */
/* export default burger; */

const menu = document.querySelector('.navbar .menu'),
    menuItem = document.querySelectorAll('.menu > li > a > span'),
    hamburger = document.querySelector('.burger_menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('burger_menu_active');
        menu.classList.toggle('menu_active');
		menuitem.removeAttribute('data-description'); 
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    });

	/* window.addEventListener('resize', () => {
		if (window.screen.availWidth < 993) {
			menuitem.removeAttribute('data-description', menuItem); 
		}
	}); */
export const   menu = document.querySelector('.navbar .menu'),
		menuItem = document.querySelectorAll('.menu > li > a > span'),
		hamburger = document.querySelector('.burger_menu');


hamburger.addEventListener('click', () => {

	hamburger.classList.toggle('burger_menu_active');
	menu.classList.toggle('menu_active');
});
    
menuItem.forEach(item => {

    item.addEventListener('click', () => {
    hamburger.classList.toggle('burger_menu_active');
    menu.classList.toggle('menu_active');
    });
});

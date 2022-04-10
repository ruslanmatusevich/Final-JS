
 import {imageOut} from '../main/about/scriptImg.js';
export const pageUp = document.querySelector('.pageup');

window.addEventListener('scroll', function() {
	
	if (window.pageYOffset > document.documentElement.clientHeight && document.documentElement.clientWidth > 575){
		pageUp.style.display = 'block';
		
	} else {
		pageUp.style.display = 'none';
	 }
});
	
window.addEventListener(`resize`, function() {
	
	if (document.documentElement.clientWidth > 575 && window.pageYOffset > document.documentElement.clientHeight){
		pageUp.style.display = 'block';

	} else {
		pageUp.style.display = 'none';
	}
});
	
pageUp.onclick = function() {

	window.scrollTo(0, 0); 
};

	


    

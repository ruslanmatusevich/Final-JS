
export let slideIndex = 1,
    slides = document.querySelectorAll('.slider_item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'); 


    if (document.location.href.includes('index.html')) {

    
function showSlides(num) {

    if (num > slides.length) {
        slideIndex = 1;
    }

    if (num < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((item) => item.style.display = 'none');
    slides[slideIndex - 1].style.display = 'flex';
}    



    showSlides(slideIndex);



function anotherSlides(num) {
    showSlides(slideIndex += num);
}

prev.addEventListener('click', function() {
    anotherSlides(-1);   
});

next.addEventListener('click', function() {
    anotherSlides(1);   
});
    }
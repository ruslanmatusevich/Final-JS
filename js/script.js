/* localStorage.setItem('ruslan', 'RUS9257700lan'); */
/* console.log(localStorage.getItem('ruslan')); */
window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let from = document.getElementById('from'),
        where = document.getElementById('where'),
        payment = document.getElementById('payment'),
        weight = document.querySelectorAll('.counter_block_input')[0],
        distance = document.getElementById('distance'),
        totalSum = document.getElementById('total'),
        total = 0,
        weightSum = 0,
        totalFrom = 0,
        totalWhere = 0,
        totalDistance = 0;
        
//calculator
        distance.innerHTML = 0;
        totalSum.innerHTML = 0;

        weight.addEventListener('change', function() {
            weightSum = +this.value;
            total = (1 + weightSum/100);
        });

        

        from.addEventListener('change', function () {
           totalFrom = this.options[this.selectedIndex].value;
             });

        where.addEventListener('change', function () {
           
            totalWhere = this.options[this.selectedIndex].value;
             totalDistance = (totalFrom - totalWhere) > 0 ? (totalFrom - totalWhere) : ((totalFrom - totalWhere) * (-1));
             distance.innerHTML = totalDistance;
             });

             payment.addEventListener('change', function () {
                if (weight.value == '') {
                    totalSum.innerHTML = 0;
                } else {
                    /* let a = total; */
                    totalSum.innerHTML = ((total * this.options[this.selectedIndex].value) * totalDistance).toFixed();
                }
            });

            //tabs

            let tab = document.querySelectorAll('.info_header_tab'),
                info = document.querySelector('.info_header'),
                tabContent = document.querySelectorAll('.info_tabcontent');
                
                

               
                


                function hideTabContent(a) {
                    for ( let i = a; i < tabContent.length; i++) {
                         tabContent[i].classList.remove('show');
                         tabContent[i].classList.add('hide');
                    }
                }

                hideTabContent(1);

                function showTabContent(b) {
                    if (tabContent[b].classList.contains('hide')) {
                        tabContent[b].classList.remove('hide');
                        tabContent[b].classList.add('show');
                    }
                }

                info.addEventListener('click', function(event) {
                    let target = event.target;
                    if (target && target.classList.contains('info_header_tab')) {
                        for (let i = 0; i < tab.length; i++) {
                             if (target == tab[i]) {
                                hideTabContent(0);
                                showTabContent(i);
                                break;
                             }
                        }
                    }
                });
        // slider

        let slideIndex = 1,
            slides = document.querySelectorAll('.slider_item'),
            prev = document.querySelector('.prev'),
            next = document.querySelector('.next'); 

        showSlides(slideIndex);

        function showSlides(n) {
            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }
            slides.forEach((item) => item.style.display = 'none');

            slides[slideIndex - 1].style.display = 'grid';
        }    

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }
        /* function currentSlide(n) {
            showSlides(slideIndex = n);
        } */
        prev.addEventListener('click', function() {
            plusSlides(-1);   
        });
        next.addEventListener('click', function() {
            plusSlides(1);   
        });
});




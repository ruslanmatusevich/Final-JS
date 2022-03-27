/* localStorage.setItem('ruslan', 'RUS9257700lan'); */
/* console.log(localStorage.getItem('ruslan')); */
window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let from = document.getElementById('from'),
        where = document.getElementById('where'),
        payment = document.getElementById('payment'),
        weight = document.querySelector('.counter_block_input'),
        distance = document.getElementById('distance'),
        totalSum = document.getElementById('total'),
        inBasket = document.getElementById('in_basket'),
        calc = document.getElementById('calc'),
        total = 0,
        weightSum = 0,
        totalFrom  = 0,
        totalWhere = 0,
        totalDistance = 0,
        calculation ,
        basket = {},
        curPayment,
        fromText,
        paymentText,
        whereText;

        
//calculator
        distance.innerHTML = 0;
        totalSum.innerHTML = 0;

        weight.addEventListener('change', function() {
            weightSum = +this.value;
            total = (1 + weightSum / 100);
        });

        

        from.addEventListener('change', function () {
            fromText = this.options[this.selectedIndex];
           totalFrom = fromText.value;
           
           if ( (totalFrom < 0 ) || (totalWhere < 0 )) {
            distance.innerHTML = 0;
        } else {
            totalDistance = (totalFrom - totalWhere) > 0 ? (totalFrom - totalWhere) : ((totalFrom - totalWhere) * (-1));
            distance.innerHTML = totalDistance;
        }
             });

        where.addEventListener('change', function () {
           whereText = this.options[this.selectedIndex];
            totalWhere = whereText.value;
            

            if ( (totalFrom < 0 ) || (totalWhere < 0 )) {
                distance.innerHTML = 0;
            } else {
                totalDistance = (totalFrom - totalWhere) > 0 ? (totalFrom - totalWhere) : ((totalFrom - totalWhere) * (-1));
                distance.innerHTML = totalDistance;
            }
             });

             payment.addEventListener('change', function () {
                paymentText = this.options[this.selectedIndex];
                curPayment =  paymentText.value;
                });

                calc.addEventListener('click', function() {
                    if (weight.value && curPayment !== 0 && totalDistance !== 0) {
                        totalSum.innerHTML = ((total * curPayment) * totalDistance).toFixed();
                    } else {
                        totalSum.innerHTML = 0;
                        }
                });
                
 // берем данные из формы

                inBasket.addEventListener('click', function () {

                    basket.route = `${fromText.textContent} - ${whereText.textContent}`;
                    /* basket.where = whereText.textContent; */
                    basket.distance = totalDistance;
                    basket.weight = weightSum;
                    basket.payment = paymentText.textContent;
                    basket.total = totalSum.textContent;
                    
                    calculation = localStorage.length;
                    console.log(calculation);

                    localStorage.setItem(calculation, JSON.stringify(basket));
                         
                    }
                  
                );
                

            //tabs

            let tab = document.querySelectorAll('.info_header_tab'),
                info = document.querySelector('.info_header'),
                tabContent = document.querySelectorAll('.info_tabcontent');

                
                
                function hideTabContent(currentTab) {
                    for ( let i = currentTab; i < tabContent.length; i++) {
                         tabContent[i].classList.remove('show');
                         tabContent[i].classList.add('hide');
                    }
                }
                    /* tabContent.forEach((item) => {item.classList.remove('show');
                            item.classList.add('hide');
                    кроме первого
                    });
                } */
                hideTabContent(1);

                function showTabContent(currentTab) {
                    if (tabContent[currentTab].classList.contains('hide')) {
                        tabContent[currentTab].classList.remove('hide');
                        tabContent[currentTab].classList.add('show');
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

        function showSlides(num) {
            if (num > slides.length) {
                slideIndex = 1;
            }
            if (num < 1) {
                slideIndex = slides.length;
            }
            
            slides.forEach((item) => item.style.display = 'none');
            /* if (document.documentElement.clientWidth < 768) {
                slides[slideIndex - 1].style.display = 'flex';


            } else {
                slides[slideIndex - 1].style.display = 'grid';

            } */
            slides[slideIndex - 1].style.display = 'flex';

        }    

        function anotherSlides(num) {
            showSlides(slideIndex += num);
        }
        /* function currentSlide(n) {
            showSlides(slideIndex = n);
        } */
        prev.addEventListener('click', function() {
            anotherSlides(-1);   
        });
        next.addEventListener('click', function() {
            anotherSlides(1);   
        });
});




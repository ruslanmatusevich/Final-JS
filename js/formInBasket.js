import {from} from './calc.js';

export let calculation ,
           inBasket = document.getElementById('in_basket'),
           basket = {};
        
           /* if (document.location.href.includes('index.html')) { */
inBasket.addEventListener('click', function () {
  
    basket.route = `${fromText.textContent} - ${whereText.textContent}`;
    basket.distance = totalDistance;
    basket.weight = weightSum;
    basket.payment = paymentText.textContent;
    basket.total = totalSum.textContent;

    calculation = localStorage.length;
    localStorage.setItem(calculation, JSON.stringify(basket));
});
   /*  } */


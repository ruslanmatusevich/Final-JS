
let calculation ,
    basket = {};
        
inBasket.addEventListener('click', function () {
  
    basket.route = `${fromText.textContent} - ${whereText.textContent}`;
    basket.distance = totalDistance;
    basket.weight = weightSum;
    basket.payment = paymentText.textContent;
    basket.total = totalSum.textContent;

    calculation = localStorage.length;
    localStorage.setItem(calculation, JSON.stringify(basket));
});



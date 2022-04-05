
let from = document.getElementById('from'),
    where = document.getElementById('where'),
    payment = document.getElementById('payment'),
    weight = document.querySelector('.weight'),
    distance = document.getElementById('distance'),
    totalSum = document.getElementById('total'),
    inBasket = document.getElementById('in_basket'),
    calc = document.getElementById('calc'),
    enter = document.querySelector('.enter'),
    total = 0,
    weightSum = 0,
    totalFrom  = 0,
    totalWhere = 0,
    totalDistance = 0,  
    curPayment = 0,
    fromText,
    paymentText,
    whereText;
    
    distance.textContent = 0;
    totalSum.textContent = 0;


weight.addEventListener('change', function() {

    weightSum = +this.value;
    total = (1 + weightSum / 100);
    totalSum.textContent = 0;
});

from.addEventListener('change', function () {

    fromText = this.options[this.selectedIndex];
    totalFrom = fromText.value;
    totalSum.textContent = 0;

    if ((totalFrom < 0 ) || (totalWhere < 0 )) {

        distance.textContent = 0;

    } else {

        totalDistance = (totalFrom - totalWhere) > 0 ? (totalFrom - totalWhere) : ((totalFrom - totalWhere) * (-1));
        distance.textContent = totalDistance;
    }
});

where.addEventListener('change', function () {

    whereText = this.options[this.selectedIndex];
    totalWhere = whereText.value;
    totalSum.textContent = 0;

    if ( (totalFrom < 0 ) || (totalWhere < 0 )) {

        distance.textContent = 0;

    } else {

        totalDistance = (totalFrom - totalWhere) > 0 ? (totalFrom - totalWhere) : ((totalFrom - totalWhere) * (-1));
        distance.textContent = totalDistance;
    }
});

payment.addEventListener('change', function () {

    paymentText = this.options[this.selectedIndex];
    curPayment =  paymentText.value;
    totalSum.textContent = 0;
});

calc.addEventListener('click', function() {

    if ((localStorage.length == 0))  {

        enter.style.display = 'block';
        return false;

    } else {

        if ((weightSum > 0) && (curPayment != 0) && (totalDistance != 0)) {

            totalSum.textContent = ((total * curPayment) * totalDistance).toFixed();

        } else {

            totalSum.textContent = 0;
        }
    }
});
    
                

                
                
                

const boxBask = document.querySelector('.wrapDiv .container');
const wrapDiv = document.querySelector('.wrapDiv');
const names = ['маршрут', 'расстояние', 'вес', 'тип оплаты', 'итого'];
const valuesClass = ['route', 'distance', 'weight', 'pay', 'money', 'delete'];
let newDivBask;

newDivBask = document.createElement('div');

for (let i = 0; i < names.length; i++) {

    let el = names[i];
    let childDivBask;
    let childSpanBask;
        
    childDivBask = document.createElement('div');
    childDivBask.classList.add(valuesClass[i]);
    childSpanBask = document.createElement('span');
    childSpanBask.textContent = el;
    childDivBask.appendChild(childSpanBask);
    newDivBask.appendChild(childDivBask);
};

boxBask.appendChild(newDivBask);
    
let arr = [];

for (let i = 0; i < localStorage.length; i++) {

    newDivBask = document.createElement('div');

    let key = localStorage.key(i);

    if (isFinite(key)) {

        let obj = JSON.parse(localStorage.getItem(key));

        for (let key in obj)  {

            let el = obj[key];
            arr.push(el);
        };

        for (let i = 0; i < arr.length; i++) {

            let el = arr[i];
                
            childDivBask = document.createElement('div');
            childDivBask.classList.add(valuesClass[i]);
            childSpanBask = document.createElement('span');
            childSpanBask.textContent = el;
            childDivBask.appendChild(childSpanBask);
            newDivBask.appendChild(childDivBask);
        };

    boxBask.appendChild(newDivBask);
    arr = [];
        
    }
};




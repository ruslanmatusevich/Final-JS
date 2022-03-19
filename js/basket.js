//делаем корзину
const boxBask = document.querySelector('.basket .container');
const names = ['маршрут', 'расстояние', 'вес', 'тип оплаты', 'итого', 'действие'];
let valuesClass = ['route', 'distance', 'weight', 'pay', 'money', 'delete'];
let childDivBask;
let childSpanBask;


for (let i = 0; i < names.length; i++) {
    let el = names[i];
    
    childDivBask = document.createElement('div');
    childDivBask.classList.add(valuesClass[i]);
    childSpanBask = document.createElement('span');
    childSpanBask.innerHTML = el;
    childDivBask.appendChild(childSpanBask);
    /* childSpanBask = document.createElement('span');
    childDivBask.appendChild(childSpanBask); */
    boxBask.appendChild(childDivBask);


};
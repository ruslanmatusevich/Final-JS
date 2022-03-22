//делаем корзину
const boxBask = document.querySelector('.wrapDiv .container');
const wrapDiv = document.querySelector('.wrapDiv');
const names = ['маршрут', 'расстояние', 'вес', 'тип оплаты', 'итого'];
let valuesClass = ['route', 'distance', 'weight', 'pay', 'money', 'delete'];
let childDivBask;
let childSpanBask;
let newDivBask;


newDivBask = document.createElement('div');

    for (let i = 0; i < names.length; i++) {
        let el = names[i];
        

        childDivBask = document.createElement('div');
        childDivBask.classList.add(valuesClass[i]);
        childSpanBask = document.createElement('span');
        childSpanBask.innerHTML = el;
        childDivBask.appendChild(childSpanBask);
        
        
       // boxBask.appendChild(childDivBask);
        newDivBask.appendChild(childDivBask);

    };

        boxBask.appendChild(newDivBask);
    
    


    let arr = [];
    let arrAll = [];

    
       /*  wrapDiv.appendChild(newDivBask); */

for (let i = 0; i < localStorage.length; i++) {

    newDivBask = document.createElement('div');

    let key = localStorage.key(i);
    if (isFinite(key)) {
        let obj = JSON.parse(localStorage.getItem(key));
        /* console.log(obj); */
        
        for (let key in obj)  {
            let el = obj[key];
            
            arr.push(el);
            };

            for (let i = 0; i < arr.length; i++) {
                let el = arr[i];
                
                childDivBask = document.createElement('div');
                childDivBask.classList.add(valuesClass[i]);
                childSpanBask = document.createElement('span');
                childSpanBask.innerHTML = el;
                childDivBask.appendChild(childSpanBask);
        
        /* wrapDiv = document.createElement('div');
        wrapDiv.appendChild(childDivBask); */
        newDivBask.appendChild(childDivBask);
            };
            /* wrapDiv.appendChild(boxBask); */
            boxBask.appendChild(newDivBask);
            arr = [];
        /* arrAll.push(arr); */
    /* console.log(key); */
}
};
console.log(arrAll);



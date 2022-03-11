let elements = ['Главная', 'Сервис', 'О нас', 'Новости', 'Контакты'];
let wrapper = document.querySelector('.navbar .menu');


for( let el  of elements) {
    let childLi = document.createElement('li');
    let childLink = document.createElement('a');
    let childSpan = document.createElement('span');
    childSpan.innerHTML = el;
    childSpan.setAttribute('data-description', el);
    childLink.appendChild(childSpan);
    childLi.appendChild(childLink);
    wrapper.appendChild(childLi);
    if (el === 'Главная') {
        childLi.classList.add('active');
    }

}



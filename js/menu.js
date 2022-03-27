let elements = ['Главная', 'Сервис', 'О нас', 'Новости', 'Контакты'];
let wrapper = document.querySelector('.navbar .menu');
let pageName = ['index.html', 'services.html', 'about.html', 'news.html', 'contacts.html'];
let childLi;
let childLink;
let childSpan;

for (let i = 0; i < elements.length; i++) {
    let el = elements[i];
    let value = pageName[i];
        
    childLi = document.createElement('li');

    childLink = document.createElement('a');
    childLink.setAttribute('href', pageName[i]);
    childLink.classList.add('menu_link');

    childSpan = document.createElement('span');
    childSpan.setAttribute('data-description', el);
    childSpan.innerHTML = el;
    childLink.appendChild(childSpan);

    childLi.appendChild(childLink);
    wrapper.appendChild(childLi);

    if (document.location.href.includes(value)) {
        childLi.classList.add('active');
    }
}











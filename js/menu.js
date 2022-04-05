

let elements = ['Главная', 'Сервис', 'О нас', 'Новости', 'Контакты'],
    wrapper = document.querySelector('.navbar .menu'),
    pageName = ['index.html', 'services.html', 'about.html', 'news.html', 'contacts.html'],
    childLi,
    childLink,
    childSpan;

for (let i = 0; i < elements.length; i++) {

    let el = elements[i];
    let value = pageName[i];
        
    childLi = document.createElement('li');

    childLink = document.createElement('a');
    childLink.setAttribute('href', pageName[i]);
    childLink.classList.add('menu_link');

    childSpan = document.createElement('span');
    childSpan.setAttribute('data-description', el);
    childSpan.textContent = el;

    childLink.appendChild(childSpan);
    childLi.appendChild(childLink);
    wrapper.appendChild(childLi);

    if (document.location.href.includes(value)) {
        childLi.classList.add('active');
    }
}
    













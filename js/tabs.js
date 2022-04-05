
const tab = document.querySelectorAll('.info_header_tab'),
    info = document.querySelector('.info_header'),
    tabContent = document.querySelectorAll('.info_tabcontent');

function hideTabContent(currentTab) {

    for (let i = currentTab; i < tabContent.length; i++) {

         tabContent[i].classList.remove('show');
         tabContent[i].classList.add('hide');
    }
}
    
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

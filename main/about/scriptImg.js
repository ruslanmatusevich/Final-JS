import {images} from './images.js';

export const imageOut = document.querySelector('.image_out');
    const  carModel = document.querySelector('.car_model'),
      carPower = document.querySelector('.car_power'),
      carPayload = document.querySelector('.car_payload'),
      carSpeed = document.querySelector('.car_speed'),
      carVolume = document.querySelector('.car_volume'),
      more = document.querySelector('.about_descr_item_right .more > a'),
      carWrap = document.querySelector('.info_car_wrap');
      
       /* const setListener = (element, type, handler) => {
           if(element) {
               return;
           }
           element.addEventListener(type, handler);
           return () => {
               element.removeEventListener(type,handler);
           };
       } */
if(more) {
    more.addEventListener('click' , showMore);


 
 function showMore() {

carWrap.style.display = 'block';

};

/* setListener(more, 'click', () => {
    carWrap.style.display = 'block';
}); */

for (let key in images) {

    let img = document.createElement('img');
     img.setAttribute('data-key', key);
     img.src = './main/about/img/'+key+'.jpg';
     imageOut.append(img);

    }
};

if (imageOut) {


imageOut.addEventListener('click', showInfo);

function showInfo(event) {
        
    const key = event.target.dataset['key'];
    if (key === undefined) {
        return true;
    }
    
    carModel.textContent = images[key]['model'];
    carPower.textContent = images[key]['power'];
    carPayload.textContent = images[key]['payload'];
    carSpeed.textContent = images[key]['speed'];
    carVolume.textContent = images[key]['volume'];

    document.querySelectorAll('.image_out img').forEach(item => item.classList.remove('active'));
    event.target.classList.add('active');
}
}


const imageOut = document.querySelector('.image_out'),
      carModel = document.querySelector('.car_model'),
      carPower = document.querySelector('.car_power'),
      carPayload = document.querySelector('.car_payload'),
      carSpeed = document.querySelector('.car_speed'),
      carVolume = document.querySelector('.car_volume'),
      more = document.querySelector('.about_descr_item_right .more > a'),
      carWrap = document.querySelector('.info_car_wrap');
      
more.addEventListener('click' , function() {

carWrap.style.display = 'block';

});

for (let key in images) {

    let img = document.createElement('img');
     img.setAttribute('data-key', key);
     img.src = './main/about/img/'+key+'.jpg';
     imageOut.append(img);

    }

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


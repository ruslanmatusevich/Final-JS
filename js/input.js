
export let input = document.querySelector('.input > a'), 
    entrance = document.querySelector('.input'),
    hello = document.querySelector('.hello'),
    helloText = document.querySelector('.hello_text'),
    out = document.querySelector('.out'),
    outText = document.querySelector('.out > a'),
    loginAlert = document.querySelector('.login_alert'),
    loginAlertText = document.querySelector('.login_alert > span'),
    passwordAlert = document.querySelector('.password_alert'),
    passwordAlertText = document.querySelector('.password_alert > span'),
    login = document.querySelector('.login'),
    inputName = document.querySelector('.login_name'),
    inputPassword = document.querySelector('.login_password'),
    checkbox = document.getElementById('rememberMe'),
    contLogin = document.querySelector('.container_login'),
    loginName,
    password;
    // открыли окно, посмотрели - дождь)))

window.addEventListener ('DOMContentLoaded', function() {
    showName();
});

function showName() {

    if ((localStorage.length == 0))  {
        entrance.style.display = 'flex';
        input.textContent = "Войти";

    } else {

        for (let i = 0; i < localStorage.length; i++) {

                    let key = localStorage.key(i);

                if (localStorage.getItem(key).startsWith("{")) continue;
               

                hello.style.display = 'flex';
                helloText.textContent = `Привет ${key}`;
                out.style.display = 'flex';
                outText.textContent = 'Выйти';
                entrance.style.display = 'none';
        }
    }
};

entrance.addEventListener('click', function() {
    document.querySelector('.login').style.display = 'block';
    });
//выход
out.addEventListener('click', function() {
    localStorage.clear();
    output();
});

function output () {
    entrance.style.display = 'flex';
    hello.style.display = 'none';
    out.style.display = 'none';
    window.location.reload (); 
}
//проверка имени
function validateName(str) {

    if (str == null || str == '') {

        loginAlertText.textContent = ('введите имя');
        inputName.addEventListener('click', function() {

            loginAlertText.textContent = ('');
        });

        return false; 
    }
   return true;
}
//проверка пароля
function validatePassword(str) {

    if (str == null || str == '') {
        passwordAlertText.textContent = ('введите пароль');

        inputPassword.addEventListener('click', function() {
            passwordAlertText.textContent = ('');
        });
        return false;
    }

    if (str.length < 7) {
        passwordAlertText.textContent = ('пароль должен содержать минимум 8 символов');
        inputPassword.addEventListener('click', function() {
            passwordAlertText.textContent = ('');
        });
        return false;
    }

    if (str.search(/[a-z]/) === -1) {
        passwordAlertText.textContent = ('пароль должен содержать английские прописные буквы');
        inputPassword.addEventListener('click', function() {
            passwordAlertText.textContent = ('');
        });
        return false;
    }

    if (str.search(/[A-Z]/) === -1) {
        passwordAlertText.textContent = ('пароль должен содержать английские заглавные буквы');
        inputPassword.addEventListener('click', function() {
            passwordAlertText.textContent = ('');
        });
        return false;
    }

    if (str.search(/[0123456789]/) === -1) {
        passwordAlertText.textContent = ('пароль должен содержать цифры');
        inputPassword.addEventListener('click', function() {
            passwordAlertText.textContent = ('');
        });
        return false;
    }

    return true;
}

//нажимаем кнопку входа
document.querySelector('.login_submit').addEventListener('click', () => {

    loginName = document.querySelector('.login_name').value;
    password = document.querySelector('.login_password').value;
    password = password.trim();

    if (validateName(loginName) === false) {
        
        return;
    } 
    if (validatePassword(password) === false) {
        return;
    }
   
   localStorage.setItem(loginName, password);

    inp(loginName, password);

    document.querySelector('.login_name').value = '';
    document.querySelector('.login_password').value = '';
});



function inp (name, pass) {

    if (name  && pass ) {

        entrance.style.display = 'none';
        hello.style.display = 'flex';
        helloText.textContent = `Привет ${name}`;
        out.style.display = 'flex';
        outText.textContent = 'Выйти';
        contLogin.style.display = 'none';
    }
}


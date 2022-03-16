// переменные
let input = document.querySelector('.input > a'), 
    input2 = document.querySelector('.input'),
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
    loginName,
    password,
    checkbox = document.getElementById('rememberMe'),
    contLogin = document.querySelector('.container_login');
    
    // открыли окно

    window.addEventListener('DOMContentLoaded', function() {
        showName();
           });
    //вход   
      function showName() {

        if ( localStorage.key(0)) {
            let key = localStorage.key(0);
            hello.style.display = 'flex';
            helloText.innerHTML = `Привет ${key}`;
            out.style.display = 'flex';
            outText.innerHTML = 'Выйти';
            input2.style.display = 'none';

        } else {
            input2.style.display = 'flex';
            input.innerHTML = "Войти";
        }
    }
    input2.addEventListener('click', function() {
        document.querySelector('.login').style.display = 'block';
    });

//выход
    out.addEventListener('click', function() {
        localStorage.clear();
        output();
    })

//проверка имени
function validateName(str) {
    if (str == null || str == '') {
        loginAlertText.innerHTML = ('введите имя');
        inputName.addEventListener('click', function() {
            loginAlertText.innerHTML = ('');
        })
        return false; 
    } 
   return true;
}

//проверка пароля
function validatePassword(str) {

    if (str == null || str == '') {
        passwordAlertText.innerHTML = ('введите пароль');

        inputPassword.addEventListener('click', function() {
            passwordAlertText.innerHTML = ('');
        });
        return false;
    }

    if (str.length < 7) {
        passwordAlertText.innerHTML = ('пароль должен содержать минимум 8 символов');
        inputPassword.addEventListener('click', function() {
            passwordAlertText.innerHTML = ('');
        });
        return false;
    }

    if (str.search(/[a-z]/) === -1) {
        passwordAlertText.innerHTML = ('пароль должен содержать английские прописные буквы');
        inputPassword.addEventListener('click', function() {
            passwordAlertText.innerHTML = ('');
        });
        return false;
    }

    if (str.search(/[A-Z]/) === -1) {
        passwordAlertText.innerHTML = ('пароль должен содержать английские заглавные буквы');
        inputPassword.addEventListener('click', function() {
            passwordAlertText.innerHTML = ('');
        });
        return false;
    }

    if (str.search(/[0123456789]/) === -1) {
        passwordAlertText.innerHTML = ('пароль должен содержать цифры');
        inputPassword.addEventListener('click', function() {
            passwordAlertText.innerHTML = ('');
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

function output () {
    input2.style.display = 'flex';
    hello.style.display = 'none';
    out.style.display = 'none';
    window.location.reload (); 
}

function inp (name, pass) {
    if (name  && pass ) {
        input2.style.display = 'none';
        hello.style.display = 'flex';
        helloText.innerHTML = `Привет ${name}`;
        out.style.display = 'flex';
        outText.innerHTML = 'Выйти';
        contLogin.style.display = 'none';
       }
}

const authUrl = 'https://students.netoservices.ru/nestjs-backend/auth';

if (localStorage.getItem('user_id')) {
    document.getElementById('user_id').textContent = localStorage.getItem('user_id');
    document.getElementById('welcome').classList.add('welcome_active');
}

function authCheck (url, name, pwd) {
    if (!localStorage.getItem('user_id')) {
        const formData = new FormData();
        formData.append('login', name);
        formData.append('password', pwd);
        const xhttp = new XMLHttpRequest;
        xhttp.open('POST', url, true);
        xhttp.responseType = 'json'
        xhttp.onload = function () {
                if (this.response.success) {
                    document.getElementById('user_id').textContent = this.response.user_id;
                    localStorage.setItem('user_name', name);
                    localStorage.setItem('user_id', this.response.user_id);
                    document.getElementById('welcome').classList.add('welcome_active');
                }
                else {
                    document.getElementById('welcome').classList.remove('welcome_active');
                    alert('Неверный логин/пароль');
                }
            }
        xhttp.send(formData);
        }
};

document.getElementById('signin__btn').addEventListener('click', () => {
    event.preventDefault();
    authCheck(authUrl, document.getElementsByName('login')[0].value, document.getElementsByName('password')[0].value);
    document.getElementById('signin__form').reset();
});

document.getElementById('signout__btn').addEventListener('click', () => {
    event.preventDefault();
    localStorage.removeItem('user_id');
    document.getElementById('user_id').textContent = '';
    document.getElementById('welcome').classList.remove('welcome_active');
    alert('Sing out')
});
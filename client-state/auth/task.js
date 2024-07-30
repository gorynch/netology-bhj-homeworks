const authUrl = 'https://students.netoservices.ru/nestjs-backend/auth';

function authCheck (url, name, pwd) {
    const xhttp = new XMLHttpRequest;
    xhttp.open('POST', url, true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && (this.status == 200 || this.status == 201)) {
            if (JSON.parse(this.response).success) {
                document.getElementById('user_id').textContent = JSON.parse(this.response).user_id;
                document.getElementById('welcome').classList.add('welcome_active');
            }
            else {
                document.getElementById('welcome').classList.remove('welcome_active');
                alert('Неверный логин/пароль');
            }
        }
    };
    xhttp.send(`login=${name}&password=${pwd}`);
}

document.getElementById('signin__btn').addEventListener('click', () => {
    event.preventDefault();
    authCheck(authUrl, document.getElementsByName('login')[0].value, document.getElementsByName('password')[0].value);
    document.getElementsByName('login')[0].value = '';
    document.getElementsByName('password')[0].value = '';
});

document.getElementById('signout__btn').addEventListener('click', () => {
    event.preventDefault();
    alert('Sing out')
});
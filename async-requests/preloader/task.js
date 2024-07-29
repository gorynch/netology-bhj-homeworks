const urlCurrency = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';

const fromServer = false;

const items = document.getElementById('items');
const localCurrency = 'руб.';

const messageOldData = 'Это данные предыдущего запроса. Новые данные загружаются. Подождие, пожалуйста';
const messageNewData = 'Новые данные загружены';

function showCurrencies(curs, divList) {
    for (let k in curs) {
        let item = document.createElement('div')
        item.classList.add('item');
        item.insertAdjacentHTML('beforeend',`
            <div class="item__code">
            ${curs[k].CharCode}
            </div>`
        );
        item.insertAdjacentHTML('beforeend',`
            <div class="item__value">
            ${curs[k].Value}
            </div>`
        );
        item.insertAdjacentHTML('beforeend',`
            <div class="item__currency">
            ${localCurrency}
            </div>`
        );
        divList.appendChild(item);
    }
}

function localLoad () {
    console.log('from localStorage');
    items.insertAdjacentHTML('beforebegin',`
        <p class='message'>
            ${messageOldData}
        </p>`
    );
    let localRes = localStorage.getItem('currencies');
    res = [JSON.parse(localRes).response.Valute];
    showCurrencies(res[0], items);
    document.getElementById('loader').classList.remove('loader_active');
}

function serverLoad (url) {
    console.log('from server')
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (document.querySelector('.message')) {
                document.querySelector('.message').remove();
            }
            items.insertAdjacentHTML('beforebegin',`
                <p class='message'>
                    ${messageNewData}
                </p>`
            );
            res = [JSON.parse(this.response).response.Valute];
            localStorage.setItem('currencies', this.response);
            items.replaceChildren();
            showCurrencies(res[0], items);
            document.getElementById('loader').classList.remove('loader_active');
        }
    };
    xhttp.open('GET', url);
    xhttp.send();
}

function loadCurrencies(url) {
    if ((localStorage.getItem('currencies') != null) && !fromServer) {
        localLoad();
        serverLoad(url);
    }
    else {
        serverLoad(url);
    }
}

loadCurrencies(urlCurrency);

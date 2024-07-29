const pollUrl = 'https://students.netoservices.ru/nestjs-backend/poll';
const statUrl = 'https://students.netoservices.ru/nestjs-backend/poll';

let answersArr;

function getStat (pollId, answIndex, url) {
    alert('Спасибо, ваш голос засчитан!');
    const xhr = new XMLHttpRequest;
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 201)) {
            document.getElementById('poll__answers').replaceChildren();
            JSON.parse(xhr.response).stat.forEach((el) => {
                document.getElementById('poll__answers').insertAdjacentHTML('beforeend',
                    `<p>
                        ${el.answer}: ${el.votes} %
                    </p>`
                );
            })
        }
    }
    xhr.send(`vote=${pollId}&answer=${answIndex}`);
}

function getAnswers (url) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('poll__title').insertAdjacentHTML('beforeend',
                `<div class="item__code">
                    ${JSON.parse(this.response).data.title}
                </div>`
            );
            JSON.parse(this.response).data.answers.forEach((el, index) => {
                document.getElementById('poll__answers').insertAdjacentHTML('beforeend',`
                    <button class="poll__answer" id='btn${index}'>
                        ${el}
                    </button>`
                );
                document.getElementById(`btn${index}`).addEventListener('click', () => {
                    getStat(JSON.parse(this.response).id, index, statUrl);
                })
            });
        }
    };
    xhttp.open('GET', url);
    xhttp.send();
}

getAnswers(pollUrl);
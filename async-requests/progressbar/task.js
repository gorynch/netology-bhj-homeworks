const postUrl = 'https://students.netoservices.ru/nestjs-backend/upload';

function postFile() {

    let formdata = new FormData();
  
    formdata.append('file', document.getElementById('file').files[0]);
  
    let request = new XMLHttpRequest();
  
    request.upload.addEventListener('progress', function (e) {
        let file1Size = document.getElementById('file').files[0].size;
        let percent = Math.round(e.loaded / file1Size * 100);
        document.getElementById('progress').value = percent/100;
        if (percent == 100) {
            alert('Загрузка завершена!');
            document.getElementById('progress').value = 0;
        }
    });   
  
    request.open('post', postUrl);
    request.send(formdata);
}
  
document.getElementById('form').addEventListener('submit', () => {
    event.preventDefault();
    postFile();
});
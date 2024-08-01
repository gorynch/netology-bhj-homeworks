document.getElementById('editor').value = localStorage.getItem('textArea');

document.getElementById('editor').addEventListener('input', () => {
    localStorage.setItem('textArea', document.getElementById('editor').value);
})


document.getElementById('btnClear').addEventListener('click', () => {
    document.getElementById('editor').value = '';
    localStorage.removeItem('textArea');
})
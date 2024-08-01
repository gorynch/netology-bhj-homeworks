const cookieName = 'modal';
const cookieVlue = 'modal_active';

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let decodedCookie = decodeURIComponent(document.cookie);
    const foundPair = decodedCookie.split(';').find(currentCookie => currentCookie.startsWith(cname));
    if(foundPair) {
      return foundPair.split("=")[1];
    }
    return "";
}

function checkCookie(cname) {
    let name = getCookie(cname);
    if (name != "") {
        document.getElementById('subscribe-modal').classList.remove('modal_active');
    }
}


checkCookie(cookieName);

document.querySelector('.modal__close').addEventListener('click', () => {
    document.getElementById('subscribe-modal').classList.remove('modal_active');
    setCookie(cookieName, cookieVlue, 10);
});

import messages from './lang/messages.js';

function myfunc(key) {
    const keys= key.split('.');
    keys.unshift(document.getElementById("lang").value)
    let langObject= messages;
    for (let i = 0; i < keys.length; i++) {
        langObject = langObject[keys[i]];
        if (!langObject) {
            return key;
        }
    }
    
    return langObject;
}

function showMessages() {
    document.getElementById('home').innerHTML= myfunc("navbar.home");
    document.getElementById('works').innerHTML= myfunc("navbar.works");
    document.getElementById('about').innerHTML= myfunc("navbar.about");
    document.getElementById("aboutTitle").textContent= myfunc("about.aboutTitle");
    document.getElementById('title').innerHTML= myfunc("index.title");
    document.getElementById('fw').textContent= myfunc("index.fw");
}

document.body.addEventListener("DOMContentLoaded", showMessages());

document.getElementById("lang").addEventListener("change", (event) => {
    showMessage();
});

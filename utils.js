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

function showMessage() {
    document.getElementById('title').innerHTML= myfunc("index.title");
    document.getElementById('home').innerHTML= myfunc("navbar.home");
    document.getElementById('works').innerHTML= myfunc("navbar.works");
    document.getElementById('about').innerHTML= myfunc("navbar.about");
}

document.body.addEventListener("DOMContentLoaded", showMessage());

document.getElementById("lang").addEventListener("change", (event) => {
    showMessage();
});

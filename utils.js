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
    document.getElementById('home').textContent= myfunc("navbar.home");
    document.getElementById('works').textContent= myfunc("navbar.works");
    document.getElementById('about').textContent= myfunc("navbar.about");
    showIndexMessages();
    showWorksMessages();
    showAboutMessages();
}

function showIndexMessages() {
    try {
        document.getElementById('title').innerHTML= myfunc("index.title");
        document.getElementById('fw').textContent= myfunc("index.fw");
        document.getElementById("description").textContent= myfunc("index.description");
        document.getElementById("view").textContent= myfunc("index.view")
    } catch (error) {      
    }  
}

function showWorksMessages(){
    try {
        document.getElementById("mainTitle").textContent= myfunc("works.mainTitle");
        document.getElementById("report").textContent= myfunc("works.report");
        
        var elements = document.getElementsByClassName("dwlpdf");
        for (var i = 0; i < elements.length; i++) {
            elements[i].textContent = myfunc(elements[i].className);
        }

        document.getElementById("internTitle1").textContent= myfunc("works.internTitle1");
        document.getElementById("internTitle2").textContent= myfunc("works.internTitle2");
    } catch (error) {
    }
}

function showAboutMessages() {
    try {
        document.getElementById("aboutTitle").textContent= myfunc("about.aboutTitle");
        document.getElementById("name").textContent= myfunc("about.name");
        document.getElementById("description").textContent= myfunc("about.description");
        document.getElementById("contact").innerHTML= myfunc("about.contact");
        document.getElementById("cv").src= myfunc("about.imgsrc");
    } catch (error) {      
    }   
}

document.body.addEventListener("DOMContentLoaded", showMessages());

document.getElementById("lang").addEventListener("change", () => {
    showMessages();
});

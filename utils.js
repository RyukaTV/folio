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
        document.getElementById('indextitle').textContent= myfunc("index.btitle");
        document.getElementById('title').innerHTML= myfunc("index.title");
        document.getElementById('fw').textContent= myfunc("index.fw");
        document.getElementById("description").textContent= myfunc("index.description");
        document.getElementById("view").textContent= myfunc("index.view");
        document.getElementById("featuredGame").textContent= myfunc("works.descriptions.game");
        document.getElementById("featuredPizza").innerHTML= myfunc("works.descriptions.pizza")
    } catch (error) {      
    }  
}

function showWorksMessages(){
    try {
        document.getElementById('workstitle').textContent= myfunc("works.btitle");
        document.getElementById("mainTitle").textContent= myfunc("works.mainTitle");
        document.getElementById("report").textContent= myfunc("works.report");
        
        var elements = document.getElementsByClassName("dwlpdf");
        for (var i = 0; i < elements.length; i++) {
            elements[i].textContent = myfunc(elements[i].className);
        }
        
        document.getElementById("game").textContent= myfunc("works.descriptions.game");
        document.getElementById("memoryGame").textContent= myfunc("works.descriptions.memoryGame");
        document.getElementById("postaldev").textContent= myfunc("works.descriptions.postaldev");
        document.getElementById("apidemo").textContent= myfunc("works.descriptions.apidemo");
        document.getElementById("pizza").innerHTML= myfunc("works.descriptions.pizza")

        document.getElementById("internTitle1").textContent= myfunc("works.internTitle1");
        document.getElementById("internTitle2").textContent= myfunc("works.internTitle2");
    } catch (error) {
    }
}

function showAboutMessages() {
    try {
        document.getElementById('abouttitle').textContent= myfunc("about.btitle");
        document.getElementById("Title").textContent= myfunc("about.Title");
        document.getElementById("name").textContent= myfunc("about.name");
        document.getElementById("description").textContent= myfunc("about.description");
        document.getElementById("contact").innerHTML= myfunc("about.contact");
        document.getElementById("cv").src= myfunc("about.imgsrc");
    } catch (error) {      
    }   
}

document.addEventListener("DOMContentLoaded", () => {
    const selectLang = document.getElementById("lang");
    const storedLang = localStorage.getItem("selectedLang");
    if (storedLang) {
        selectLang.value = storedLang;
    } else {
        selectLang.value = "en"; 
    }
    selectLang.addEventListener("change", () => {
        const selectedLang = selectLang.value;
        localStorage.setItem("selectedLang", selectedLang);
        showMessages();
    });
    showMessages();
});

import messages from './lang/messages.js';

function myfunc(key) {
    const keys= key.split('.');
    keys.unshift(document.getElementById("lang").value)
    console.log(keys)
    let langObject= messages;
    for (let i = 0; i < keys.length; i++) {
        langObject = langObject[keys[i]];
        if (!langObject) {
            return key;
        }
    }
    
    return langObject;
}

console.log(myfunc("index.title"))

export { myfunc };

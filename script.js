async function init() {
    await includeHTML();
    document.getElementById('headline').innerHTML = 'Herzlich willkommen!';
}

async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // includes/header.html
        let resp = await fetch(file)
        if (resp.ok) {
            element.innerHTML = await resp.text(); // text() holt sich den Text aus dem Element; mit text(content) kann man Inhalt ändern
        } else {
            element.innerHTML = 'Page not found!'
        }
    }
}

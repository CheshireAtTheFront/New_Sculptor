let rules = document.getElementById('rules-js');
let close = document.getElementById('close-js');
let iframe = document.getElementById('iframe-rules');

rules.addEventListener("click", funOpen);
close.addEventListener("click", funClose);

function funOpen() {
    if (rules = true) {
        iframe.style = "display: block;";
    }
}

function funClose() {
    iframe.style = "display: none;"
}
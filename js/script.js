// let rules = document.getElementById('rules-js');
// let close = document.getElementById('close-js');
// let iframe = document.getElementById('iframe-rules');

// rules.addEventListener("click", () => {
//     iframe.style = "display: block;"
// });
// close.addEventListener("click", () => {
//     iframe.style = "display: none;"
// });

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

// rules.addEventListener("click", () => {
//     let onclick = rules;
//     let closeIframe = iframe;
//     if (onclick = true) {
//         closeIframe.style = "display: block;"
//     }
//     iframe.style = "display: none;"
// });

// close.addEventListener("click", () => {
//     iframe.style = "display: none;"
// });



// if (rules = true) {
//     // let rules = document.getElementById('rules-js');
//     // let iframe = document.getElementById('iframe-rules');

// } else if (close = true) {
//     // let close = document.getElementById('close-js');


// }
// make a function:

function makeRed() {
    document.querySelector("body").style.backgroundColor = "#823";
}

function makeBlue() {
    document.querySelector("body").style.backgroundColor = "#2af";
}

function makeGreen() {
    document.querySelector("body").style.backgroundColor = "#3ae";
}

function changeColor(color) {
    const bodyEl = document.querySelector("body");
    bodyEl.style.backgroundColor = color;
}
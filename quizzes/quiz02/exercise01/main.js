function changeBackground() {
    console.log('change background');
    document.querySelector("#s1").style.backgroundColor = "blue";
}

function goodbye() {
    document.querySelector("#message").innerHTML = "goodbye";
}

function showDog() {
   console.log('show dog');
   document.querySelector("img").src = "images/dog.jpg"
}

let songs = [
    {
        name: "Million Dollar Bills",
        songUrls: [
            "./assets/MILLIN_DOLALR_BILSL.mp3#t=00:00:40,00:00:41",
            "./assets/MILLIN_DOLALR_BILSL.mp3#t=00:00:40,00:00:42",
            "./assets/MILLIN_DOLALR_BILSL.mp3#t=00:00:40,00:00:44",
            "./assets/gravityetc.mp3#t=00:00:40,00:00:48",
            "./assets/gravityetc.mp3#t=00:00:40,00:00:51",
            "./assets/gravityetc.mp3#t=00:00:40,00:00:55",   
        ]
    },
    {
        name: "Gravity etc",
        songUrls: [
            "./assets/gravityetc.mp3#t=00:00:40,00:00:41",
            "./assets/gravityetc.mp3#t=00:00:40,00:00:42",
            "./assets/gravityetc.mp3#t=00:00:40,00:00:44",
            "./assets/gravityetc.mp3#t=00:00:40,00:00:48",
            "./assets/gravityetc.mp3#t=00:00:40,00:00:51",
            "./assets/gravityetc.mp3#t=00:00:40,00:00:55",  
        ]
    }
];
function randomIntBetween(min,max){
    return Math.floor(Math.random()*(max - min + 1)) + min
  }  
 let currentSong = songs[randomIntBetween(0, songs.length-1)]; //expands range when i add more to list

let guesses = 0;

function checkGuess() {
    guesses += 1;
    const guess = document.querySelector("#guess").value;
    if (guess.toLowerCase() === currentSong.name.toLowerCase()) {
        document.querySelector("#main-box").className = "hide";
        document.querySelector("#winner").className = "show";
        document.querySelector("#loser").className = "hide";
    }
    else {

        if (guesses === 1) {
            document.querySelector("#p1").innerHTML = guess;
        }
        else if (guesses === 2) {
            document.querySelector("#p2").innerHTML = guess;
        }
        else if (guesses === 3) {
            document.querySelector("#p3").innerHTML = guess;
        }
        else if (guesses === 4) {
            document.querySelector("#p4").innerHTML = guess;
        }
        else if (guesses === 5) {
            document.querySelector("#p5").innerHTML = guess;
        }
        else if (guesses === 6) {
            document.querySelector("#main-box").className = "hide";
            document.querySelector("#winner").className = "hide";
            document.querySelector("#loser").className = "show";
        }

    }
}

function skipGuess() {
console.log("skip pressed")
guesses += 1;
     if (guesses === 1) {
            document.querySelector("#p1").innerHTML = "XXX";
        }
        else if (guesses === 2) {
            document.querySelector("#p2").innerHTML = "XXX";
        }
        else if (guesses === 3) {
            document.querySelector("#p3").innerHTML = "XXX";
        }
        else if (guesses === 4) {
            document.querySelector("#p4").innerHTML = "XXX";
        }
        else if (guesses === 5) {
            document.querySelector("#p5").innerHTML = "XXX";
        }
        else if (guesses === 6) {
            document.querySelector("#main-box").className = "hide";
            document.querySelector("#winner").className = "hide";
            document.querySelector("#loser").className = "show";
        }

    }


function playSong() {
    let audioTag = document.querySelector("audio");
    audioTag.src = currentSong.songUrls[guesses];
    audioTag.play();

}




var popupDiv = document.getElementById("theme-bg");

function openPopupMenu() {
    popupDiv.style.display = "block";
}
function closePopupMenu() {
    popupDiv.style.display = "none";
}


const bodyEl = document.querySelector("body");

function changeTheme(myClass) {
    bodyEl.className = myClass;
}




//working audio player, working date detector (ugh), working guessing game (I can reference the number guesser for this...),
//working text prediction (idk what that's called) 

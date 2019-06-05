let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let win = 0;
let lose = 0;
let guessLeft = 9;
let guessCount = [];
let userGuess = null;
let ranLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

// I cannot get the keyup function working!! I am not sure if it has to do with the variables. 

document.onkeyup = function (event) {


    let userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    if (guessCount.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
        guessCount[guessCount.length] = userGuess;
        guessLeft--;
        guessCount = [];
    };
    if (ranLetter == userGuess) {
        win++;
        guessLeft = 9;
        guessCount = [];
        ranLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    };
    if (guessLeft == 0) {
        losses++;
        guessLeft = 9;
        guessCount = [];
        ranLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    };
};

$("#win").html(win);
$("#lose").html(lose);
$("#guessLeft").html(guessLeft);
$("#guessCount").html(guessCount);
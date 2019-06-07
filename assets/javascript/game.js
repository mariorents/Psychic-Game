let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let win = 0;
let lose = 0;
let guessLeft = 9;
let guessCount = [];
let userGuess;
let ranLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

// I cannot get the keyup function working!! I am not sure if it has to do with the variables. 
document.onkeyup = function (event) {
    // console.log("worked")

    userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    // console.log(guessCount.indexOf(userGuess));
    // document.getElementById("wins").textContent = wins;


    if (guessCount.indexOf(userGuess) === -1 && alphabet.indexOf(userGuess) >= 0) {
        // guessCount[guessCount.length] = userGuess;
        console.log("here");
        guessCount.push(userGuess);
        guessLeft--;
    };
    if (ranLetter === userGuess) {
        win++;
        guessLeft = 9;
        ranLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    };
    if (guessLeft === 0) {
        lose++;
        guessLeft = 9;
        ranLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    };

    document.getElementById("win").textContent = win;
    document.getElementById("lose").textContent = lose;
    document.getElementById("guessLeft").textContent = guessLeft;
    document.getElementById("guessCount").textContent = guessCount;
};
    
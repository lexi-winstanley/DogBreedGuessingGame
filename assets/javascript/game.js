var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];
var possibleWords  = ['labrador', 'poodle', 'collie', 'pomeranian', 'pug', 'hound', 'daschund', 'terrier', 'spaniel'];
var blanksArray = [];

var randomIndex = Math.trunc(Math.random() * possibleWords.length);
var currentWord = possibleWords[randomIndex];
var remainingLetters = currentWord.length;

var blankSpacesText = document.getElementById('blankSpaces');
var winsText = document.getElementById('winsNumber');
var lossesText = document.getElementById('lossesNumber');
var remainingLettersText = document.getElementById('numberLettersRemaining');
var guessesLeftText = document.getElementById('remainingGuesses');
var lettersGuessedText = document.getElementById('lettersUserGuessed');

function updateDisplay() {
    winsText.textContent = 'Wins: ' + wins;
    lossesText.textContent = 'Losses: ' + losses;
    remainingLettersText.textContent = 'Remaining Letters in Word: ' + remainingLetters;
    guessesLeftText.textContent = 'Incorrect Guesses Remaining: ' + guessesLeft;
    lettersGuessedText.textContent = 'Incorrect Letters Guessed: ' + lettersGuessed.join(", "); 
    blankSpacesText.textContent = blanksArray.join(" "); 
};

function selectNewWord() {
    blanksArray = [];
    randomIndex = Math.trunc(Math.random() * possibleWords.length);
    currentWord = possibleWords[randomIndex];
    console.log(currentWord); 
    remainingLetters = currentWord.length;
    console.log(currentWord.length);
    for (i = 0; i < currentWord.length; i++) {
        blanksArray[i] = "_";
    }  
};

selectNewWord();
updateDisplay();


document.onkeyup = function(event) {
    //sets userGuess to the key pressed
    var userGuess = event.key;
    //converts userGuess to an ascii char code to be able to check if the key pressed was a lowercase alphabet character
    var userGuessCharCode = userGuess.charCodeAt(0);
    if (lettersGuessed.includes(userGuess) || userGuessCharCode < 97 || userGuessCharCode > 122) {
        return;
    } else {
        if (remainingLetters > 0 && guessesLeft > 0 && currentWord.includes(userGuess)) {
            for (j = 0; j < currentWord.length; j++) {
                if (currentWord[j] === userGuess) {
                    blanksArray[j] = userGuess;
                    remainingLetters--;
                } 
            }
        } else if (!currentWord.includes(userGuess) && !lettersGuessed.includes(userGuess)) {
            lettersGuessed.push(userGuess);
            guessesLeft--;
        } else if (remainingLetters = 0 && guessesLeft > 0) {
            wins++;
            selectNewWord();
        } else if (!guessesLeft > 0) {
            losses++;
            selectNewWord();
        }
        updateDisplay();
    } 
};

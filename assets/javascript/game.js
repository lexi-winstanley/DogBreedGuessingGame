var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];
var possibleWords  = [
    'labrador',
    'poodle',
    'border collie',
    'pomeranian',
    'pug',
    'bassett hound',
    'daschund',
    'yorkshire terrier',
    'cocker spaniel', 
    'australian shepherd', 
    'boston terrier', 
    'boxer', 
    'chihuahua', 
    'corgi',
    'dalmation',
    'german shepherd',
    'great dane',
    'greyhound',
    'newfoundland',
    'schnauzer'
];
var blanksArray = [];
var usedWords = [];
var correctGuesses = [];
var possibleImages = [
    '<img src="assets/images/lab.jpg" class="breedImage" alt="yellow labrador retriever" />',
    '<img src="assets/images/poodle.jpg" class="breedImage" alt="black standard poodle" />',
    '<img src="assets/images/borderCollie.jpg" class="breedImage" alt="black and white border collie" />',
    '<img src="assets/images/pomeranian.jpg" class="breedImage" alt="brown and black pomeranian" />',
    '<img src="assets/images/pug.jpg" class="breedImage" alt="close up of black and tan pug" />',
    '<img src="assets/images/bassettHound.jpg" class="breedImage" alt="bassett hound laying down" />',
    '<img src="assets/images/daschund.jpg" class="breedImage" alt="brown daschund puppy with lighter markings" />',
    '<img src="assets/images/yorkie.jpg" class="breedImage" alt="yorkshire terrier" />',
    '<img src="assets/images/cockerSpaniel.jpg" class="breedImage" alt="black cocker spaniel with grey" />', 
    '<img src="assets/images/australianShepherd.jpg" class="breedImage" alt="australian shepherd with blue eyes" />',
    '<img src="assets/images/bostonTerrier.jpg" class="breedImage" alt="black and white boston terrier with toy" />',
    '<img src="assets/images/boxer.jpg" class="breedImage" alt="brindled boxer with white chest" />',
    '<img src="assets/images/chihuahua.jpg" class="breedImage" alt="tri-color chihuahua laying down" />',
    '<img src="assets/images/corgi.jpg" class="breedImage" alt="corgi sitting while on leash" />',
    '<img src="assets/images/dalmation.jpg" class="breedImage" alt="dalmation with red scarf" />',
    '<img src="assets/images/germanShepherd.jpg" class="breedImage" alt="german shepherd sitting on grass" />',
    '<img src="assets/images/greatDane.jpg" class="breedImage" alt="tan great dane" />',
    '<img src="assets/images/greyhound.jpg" class="breedImage" alt="grey-blue greyhound" />',
    '<img src="assets/images/newfoundland.jpg" class="breedImage" alt="newfoundland dog on snow" />',
    '<img src="assets/images/schnauzer.jpg" class="breedImage" alt="schnauzer running on grass" />'
];
var lastRandomIndex;
var randomIndex = Math.trunc(Math.random() * possibleWords.length);
var currentWord = possibleWords[randomIndex];
var currentImage = '<img src="assets/images/mix.jpg" class="breedImage" alt="brindled mixed breed dog" />';
var remainingLetters = currentWord.length;

var blankSpacesText = document.getElementById('blankSpaces');
var winsText = document.getElementById('winsNumber');
var lossesText = document.getElementById('lossesNumber');
var remainingLettersText = document.getElementById('numberLettersRemaining');
var guessesLeftText = document.getElementById('remainingGuesses');
var lettersGuessedText = document.getElementById('lettersUserGuessed');
var imageContent = document.getElementById('imageHolder');

imageContent.innerHTML = currentImage;

function updateDisplay() {
    winsText.textContent = wins;
    lossesText.textContent = losses;
    remainingLettersText.textContent = remainingLetters;
    guessesLeftText.textContent = guessesLeft;
    lettersGuessedText.textContent = lettersGuessed.join(", "); 
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
    guessesLeft = 10;
    lettersGuessed = [];
    correctGuesses = [];
    if (usedWords.includes(currentWord) && usedWords.length < possibleWords.length) {
        selectNewWord();
    } else if (usedWords.includes(currentWord) && usedWords.length === possibleWords.length) {
        usedWords = [];
    } else {
        usedWords.push(currentWord);
    } 
};

function displayImage() {
    currentImage = possibleImages[randomIndex];
    imageContent.innerHTML = currentImage;
}

function removeSpaces() {
    if (currentWord.includes(' ')) {
        for (j = 0; j < currentWord.length; j++) {
            if (currentWord[j] === ' ') {
                blanksArray[j] = ' + ';
                remainingLetters--;
            } 
        }
    }
};

selectNewWord();
removeSpaces();
updateDisplay();


document.onkeyup = function(event) {
    //sets userGuess to the key pressed
    var userGuess = event.key;
    //converts userGuess to an ascii char code to be able to check if the key pressed was a lowercase alphabet character
    var userGuessCharCode = userGuess.charCodeAt(0);
    if (correctGuesses.includes(userGuess) || lettersGuessed.includes(userGuess) || userGuessCharCode < 97 || userGuessCharCode > 122) {
        return;
    } else {
        if (remainingLetters > 0 && guessesLeft > 0 && currentWord.includes(userGuess)) {
            for (j = 0; j < currentWord.length; j++) {
                if (currentWord[j] === userGuess) {
                    blanksArray[j] = userGuess;
                    remainingLetters--;
                } 
            }
            correctGuesses.push(userGuess);
            if (remainingLetters === 0 && guessesLeft > 0) {
                wins++;
                displayImage();
                selectNewWord();
                removeSpaces();
            }
        } else if (!currentWord.includes(userGuess) && !lettersGuessed.includes(userGuess)) {
            lettersGuessed.push(userGuess);
            guessesLeft--;
            if (!guessesLeft > 0) {
                losses++;
                displayImage();
                selectNewWord();
                removeSpaces();
            }
        }
        updateDisplay();
    } 
};

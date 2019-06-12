//create variables for wins, losses, number guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 10;
//empty array to hold letters user has guessed
var lettersGuessed = [];
//array of all possible words
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
//blank array to hold underscores corresponding to word picked
var blanksArray = [];
//blank array to hold words that have already been picked to avoid repeats until all words have been used once
var usedWords = [];
//blank array to hold correct user guesses
var correctGuesses = [];

//array holding image html corresponding to each possible word, display each after user has gotten the word correct
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
//variable to hold last index to correspond to correct picture
var lastRandomIndex;
//way to get random index for possible word selection
var randomIndex = Math.trunc(Math.random() * possibleWords.length);
//variable for current word
var currentWord = possibleWords[randomIndex];
//set current image to a dog not used in game to display on load
var currentImage = '<img src="assets/images/mix.jpg" class="breedImage" alt="brindled mixed breed dog" />';
//variable for remaining letters in word, initially set at current word length
var remainingLetters = currentWord.length;

//variables to call HTML elements
var blankSpacesText = document.getElementById('blankSpaces');
var winsText = document.getElementById('winsNumber');
var lossesText = document.getElementById('lossesNumber');
var remainingLettersText = document.getElementById('numberLettersRemaining');
var guessesLeftText = document.getElementById('remainingGuesses');
var lettersGuessedText = document.getElementById('lettersUserGuessed');
var imageContent = document.getElementById('imageHolder');
var directionsText = document.getElementById('directions')

//set HTML content of image holder to variable currentImage
imageContent.innerHTML = currentImage;

//function to update HTML as needed
function updateDisplay() {
    winsText.textContent = wins;
    lossesText.textContent = losses;
    remainingLettersText.textContent = remainingLetters;
    guessesLeftText.textContent = guessesLeft;
    lettersGuessedText.textContent = lettersGuessed.join(", "); 
    blankSpacesText.textContent = blanksArray.join(" "); 
};

//function to select a new word and reset appropriate variables/arrays
function selectNewWord() {
    blanksArray = [];
    randomIndex = Math.trunc(Math.random() * possibleWords.length);
    currentWord = possibleWords[randomIndex];
    remainingLetters = currentWord.length;
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

//function to change image on page
function displayImage() {
    currentImage = possibleImages[randomIndex];
    imageContent.innerHTML = currentImage;
};

//function to find spaces in the current word and change them from underscores in the display to extra spaces
function removeSpaces() {
    if (currentWord.includes(' ')) {
        for (j = 0; j < currentWord.length; j++) {
            if (currentWord[j] === ' ') {
                blanksArray[j] = '  ';
                remainingLetters--;
            } 
        }
    }
};

//start the game, select a word, remove underscores corresponding to spaces and update display HTML elements
selectNewWord();
removeSpaces();
updateDisplay();

//function runs on key press
document.onkeyup = function(event) {
    directionsText.textContent = "";
    //sets userGuess to the key pressed
    var userGuess = event.key;
    //converts userGuess to an ascii char code to be able to check if the key pressed was a lowercase alphabet character
    var userGuessCharCode = userGuess.charCodeAt(0);
    //checks if the currect user guess has been guessed already/is not a lowercase alphabet character and exits function
    if (correctGuesses.includes(userGuess) || lettersGuessed.includes(userGuess) || userGuess < 97 || userGuess > 122) {
        return;
    }
    //checks if there are letters remaining in the word and guesses left then if the user guess is in the current word
    if (remainingLetters > 0 && guessesLeft > 0 && currentWord.includes(userGuess)) {
        //replace appropriate underscores in the word with the key user pressed and decrement remaining letters
        for (j = 0; j < currentWord.length; j++) {
            if (currentWord[j] === userGuess) {
                blanksArray[j] = userGuess;
                remainingLetters--;
            } 
        }
        //add the correct letter to the correctGuesses array
        correctGuesses.push(userGuess);
        //increment wins and restart game if there are no remaining letters in the current work
        if (remainingLetters === 0) {
            wins++;
            displayImage();
            selectNewWord();
            removeSpaces();
        }
    //checks if user guess is not in current word and has not already been added to the lettersGuessed array
    } else if (!currentWord.includes(userGuess) && !lettersGuessed.includes(userGuess)) {
        //adds user guess to lettersGuessed array and decrements guesses left
        lettersGuessed.push(userGuess);
        guessesLeft--;
        //if there are no guesses left then increment losses and restart game
        if (guessesLeft === 0) {
            losses++;
            displayImage();
            selectNewWord();
            removeSpaces();
        }
    }
    //update the display
    updateDisplay();
};

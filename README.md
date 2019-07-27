# Dog Breed Guessing Game

## Description
This is a JavaScript game in which the computer randomly chooses a word from the array of dog breeds, then displays underscores corresponding to the number of letters. The user then presses keys to guess letters that may be in the word. If they guess a letter that is in the word the appropriate blanks are changed to that letter and the number of letters remaining in the word decreases. If they guess a letter that is not in the word it is displayed on the page as an incorrect lettter guessed and the number of guesses remaining decreases. 

The user is allowed 10 incorrect guesses, if they do not guess all the letters in the word before they run out of guesses the number of losses is incremented and the game resets. If they guess the word correctly then the number of wins is incremented and the game resets. 

When the game resets the computer randomly chooses a new word from the remaining dog breeds in the array and the incorrect guesses are cleared and number of guesses remaining set back to 10. Each time the computer selects a new word the picture is updated to display a dog of the previous breed (i.e. if the previous word was "poodle" when the computer selects a new word the picture will update to be of a poodle). The computer will go through each word in the array once before beginning to repeat words. There are 20 unique dog breeds in the game. 

## https://lexi-winstanley.github.io/DogBreedGuessingGame/

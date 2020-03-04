# Dog Breed Guessing Game
[View Live](https://lexi-winstanley.github.io/dogBreedGuessingGame/)

## Motivation 
To create a JavaScript game in which blanks are displayed to represent the number of letters in an unknown word and a user then has a limited number of tries to guess the letters correctly to reveal the word. 

## Summary
This application randomly chooses a word from a predefined array of dog breeds, then displays underscores corresponding to the number of letters. The user then presses keys to guess letters that may be in the word. If they guess a letter that is in the word the appropriate blanks are changed to that letter and the number of letters remaining in the word decreases. If they guess a letter that is not in the word it is displayed on the page as an incorrect lettter guessed and the number of guesses remaining decreases. 

## Details
This application is written with JavaScript. Arrays are used to hold possible words, letters guessed incorrectly and correctly, underscores corresponding to current word and words that have been used since page load. Loops, variables and event listeners (on key up) are used to carry out the logic to determine what the user is guessing and if that guess is correct or not as well as update the HTML elements. The user is allowed 10 incorrect guesses, if they do not guess all the letters in the word before they run out of guesses the number of losses is incremented and the game resets. If they guess the word correctly then the number of wins is incremented and the game resets. When the game resets the computer randomly chooses a new word from the remaining dog breeds in the array and the incorrect guesses are cleared and number of guesses remaining set back to 10. Each time the computer selects a new word the picture is updated to display a dog of the previous breed (i.e. if the previous word was "poodle" when the computer selects a new word the picture will update to be of a poodle). The computer will go through each word in the array once before beginning to repeat words. There are 20 unique dog breeds in the game.

## Role
Sole developer responsible for design, code and creation of custom graphics. Functionality requirements provided by UW Coding Bootcamp/Trilogy Education Services.

## Technologies
HTML
<br/>CSS
<br/>JavaScript

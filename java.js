var words = ["hangman", "javascript", "programming", "computer"];

// Select a random word from the list
var word = words[Math.floor(Math.random() * words.length)];

// Array to store the correctly guessed letters
var correctLetters = [];

// Array to store the incorrectly guessed letters
var incorrectLetters = [];

// Function to update the display
function updateDisplay() {
  // Clear the display
  document.getElementById("word").innerHTML = "";

  // Display the word with correctly guessed letters filled in
  for (var i = 0; i < word.length; i++) {
    if (correctLetters.includes(word[i])) {
      document.getElementById("word").innerHTML += word[i] + " ";
    } else {
      document.getElementById("word").innerHTML += "_ ";
    }
  }
   // Display the incorrect guesses
   document.getElementById("incorrect").innerHTML =
   "Incorrect guesses: " + incorrectLetters.join(", ");

 // Check if the player has won or lost
 if (correctLetters.length === word.length) {
   alert("Congratulations! You won!");
   resetGame();
 } else if (incorrectLetters.length === 6) {
   alert("Game over! The word was: " + word);
   resetGame();
 }
}

// Function to handle key press events
function handleKeyPress(event) {
 var letter = event.key.toLowerCase();

 // Check if the letter has already been guessed
 if (
   correctLetters.includes(letter) ||
   incorrectLetters.includes(letter)
 ) {
   return;
}

// Check if the letter is in the word
if (word.includes(letter)) {
  correctLetters.push(letter);
} else {
  incorrectLetters.push(letter);
}

updateDisplay();
}

// Function to reset the game
function resetGame() {
// Clear the arrays
correctLetters = [];
incorrectLetters = [];

// Select a new random word
word = words[Math.floor(Math.random() * words.length)];

updateDisplay();
}
// Add event listener for key press events
document.addEventListener("keypress", handleKeyPress);

// Initial display update
updateDisplay();

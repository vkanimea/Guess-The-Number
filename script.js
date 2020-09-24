/**
 * Guess The Number Game
 * Done: Get user value from input and save it to variable numberGuess
 * Done: Generate a random number 1 to 100 and save it to variable correctNumber
 * Done: Console whether the guess is too high, too low, or is correct inside playGame function
 * Done: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * Done: Complete the showYouWon, showNumberAbove, showNumberBelow
 * Done: Use the showYouWon... functions within displayResult to display the correct dialog
 * Done: Save the guess history in a variable called guess
 * Done: Display the guess history using displayHistory() function
 * TODO: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses 
let guesses = [];
// Variable for store the correct random number 
let correctNumber = getRandomNumber();


window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
}

/**
 * Functionality for playing the whole game
 */
function playGame(){
  // *CODE GOES BELOW HERE *
  
  let numberGuess = document.getElementById('number-guess').value;
  console.log('Number Guess is '+numberGuess+' Correct Guess is '+correctNumber);
  
  displayResult(numberGuess);
  displayHistory();
  saveGuessHistory(numberGuess);
 

}

/**
 * Show the result for if the guess it too high, too low, or correct
 * HINT: Use if, else if, else statement 
 */
// *CODE GOES BELOW HERE *
function displayResult(numberGuess) {
  if (numberGuess > correctNumber) { 
    showNumberAbove();
  } else if (numberGuess < correctNumber) { 
    showNumberBelow(); 
      } else if (numberGuess == correctNumber) 
             { showYouWon(); }

}


/**
 * Initialize a new game by resetting all values and content on the page
 * HINT: reset the correctNumber, guesses, and HTML content
 */
function initGame(){
  // *CODE GOES BELOW HERE *
  // Reset the CorrectNumber to a Random number
  // Reset Result content
  // Clear the guesses Array
  // Clear the History 
  let correctNumber = getRandomNumber(); 
  let guesses = [];  
  document.getElementById("history").innerHTML = " ";
  resetResultContent();
  
}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent(){
  document.getElementById("result").innerText = "";
  
  
}

/**
 * Return a random number between 1 and 100
 * HINT: Use Math.random 
 */
function getRandomNumber(){
  // *CODE GOES BELOW HERE *
  let randomNumber = Math.floor(Math.random()* 100) + 1;
  console.log('Random Number is '+randomNumber);
  return randomNumber;
}

/**
 * Save guess history 
 * HINT: Search Google "append to array in javascript"
 * HINT: Use the guesses variable
 */
function saveGuessHistory(guess) {
  // *CODE GOES BELOW HERE *
  guesses.push(guess);
  console.log(guesses);
}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li
 * </ul>
 * HINT: use while loop and string concatentation to create a list of guesses
 */
function displayHistory() {
  let index = guesses.length - 1; // Check at the end of the array and since array with 0 instead of 1
  let list = "<ul class='list-group'>";
  while (index >= 0 ) {
  // *CODE GOES BELOW HERE *
  list += "<li class='list-group-item'>" + 
  "You Guessed " + guesses[index] + "</li>"
  index -=1;
  }
  list += "</ul>";
  document.getElementById("history").innerHTML = list;
}



/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'won' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog('won',text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog('warning',text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog('warning',text);
  document.getElementById("result").innerHTML = dialog;
}

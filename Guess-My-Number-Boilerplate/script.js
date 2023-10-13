let secretNumber = Math.trunc(Math.random()*20) + 1;
console.log("SecretNumber", secretNumber);

let score = 20;
let highScore = 0;


// Function declaration
const displayMessage = function(message){
  const check = document.querySelector(".message").textContent = message;

  console.log("check", check);
}

document.querySelector(".check").addEventListener("click", function(){
  const guess = Number(document.querySelector(".guess").value);

  console.log("guess", guess);
})

// If no input provided then show "Invalid Input".
if(!guess)
{
displayMessage("Invalid Input");
}

// If guess guess equal to secretNumber then show "Correct Guess".
else if(guess === secretNumber)
{
  displayMessage("Correct Guess");

}
// displayMessage("Hello everyone");
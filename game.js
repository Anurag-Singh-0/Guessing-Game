const inputGuess = document.querySelector("#guess");
const guessBtn = document.querySelector("#guessButton");
const message = document.querySelector("#message");
const resetbtn = document.querySelector("#reset");

let random = Math.floor(Math.random() * 100) + 1;

guessBtn.addEventListener("click", () => {
  let guess = parseInt(inputGuess.value);

  if(guess < 0){
    message.textContent ="Please enter a valid number 🥲️";
    return;
  }

  if(guess === random){
    message.textContent = `Congratulation 🤑️🤑️, Finally you won the game, your guess is ${random}`;
    guessBtn.disabled = true;
  }else if(guess > random){
    alert("Your guess is too High, Try again 😒️");
  }else {
    alert("Your guess is to Low, Try again 😑️");
  }

  inputGuess.value = '';
});

resetbtn.addEventListener("click", () => {
  random = Math.floor(Math.random() * 100) + 1;
  message.textContent = '';
  guessBtn.disabled = false;
  inputGuess.value = '';
});

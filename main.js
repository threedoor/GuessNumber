var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector(".guesses");
var lastResult = document.querySelector(".lastResult");
var point = document.querySelector(".point");
var lowOrHi = document.querySelector(".lowOrHi");

var guessSubmit = document.querySelector(".guessSubmit");
var guessField = document.querySelector(".guessField");
var guessCount = 1;
var resetButton;

guessField.focus();

function checkGuess() {
  var userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "猜过的数字: ";
  }
  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "恭喜你，答对了！";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    point.textContent = "本次得分：" + guessCount * 10 + "分";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!游戏结束!!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "答错了!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "数字偏低!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "数字偏高!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "再猜一次";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;

  var resetParas = document.querySelectorAll(".resultParas p");
  for (var i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";

  randomNumber = Math.floor(Math.random() * 100) + 1;
}

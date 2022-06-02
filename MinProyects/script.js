"use strict";
//--transforming farenheit to celcius in Text
const calcFaren = function (farenh) {
  let message = "";
  let formula = (5 / 9) * (farenh - 32);
  let sentence = `(${farenh} F - 32) x 5/9 = ${Math.trunc(message + formula)}`;

  return sentence;
};
//--Calculating in number
const calcFarenNumber = function (farenh) {
  let formula = Math.round((5 / 9) * (farenh - 32));
  return formula;
};

//--transforming celcius to farenheit
const calcCelcius = function (celcius) {
  let formula = Math.trunc((5 / 9) * (celcius + 32));
  return formula;
};

//==messageFunction==

const displayMessage = function (message, color) {
  document.querySelector(".faren_message").textContent = message;
  document.querySelector(".faren_message").style.backgroundColor = color;
  // document.querySelector(".faren_message").style.backgroundColor = "blue";
};

console.log(calcFarenNumber(104));
console.log(calcFaren(22));
console.log(calcCelcius(104));
let result;
let resultNumber;

const farenheit = document
  .querySelector(".result")
  .addEventListener("click", function () {
    result = calcFaren(Number(document.querySelector(".faren_data").value));
    resultNumber = calcFarenNumber(
      Number(document.querySelector(".faren_data").value)
    );
    document.querySelector(".faren_result_text").textContent = resultNumber;
    document.querySelector(".calculation_message").textContent = result;

    const tempScan =
      resultNumber >= 37
        ? displayMessage("The temperature is too high 🔥", "#f56f6f")
        : displayMessage("The temperature is too low 🥶", "#80a0e6");

    /*==else if statment==*/
    // if (resultNumber >= 37) {
    //   // document.querySelector(".faren_message").textContent =
    //   //   "The temperature is too high 🔥";
    //   displayMessage("The temperature is too high 🔥");
    // } else if (resultNumber <= 10) {
    //   // document.querySelector(".faren_message").textContent =
    //   //   "The temperature is too low 🥶";
    //   displayMessage("The temperature is too low 🥶");
    // }
  });
//===Reset Btn===
let reset = "";
document.querySelector(".again").addEventListener("click", function () {
  let resetAgain = (document.querySelector(".faren_data").value = reset);

  document.querySelector(".faren_result_text").textContent = reset;
  //document.querySelector(".faren_message").textContent = "";
  //document.querySelector(".calculation_text").textContent = "Calculation:";
});
//===================================================================
//===================================================================
/*==Guess Number Game==*/
const btn_Reset = document.querySelector(".guess_again");
const guessOuput = document.querySelector(".guess_number");
const input_data = document.querySelector(".guess_input");
const btnCheck = document.querySelector(".btn_check");
const messageGuessing = document.querySelector(".message");
const bodyStyleMain = document.querySelector(".gues_game_container");
const highscore = document.querySelector(".highscore");
const score = document.querySelector(".score");

let secretNumber = Math.trunc(Math.random() * 10) + 1;
console.log(secretNumber);

let scoreStart = 10;
let highscoreStart = 0;

const message = function (message) {
  messageGuessing.textContent = message;
};
const messageOuput = function (message) {
  guessOuput.textContent = message;
};

const styleMain = function (color, size) {
  bodyStyleMain.style.backgroundColor = color;
  guessOuput.style.fontWeight = size;
};

btnCheck.addEventListener("click", function () {
  const guessBtn = Number(input_data.value);
  console.log(typeof guessBtn, guessBtn);

  if (!guessBtn) {
    message("⛔ No number");
  } else if (guessBtn === secretNumber) {
    message("✨ Congratulation");
    messageOuput(guessBtn);
    styleMain("#60b347", "900");

    if (scoreStart > highscoreStart) {
      highscoreStart = scoreStart;
      highscore.textContent = highscoreStart;
    }
  }
  // When guess is wrong
  else if (guessBtn !== secretNumber) {
    if (scoreStart > 1) {
      message(guessBtn > secretNumber ? "📈 Too high" : "📉 Too low!");
      scoreStart--;
      score.textContent = scoreStart;
    } else {
      message("💥 You lost the Game!");
      score.textContent = 0;
    }
  }
});

/*==Try Again functionality==*/
btn_Reset.addEventListener("click", function () {
  const inputReset = (input_data.value = 0);
  scoreStart = 10;
  secretNumber = Math.trunc(Math.random() * 10) + 1;
  message("Start Guessin!");
  score.textContent = scoreStart;
  guessOuput.textContent = "?";
  styleMain("white", "normal");
});
//===================================================================
//===================================================================

//--Creating switch boton celcius to faren

//===Creating Guess Game==

const keysArray = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
// const keyQ = document.querySelector(".guess_Q").textContent;

const paladin = ["Q", "W"];

// let keyQ = (document.querySelector(".guess_output").textContent = keysArray[0]);
// let keyW = (document.querySelector(".guess_output").textContent = keysArray[1]);

// const keybinds = document
//   .querySelector(".guess_Q")
//   .addEventListener("click", function () {
//     let keyQ = (document.querySelector(".guess_output").textContent =
//       keysArray[0]);
//     console.log(keyQ);
//     if (keyQ === paladin[0]) {
//       document.querySelector(".guess_Q").style.backgroundColor = "green";
//     } else {
//       document.querySelector(".guess_Q").style.backgroundColor = "red";
//     }
//     if (keyW === "W") {
//       document.querySelector(".guess_W").style.backgroundColor = "green";
//     }
//   });

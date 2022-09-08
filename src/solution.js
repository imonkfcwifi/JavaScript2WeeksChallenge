// const guessForm = document.getElementById("js-guess");
// const result = document.getElementById("js-result");
// const maxNumber = document.getElementById("maxNumber");

// function handleGuessSubmit(e) {
//     e.preventDefault();
//     const guessInput = guessForm.querySelector("input");
//     if (guessInput.value === "" && maxNumber === "") {
//         return;
//     }
//     const max = maxNumber.value;
//     const random = Math.ceil(Math.random() * max);
//     const userGuess = parseInt(guessInput.value, 10);
//     const resultSpan = result.querySelector("span");
//     resultSpan.innerHTML = `
//   You chose: ${userGuess},
//   the machine chose: ${random}.<br />
//   <strong>${userGuess === random ? "You won!" : "You lost!"}</strong>
//   `;
// }

// guessForm.addEventListener("submit", handleGuessSubmit);


// const clockTitle = document.querySelector(".js-clock");

// function getTime() {
//   const xmasDay = new Date(`${new Date().getFullYear()}-12-25:00:00:00+0900`);
//   const now = new Date();
//   // This is in milisecondsx
//   const difference = new Date(xmasDay - now);
//   const secondsInMs = Math.floor(difference / 1000);
//   const minutesInMs = Math.floor(secondsInMs / 60);
//   const hoursInMs = Math.floor(minutesInMs / 60);
//   const days = Math.floor(hoursInMs / 24);
//   const seconds = secondsInMs % 60;
//   const minutes = minutesInMs % 60;
//   const hours = hoursInMs % 24;
//   const daysStr = `${days < 10 ? `0${days}` : days}d`;
//   const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
//   const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m `;
//   const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;
//   clockTitle.innerHTML = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
// }

// getTime();
// setInterval(getTime, 1000);

const number = document.querySelector(".number");
const yourNumber = document.querySelector(".your_number");
const choose = document.querySelector(".choose");
const result = document.querySelector(".result");
const todaysNumber = [Math.floor(Math.random() * 10)];
const random = document.querySelector(".random");



function GameOver(event) {
    event.preventDefault();
    const YourNumberValue = yourNumber.value;
    localStorage.setItem("number", YourNumberValue);
    GameOver(YourNumberValue);

    if (YourNumberValue === todaysNumber) {
        choose.innerText = `This is your ${YourNumberValue}`;
        random.innerText = `Your Destiny is.. ${todaysNumber}`;
        result.innerHTML = "you win"
    }

    else {
        choose.innerText = `This is your ${YourNumberValue}`;
        random.innerText = `Your Destiny is.. ${todaysNumber}`;
        result.innerHTML = "You lose"
    }
}

number.addEventListener("submit", GameOver);
// choose.innerText = `This is your ${NUMBER_VALUE}`;
// result.innerText = `Your Destiny is.. ${RESULT_VALUE}`;

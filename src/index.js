const LottoForm = document.querySelector(".LottoForm");
const LottoInput = document.querySelector(".LottoInput");
const DestinyForm = document.querySelector(".DestinyForm");
const DestinyInput = document.querySelector(".DestinyInput");
const result = document.querySelector(".result");

function handlerRangeInput() {
    const rangeNum = LottoInput.value;
    DestinyInput.setAttribute("max", rangeNum);
    // max로 최대
}

LottoForm.addEventListener("input", handlerRangeInput);
// 입력(숫자나 문자) 즉시 (input) eventlisten
function handlerSubmit(event) {
    event.preventDefault();
    const rangeNum = LottoInput.value;
    const chooseNum = DestinyInput.value;
    const randomNum = Math.floor(Math.random() * rangeNum + 1);
    paintResult(chooseNum, randomNum)
}

DestinyForm.addEventListener("submit", handlerSubmit);
// 눌렀을때 (submit) eventlisten

function paintResult(chooseNum, randomNum) {

    if (parseInt(chooseNum) === randomNum) {
        result.innerText = `You chose: ${chooseNum}, 
        the machine chose: ${randomNum} You win`
    }

    else if (chooseNum < 0, randomNum < 0) {
        result.innerText = `write the right number`
    }
    else {
        result.innerText = `You chose: ${chooseNum}, 
        the machine chose: ${randomNum} You lose the money`

    }
}
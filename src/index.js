const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");

function handleSubmit(blabla) {
    blabla.preventDefault();
    console.log(blabla);
}
loginForm.addEventListener("submit", handleSubmit);

// 사실 브라우저는 function () <- 괄호 안에서 information을 주고있다
// JS는 submit 인자를 호출할시 function의 ( ) 안에 event object가 담긴 정보들을 제공한다
// 여기에서 preventDefault 의 함수를 추가함으로서 submit이 새로고침(페이지) 되는 현상을 막을 수 있다.

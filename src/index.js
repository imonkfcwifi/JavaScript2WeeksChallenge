const timerCount = document.querySelector(".timer");
const rick = document.querySelector("#rick");
function day() {
    const XmasDay = new Date("2022-12-25");
    const toDay = new Date();

    const dDay = XmasDay - toDay;

    const dDayDay = Math.floor(dDay / (1000 * 60 * 60 * 24));
    const dDayHour = Math.floor((dDay / (1000 * 60 * 60)) % 24);
    const dDayMin = Math.floor((dDay / (1000 * 60)) % 60);
    const dDaySec = Math.floor(dDay / 1000 % 60);

    timerCount.innerText = `${dDayDay}일 ${dDayHour}시간 ${dDayMin}분 ${dDaySec} 초 남았습니다.`

    const dDayDayrick = Math.floor((dDay / (1000 * 60 * 24)));
    const dDayHourrick = Math.floor((dDay / (1000 * 60)));
    const dDayMinrick = Math.floor((dDay / (1000 * 60 * 60 * 60)));

    const hap = dDayDayrick + dDayHourrick + dDayMinrick;
    rick.innerHTML = `대략 남은 릭 롤링 횟수 ${hap} 회`
}
day();
setInterval(day, 1000);
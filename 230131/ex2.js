// let seoulTime = new Date().toLocaleString("ko-KR", {timeZone: "Asia/Seoul"});
// let londonTime = new Date().toLocaleString("ko-KR", {
//   timeZone: "Europe/London",
// });
// let newYorkTime = new Date().toLocaleString("ko-KR", {
//   timeZone: "America/New_York",
// });

let nowTime = document.getElementById("nowTime");
let nowCity = "Asia/Seoul";

function setCity(city) {
  if (city === "런던") {
    nowCity = "Europe/London";
  } else if (city === "뉴욕") {
    nowCity = "America/New_York";
  } else {
    nowCity = "Asia/Seoul";
  }
  now = new Date().toLocaleString("ko-KR", {timeZone: nowCity});

  nowTime.innerText = now;
}

function startTime() {
  now = new Date().toLocaleString("ko-KR", {timeZone: nowCity});
  nowTime.innerText = now;
}

setInterval(startTime, 1000);

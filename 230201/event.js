let id = document.getElementById("id");
let password = document.getElementById("pw");

// 함수 형태로 만들고 html에 해당 함수 걸어주기도 가능
function onFocus(event) {
  event.target.style.backgroundColor = "bisque";
}

function onBlur(event) {
  event.target.style.backgroundColor = "white";
}

id.addEventListener("focus", onFocus);
id.addEventListener("blur", onBlur);

password.addEventListener("focus", onFocus);
password.addEventListener("blur", onBlur);

let div = document.getElementById("div");
div.addEventListener("click", () => alert("div"), true); // 이벤트 캡처링 true
let button = document.getElementById("button");
button.addEventListener("click", () => alert("button"));

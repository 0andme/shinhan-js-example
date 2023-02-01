// 아래 HTML 을 활용해서,
// id / pw input 태그에 focus 하면 크기가 2배가 되고,
// blur 하면 크기가 원래대로 돌아오도록 코드를 작성해보세요. (focus, blur 이벤트 활용)

// 동일한 HTML 을 활용해서,
// id / pw input 태그에 글자를 입력하려고 할때마다 width 가 커지고,
// 글자를 지울때마다 width 가 작아지도록 코드를 작성해보세요. (keydown 이벤트 활용)

let id = document.getElementById("id");
let pw = document.getElementById("pw");

function onDoubleSize(event) {
  event.target.style.width = "200px";
  event.target.style.height = "60px";
}

function onOriginSize(event) {
  event.target.style.width = "100px";
  event.target.style.height = "30px";
}

function onKeydown(event) {
  if (event.key === "Backspace") {
    onOriginSize(event);
  } else {
    onDoubleSize(event);
  }
}

id.addEventListener("focus", onDoubleSize);
id.addEventListener("blur", onOriginSize);
id.addEventListener("keydown", onKeydown);

pw.addEventListener("focus", onDoubleSize);
pw.addEventListener("blur", onOriginSize);
pw.addEventListener("keydown", onKeydown);

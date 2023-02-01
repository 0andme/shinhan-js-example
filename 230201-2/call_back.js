// 2초 후에 width 100px, height 100px 의 div 를 body 태그에 추가하는 함수를
// 작성하고, 콜백 함수를 활용해서 div 추가가 완료되면
// 해당 div 태그의 배경 색을 lightblue 로 변경하는 코드를 작성하세요.

function addDiv(callback) {
  setTimeout(() => {
    let divEl = document.createElement("div");
    divEl.style.width = "100px";
    divEl.style.height = "100px";
    document.body.append(divEl);
    callback();
  }, 2000);
}

function changeColor() {
  let divEl = document.getElementsByTagName("div")[0];
  divEl.style.backgroundColor = "lightblue";
}

addDiv(changeColor);

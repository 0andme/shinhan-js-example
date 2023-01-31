// let firstBox = document.getElementById("firstBox");

// function sayHi() {
//   console.log("안녕");
// }

// firstBox.addEventListener("click", sayHi); // 함수에 () 를 붙이면 안됨!
function showMsg(event) {
  console.log(event.target);
  console.log(event.target.innerText);
}

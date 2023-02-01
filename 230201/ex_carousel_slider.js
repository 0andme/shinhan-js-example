let nowX = 0;
let items = document.querySelectorAll(".item");

function onMouseDown(event) {
  console.log(event.clientX);
  nowX = event.clientX;

  for (let item of items) {
    item.style.transform = `translate(${-nowX}%)`; // 해당 요소 크기만큼 왼쪽으로 이동
  }
}

let items = document.getElementsByClassName("item");
let nowNum = 0;
function prev() {
  nowNum--;

  for (let i = 0; i < 4; i++) {
    items[i].style.transform = `translate(${-100 * nowNum}%)`;
  }
}

function next() {
  nowNum++;
  for (let i = 0; i < 4; i++) {
    items[i].style.transform = `translate(${-100 * nowNum}%)`;
  }
}

let numAEl = document.getElementById("numA");
let numBEl = document.getElementById("numB");
let resultEl = document.getElementById("result");
let upDownNumEl = document.getElementById("upDownNum");

function sumNum() {
  let res = Number(numAEl.value) + Number(numBEl.value);
  resultEl.innerText = res;
}

function downNum() {
  let nowNum = Number(upDownNumEl.innerText);
  upDownNumEl.innerText = nowNum - 1;
}

function upNum() {
  let nowNum = Number(upDownNumEl.innerText);
  upDownNumEl.innerText = nowNum + 1;
}

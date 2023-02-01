let pw = document.getElementById("pw");

function onKeydownPrint(event) {
  console.log(event.target.value);
}

pw.addEventListener("keydown", onKeydownPrint);

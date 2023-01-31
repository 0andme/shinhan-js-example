function toggleMenu() {
  let menu = document.getElementById("menu");
  let buttonEl = document.getElementsByTagName("button")[0];

  if (menu.style.display === "none") {
    menu.style.display = "block";
    buttonEl.innerText = "메뉴 펼치기";
  } else {
    menu.style.display = "none";
    buttonEl.innerText = "메뉴 닫기";
  }
}

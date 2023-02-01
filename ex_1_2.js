let highlightedBtn;

const highlight = (element) => {
  if (highlightedBtn) {
    highlightedBtn.classList.remove("highlight");
  }
  element.classList.add("highlight");
};

let menu = document.getElementById("menu");

menu.addEventListener("click", (event) => {
  highlight(event.target);
  highlightedBtn = event.target;
});

let highlightedBtn;

const highlight = (element) => {
  if (highlightedBtn) {
    highlightedBtn.classList.remove("highlight");
  }
  element.classList.add("highlight");
  highlightedBtn = element;
};

let menu = document.getElementById("menu");

menu.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    highlight(event.target);
  }
});

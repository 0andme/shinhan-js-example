let selectedButton; // highlight한 요소 저장을 위한 전역 변수
const highlight = (element) => {
  if (selectedButton) {
    // 이미 highlight 한 요소가 있다면
    selectedButton.classList.remove("highlight"); // 클래스에서 삭제
  }
  element.classList.add("highlight"); // 사용자가 누른 요소 highlight
  return element;
};

let menu = document.getElementById("menu");
menu.addEventListener("click", (event) => {
  let target = event.target;
  if (target.tagName !== "BUTTON") return; // 클릭한 요소가 버튼이 아니면 그냥 넘어감
  selectedButton = highlight(target); // highlight한 요소 저장
});

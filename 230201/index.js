const buttonClick = (event) => {
  // event 를 매개변수로 받음;
  event.stopPropagation(); // 부모 요소로의 이벤트 버블링을 중지
  alert("버튼을 눌렀습니다!");
};

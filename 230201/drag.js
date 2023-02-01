const moveImg = (img, x, y) => {
  img.style.left = x - img.offsetWidth / 2;
  img.style.top = y - img.offsetHeight / 2;
};

const onMouseDown = (event) => {
  const img = event.target;
  img.style.position = "absolute";
  const moveTargetByEvent = (e) => moveImg(img, e.pageX, e.pageY);
  //   마우스를 움직이는 동안의 이벤트를 가지고와서 활용해야함
  document.addEventListener("mousemove", moveTargetByEvent);
  img.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", moveTargetByEvent);
  });
};

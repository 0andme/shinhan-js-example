let modal = document.getElementById("modal");
let modalItem = document.getElementById("item");

function closeModal() {
  // modal.style.display = "none";
  modal.style.opacity = 0;
}

function showModal() {
  modal.style.display = "block";
  // modal.style.opacity = 1;
  modal.style.animation = "fadein 1s";
}

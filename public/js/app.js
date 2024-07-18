document.addEventListener("DOMContentLoaded", function () {
  // Add your JavaScript here.
});

function changeBackground() {
  // Add your JavaScript here.
  document.body.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
};

function displayMenu() {
  let menuPad = document.getElementById("menuPad");
  console.log(menuPad);
  menuPad.setAttribute("display", "flex");
}
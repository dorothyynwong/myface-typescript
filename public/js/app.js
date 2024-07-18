document.addEventListener("DOMContentLoaded", function () {
  // Add your JavaScript here.
});

function changeBackground() {
  // Add your JavaScript here.
  
  document.body.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
};

function displayMenu() {
  let menuPad = document.getElementById("menuPad");
  const displayValue = menuPad.className;
  if (displayValue === "menuPadHidden")  menuPad.setAttribute("class","menuPadShow");
  else  menuPad.setAttribute("class","menuPadHidden");
}
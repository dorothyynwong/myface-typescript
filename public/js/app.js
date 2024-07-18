document.addEventListener("DOMContentLoaded", function () {
  // Add your JavaScript here.
});

document.addEventListener('click', function(event) {
  if(event.target.id !== 'menuButton' && event.target.id !== "menuPad")
  {
    let menuPad = document.getElementById("menuPad");
    menuPad.setAttribute("class","menuPadHidden");
  }

});

document.addEventListener('keydown', function(event) {
  if(event.key === "Escape")
  {
    let menuPad = document.getElementById("menuPad");
    menuPad.setAttribute("class","menuPadHidden");
  }

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

function checkAllInput() {
  // console.log("check all input");
  const createUserInputs = document.getElementsByClassName("createUserInput");
  //console.log(createUserInputs[0].value);
  let showSubmit = true;
  for(let createUserInput of createUserInputs) {
    if (createUserInput.value === "") {
      showSubmit = false;
      break;
    }
  }
  const submitButton = document.getElementById("createUserSubmitID");
  if (showSubmit) submitButton.setAttribute("class", "submitButton");
}
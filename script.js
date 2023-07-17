const errorMessage = document.getElementById("errorMessage");
const submitButton = document.getElementById("submitButton");
const userInput = document.getElementById("userInput");
const errorIcont = document.getElementById("errorIcon");
const emailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

submitButton.addEventListener("click", submit);

function submit() {
  if (!emailValidation.test(userInput.value)) {
    errorMessage.classList.remove("hide");
    errorIcon.classList.remove("hide");
  } else {
    errorMessage.classList.add("hide");
    errorIcont.classList.add("hide");
    userInput.value = "";
  }
}

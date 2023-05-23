const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", () => {
  const requiredLength = parseInt(validationInput.dataset.length);
  const inputLength = validationInput.value.length;

  if (inputLength === requiredLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});

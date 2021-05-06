let linkInput = document.querySelector("[data-link-input]");

function myFunction() {
  navigator.clipboard.writeText(linkInput.placeholder);
}

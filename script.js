let linkInput = document.querySelector("[data-link-input]");

function myFunction() {
  navigator.clipboard.writeText(linkInput.placeholder);
}

function submitAnswer() {
  let correct = 0;
  let input = document.querySelectorAll("input[type='radio']checked");
  for (let i = 0; i < 5; i++) {
    points += parseInt(input[i].value);
  }
  document.querySelector(".play").classList.toggle("invisible");
  document.querySelector(".play").classList.toggle("invisible");
}

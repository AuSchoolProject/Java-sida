let linkInput = document.querySelector("[data-link-input]");
let result = document.querySelector(".result");
let text = document.createElement("h2");
result.classList.toggle("invisible");
result.append(text);

function myFunction() {
  navigator.clipboard.writeText(linkInput.placeholder);
}

function submitAnswer() {
  let input = document.querySelector("input[type='radio']:checked");
  console.log("hej");

  if (input.value == "1") {
    console.log("hej");
    text.innerText = "You are right!";
    document.querySelector(".questions").classList.toggle("invisible");
    result.classList.toggle("invisible");
  } else {
    text.innerText = "You are Wrong!";
    document.querySelector(".questions").classList.toggle("invisible");
    result.classList.toggle("invisible");
  }
}

function reset() {
  document.querySelector(".questions").classList.toggle("invisible");
  result.classList.toggle("invisible");
}

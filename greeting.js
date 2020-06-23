const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  name = document.querySelector(".js-name"),
  greeting = document.querySelector(".js-greetings"),
  start = document.querySelector(".js-startApp");

const user_ls = "currentUser",
  showing_on = "showing";

function saveName(text) {
  localStorage.setItem(user_ls, text);
}

function handleSubmit(event) {
  // prevent default action by preventDefault()
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
  startApplication();
}

function askForName() {
  form.classList.add(showing_on);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(showing_on);
  greeting.classList.add(showing_on);
  greeting.innerHTML += `${text} `;
}
// why not refresh?
function startApplication() {
  start.classList.remove("js-startApp");
}

function loadName() {
  const currentUser = localStorage.getItem(user_ls);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
    startApplication();
  }
}

function init() {
  loadName();
}
init();

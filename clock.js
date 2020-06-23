const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1"),
  helloTime = document.querySelector("#js-greetingbox");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}
//setInterval()
function hello() {
  const hours = new Date().getHours();
  console.log(hours, helloTime);
  if (hours >= 6 && hours < 12) {
    helloTime.innerText += "Good Morning ";
  } else if (hours >= 12 && hours <= 19) {
    helloTime.innerText = "Good Afternoon ";
    console.log("right");
  } else {
    helloTime.innerText += "Good night ";
  }
  console.log(helloTime);
}
function init() {
  getTime();
  setInterval(getTime, 1000);
  hello();
}

init();

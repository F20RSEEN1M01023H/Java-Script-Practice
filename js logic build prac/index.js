// let clicks = 0; beacuse now we store this button into local storage

const button = document.getElementById("btn");
const displayCount = document.getElementById("count");

let clicks = parseInt(localStorage.getItem("clickCount")) || 0;
let isDisabled = localStorage.getItem("isDisabled") === "true";
displayCount.textContent = `Button Clicked ${clicks} times`;
button.disabled = isDisabled;

button.addEventListener("click", () => {
  clicks++;
  displayCount.textContent = `Button Clicked ${clicks} times`;
  localStorage.setItem("clickCount", clicks);

  if (clicks === 5 && !button.disabled) {
    button.disabled = true;
    localStorage.setItem("isDisabled", "true");
    alert("Button disabled after 5 clicks");

    // we need 10 sec wait to reenable the button

    setTimeout(() => {
      button.disabled = false;
      clicks = 0;
      displayCount.textContent = `Button Clicked ${clicks} times`;
      localStorage.setItem("clickCout", clicks);
      localStorage.setItem("isDisabled", "false");
    }, 10000);
  }
});

function add(num1, num2) {
  const result = document.getElementById("output");
  const result2 = num1 + num2;
  result.textContent = `The sum is ${result2}`;
}
add(5, 10);

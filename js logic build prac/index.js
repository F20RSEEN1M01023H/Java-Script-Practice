let clicks = 0;
const button = document.getElementById("btn");
const displayCount = document.getElementById("count");

button.addEventListener("click", () => {
  clicks++;
  displayCount.textContent = `Button clicked ${clicks} times`;
  if (clicks >= 5) {
    button.disabled = true;
    alert("button is only 5 times clicked and then disabled");
  }
});

function add(num1, num2) {
  const result = document.getElementById("output");
  const result2 = num1 + num2;
  result.textContent = `The sum is ${result2}`;
}
add(5, 10);

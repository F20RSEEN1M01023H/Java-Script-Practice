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

// function gets two numbers and give output

function add(num1, num2) {
  const result = document.getElementById("output");
  const result2 = num1 + num2;
  result.textContent = `The sum is ${result2}`;
}
add(5, 10);

// Check the eligibilty for voting

const btn1 = document.getElementById("btn1");
const ageDisplay = document.getElementById("age");
const resultDisplay = document.getElementById("result");

btn1.addEventListener("click", () => {
  age = parseInt(prompt("Enter your age:"));
  ageDisplay.textContent = age;
  if (age < 0 || isNaN(age)) {
    resultDisplay.textContent = "Please enter a valid age";
    return;
  }
  if (age >= 18) {
    resultDisplay.textContent = "You are eligible for voting";
  } else {
    resultDisplay.textContent = "You are not eligible for voting";
  }
});

// loop for ( 1 to 5 )
for (let i = 1; i <= 5; i++) {
  console.log(`Iteration number: ${i}`);
}

// by using while loop
let i = 1;
while (i <= 5) {
  console.log(`While Loop Iteration number: ${i}`);
  i++;
}

// by using do while loop
let j = 1;
do {
  console.log(`Do While Loop Iteration number: ${j}`);
  j++;
} while (j <= 5);

// Arrays
let fruits = ["Apple", "Banana", "Mango", "Orange"];
for (let k = 0; k < fruits.length; k++) {
  console.log(`Fruit: ${fruits[k]}`);
}

// Show days of the week using a loop.
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
for (let e = 0; e < days.length; e++) {
  console.log(`Day: ${days[e]}`);
}

// if we want to show output array like the Day 1 and etc.
for (let d = 1; d <= 7; d++) {
  console.log(`Day ${d}`);
}

// 🧩 Real-World Problem: Salary Filter

// 👉 Print salaries above 30,000
// From 10,000 to 50,000

for (let i = 30001; i <= 50000; i++) {
  console.log(`Salary: ${i}`);
}

// Real-World Problem: Passed Students
// let marks = [45, 67, 80, 32, 90];

// 👉 Print only marks ≥ 50
let marks = [45, 67, 80, 32, 90];
for (let i = 0; i < marks.length; i++) {
  if (marks[i] >= 50) {
    console.log(`Passed Marks: ${marks[i]}`);
  }
}

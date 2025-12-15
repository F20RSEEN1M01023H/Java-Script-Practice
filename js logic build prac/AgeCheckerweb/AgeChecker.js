const input = document.getElementById("inputAge");
const checkbtn = document.getElementById("btn2");
const ageDisplay = document.getElementById("ageDisplay");

checkbtn.addEventListener("click", () => {
  const age = parseInt(input.value);
  if (age < 0 || isNaN(age)) {
    ageDisplay.textContent = "please enter a valid age.";
  }
  if (age >= 18) {
    ageDisplay.textContent = "you are eligible for voting.";
  } else if (age >= 16) {
    ageDisplay.textContent = "You are eligible for a learners permit.";
  } else {
    ageDisplay.textContent = "You are eligible to go to school.";
  }
});

const input = document.getElementById("inputAge");
const checkbtn = document.getElementById("btn2");
const ageDisplay = document.getElementById("ageDisplay");

checkbtn.addEventListener("click", () => {
  const age = parseInt(input.value);
  ageDisplay.textContent = age;
  if (age < 0 || isNaN(age)) {
    ageDisplay.textContent = "please enter a valid age.";
  }
  if (age >= 16 && age < 18) {
    ageDisplay.textContent = "You are eligible for a learners permit.";
  } else if (age >= 18) {
    ageDisplay.textContent = "you are eligible for voting.";
  } else {
    ageDisplay.textContent = "you go to school.";
  }
});

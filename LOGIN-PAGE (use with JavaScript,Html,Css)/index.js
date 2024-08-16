let signup = document.querySelector(".signupbtn");
let sign1 = document.querySelector(".signinbtn");
let namefield = document.querySelector(".name");
let title = document.querySelector(".title");
let underline = document.querySelector(".underline");

sign1.addEventListener("click", () => {
  namefield.style.maxHeight = "0"; // Hides the name field
  title.innerHTML = "Sign In"; // Changes the title text
  signup.classList.add("disable");
  sign1.classList.remove("disable");
});

signup.addEventListener("click", () => {
  namefield.style.maxHeight = "60px"; // Hides the name field
  title.innerHTML = "Sign Up"; // Changes the title text
  signup.classList.remove("disable");
  sign1.classList.add("disable");
});

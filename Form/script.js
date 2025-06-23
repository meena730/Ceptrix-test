document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username");
  const password = document.getElementById("password");

  const isUsernameValid = validateField(username);
  const isPasswordValid = validateField(password);

  if (isUsernameValid && isPasswordValid) {
    alert("Login successful ✅");
  }
});

// on blur
["username", "password"].forEach((fieldId) => {
  const input = document.getElementById(fieldId);
  input.addEventListener("blur", () => validateField(input));
});

// Mai
function validateField(input) {
  const fieldId = input.id;
  const value = input.value.trim();
  const error = document.getElementById(`${fieldId}-error`);

  // validation
  if (
    (fieldId === "username" && !/^[A-Za-z]+$/.test(value)) ||
    (fieldId === "password" && value.length < 10)
  ) {
    error.textContent =
      fieldId === "username"
        ? "Username must contain only letters!"
        : "Password must be at least 10 characters!";
    applyErrorStyles(input);
    return false;
  } else {
    error.textContent = "";
    resetStyles(input);
    return true;
  }
}

// red on error
function applyErrorStyles(input) {
  const label = document.querySelector(`label[for="${input.id}"]`);
  input.classList.remove("valid-input"); 
  input.style.border = "2px solid red";
  input.style.color = "red";
  if (label) label.style.color = "red";
}

// green if filled & valid)
function resetStyles(input) {
  const label = document.querySelector(`label[for="${input.id}"]`);
  input.classList.add("valid-input");                        // its define in css file to show green color
  input.style.border = ""; 
  input.style.color = "";
  if (label) label.style.color = "";
}



// // show diff diff color border on diff action ,,(when uncomment this , code override css )

// // color code using js

// const inputs = document.querySelectorAll(".input-group input");

// inputs.forEach((input) => {
//   input.addEventListener("focus", () => {
//     input.style.border = "2px solid blue";
//     input.style.color = "blue";
//     input.nextElementSibling.style.color = "blue";
//   });

//   input.addEventListener("blur", () => {
//     const value = input.value.trim();
//     const label = input.nextElementSibling;

//     // Validation logic
//     if (input.id === "username" && !/^[A-Za-z]+$/.test(value)) {
//       input.style.border = "2px solid red";
//       input.style.color = "red";
//       label.style.color = "red";
//     } else if (input.id === "password" && value.length < 10) {
//       input.style.border = "2px solid red";
//       input.style.color = "red";
//       label.style.color = "red";
//     } else {
//       input.style.border = "2px solid blue";
//       input.style.color = "#78787b;";
//       label.style.color = "#78787b;";
//     }
//   });
// });

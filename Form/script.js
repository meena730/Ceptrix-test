document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const usernameError = document.getElementById("username-error");
  const passwordError = document.getElementById("password-error");

  let isValid = true;

  // Username validation
  if (!/^[A-Za-z]+$/.test(username.value.trim())) {
    usernameError.textContent = "Username must contain only letters!";
    applyErrorStyles(username);
    isValid = false;
  } else {
    usernameError.textContent = "";
  }

  // Password validation
  if (password.value.trim().length !== 10) {
    passwordError.textContent = "Password must be exactly 10 characters!";
    applyErrorStyles(password);
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  if (isValid) {
    alert("Login successful ✅");
  }
});

// On blur validations for individual fields
["username", "password"].forEach((fieldId) => {
  const input = document.getElementById(fieldId);
  const error = document.getElementById(`${fieldId}-error`);

  input.addEventListener("blur", () => {
    const value = input.value.trim();
    const label = input.nextElementSibling;

    // Floating label effect
    if (value !== "") {
      input.classList.add("filled");
    } else {
      input.classList.remove("filled");
    }

    // Validation & styling
    if (
      (fieldId === "username" && !/^[A-Za-z]+$/.test(value)) ||
      (fieldId === "password" && value.length !== 10)
    ) {
      error.textContent =
        fieldId === "username"
          ? "Username must contain only letters!"
          : "Password must be exactly 10 characters!";
      applyErrorStyles(input);
    } else {
      error.textContent = "";
      resetStyles(input);
    }
  });
});

//          red border & color
function applyErrorStyles(input) {
  const label = input.nextElementSibling;
  input.style.border = "2px solid red";
  input.style.color = "red";
  if (label) label.style.color = "red";
}

// reset styles ,(default)
function resetStyles(input) {
  const label = input.nextElementSibling;
  input.style.border = "";
  input.style.color = "";
  if (label) label.style.color = "";
}





// show diff diff color border on diff action ,,(when uncomment this , code override css )

// color code using js

// const inputs = document.querySelectorAll(".input-group input");

// inputs.forEach((input) => {
//   input.addEventListener("focus", () => {
//     input.style.border = "2px solid green";
//     input.style.color = "green";
//     input.nextElementSibling.style.color = "green";
//   });

//   input.addEventListener("blur", () => {
//     const value = input.value.trim();
//     const label = input.nextElementSibling;

//     // Label floating
//     if (value !== "") {
//       input.classList.add("filled");
//     } else {
//       input.classList.remove("filled");
//     }

//     // Validation logic
//     if (input.id === "username" && !/^[A-Za-z]+$/.test(value)) {
//       input.style.border = "2px solid red";
//       input.style.color = "red";
//       label.style.color = "red";
//     } else if (input.id === "password" && value.length < 6) {
//       input.style.border = "2px solid red";
//       input.style.color = "red";
//       label.style.color = "red";
//     } else {
//       input.style.border = "2px solid #5c5cff";
//       input.style.color = "#000";
//       label.style.color = "#777";
//     }
//   });
// });

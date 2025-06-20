document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const usernameError = document.getElementById("username-error");
  const passwordError = document.getElementById("password-error");

  let isValid = true;

  if (!/^[A-Za-z]+$/.test(username)) {
    usernameError.textContent = "Username must contain only letters!";
    isValid = false;
  } else {
    usernameError.textContent = "";
  }

  if (password.length !== 10) {
    passwordError.textContent = "Password must be exactly 10 characters!";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  if (isValid) {
    alert("Login successful ✅");
  }
});

// On blur validation
document.getElementById("username").addEventListener("blur", () => {
  const username = document.getElementById("username").value.trim();
  document.getElementById("username-error").textContent = /^[A-Za-z]+$/.test(
    username
  )
    ? ""
    : "Username must contain only letters!";
});

document.getElementById("password").addEventListener("blur", () => {
  const password = document.getElementById("password").value.trim();
  document.getElementById("password-error").textContent =
    password.length === 10 ? "" : "Password must be exactly 10 characters!";
});



document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("blur", () => {
    if (input.checkValidity()) {
      input.classList.remove("invalid");
      input.classList.add("valid");
    } else {
      input.classList.remove("valid");
      input.classList.add("invalid");
    }
  });

  input.addEventListener("input", () => {
    input.classList.remove("invalid");
    input.classList.remove("valid");
  });
});
  



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

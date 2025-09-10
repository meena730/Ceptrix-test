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

// Blur + validation
["username", "password"].forEach((fieldId) => {
  const input = document.getElementById(fieldId);
  input.addEventListener("blur", () => validateField(input));
});

// Focus -blue  color
const inputs = document.querySelectorAll(".input-group input");
inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    const label = document.querySelector(`label[for="${input.id}"]`);
    input.style.border = "2px solid blue";
    input.style.color = "blue";
    if (label) label.style.color = "blue";
  });
});

// Main validation logic
function validateField(input) {
  const fieldId = input.id;
  const value = input.value.trim();
  const error = document.getElementById(`${fieldId}-error`);
  const label = document.querySelector(`label[for="${fieldId}"]`);

  if (
    (fieldId === "username" && !/^[A-Za-z]+$/.test(value)) ||
    (fieldId === "password" && value.length < 10)
  ) {
    error.textContent =
      fieldId === "username"
        ? "Username must contain only letters!"
        : "Password must be at least 10 characters!";
    input.style.border = "2px solid red";
    input.style.color = "red";
    if (label) label.style.color = "red";
    return false;
  } else {
    error.textContent = "";
    input.style.border = "2px solid green";
    input.style.color = "green";
    if (label) label.style.color = "green";
    return true;
  }
}

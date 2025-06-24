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

["username", "password"].forEach((fieldId) => {
  const input = document.getElementById(fieldId);
  const group = input.closest(".input-group");

  input.addEventListener("focus", () => {
    group.classList.add("is-focused");
  });

  input.addEventListener("blur", () => {
    group.classList.remove("is-focused");
    validateField(input);
  });
});

function validateField(input) {
  const fieldId = input.id;
  const value = input.value.trim();
  const error = document.getElementById(`${fieldId}-error`);
  const group = input.closest(".input-group");

  let isValid = false;

  if (fieldId === "username") {
    isValid = /^[A-Za-z]+$/.test(value);
  } else if (fieldId === "password") {
    isValid = value.length >= 10;
  }

  if (!isValid) {
    error.textContent =
      fieldId === "username"
        ? "Username must contain only letters!"
        : "Password must be at least 10 characters!";
    group.classList.remove("is-valid");
    group.classList.add("is-error");
    return false;
  } else {
    error.textContent = "";
    group.classList.remove("is-error");
    group.classList.add("is-valid");
    return true;
  }
}

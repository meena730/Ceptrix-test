const toggle = container5.querySelector("#expectToggle");
const content = container5.querySelector("#expectContent");

toggle.addEventListener("click", () => {
  const isVisible = content.style.display === "block";
  content.style.display = isVisible ? "none" : "block";
});

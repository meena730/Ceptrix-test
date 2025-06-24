(function () {
  window.addEventListener("DOMContentLoaded", () => {
    const block = document.querySelector(
      ".wp-block-group.hero-cta.d-inline-block"
    );

    if (!block) {
      console.error("❌Target block not found");
      return;
    }

    const formContainer = document.createElement("div");
    formContainer.innerHTML = `
        <form id="greenForm" >
          <input name="input_1" id="inputEmail" type="email" required placeholder="Enter your email" />
          <button type="submit" >Submit</button>
        </form>
      `;

    block.parentNode.insertBefore(formContainer, block);

    document
      .getElementById("greenForm")
      .addEventListener("submit", function (e) {
        e.preventDefault();
        const value = document.getElementById("inputEmail").value;

        sessionStorage.setItem("userInput", value);

        // localStorage
        localStorage.setItem("userInput", value);

        // for cookkkkk
        document.cookie =
          "userInput=" +
          encodeURIComponent(value) +
          "; path=/; max-age=" +
          60 * 60;

        // next page
        window.location.href = "https://www.talentlms.com/platform";
      });
    const inputValue = sessionStorage.getItem("userInput");

    const heading = document.querySelector("#h-platform-overview");

    if (heading && inputValue) {
      heading.textContent = `Hi ${inputValue},🎓`;
      heading.style.color = "#228B22";
    }
  });
})();

const inputValue = sessionStorage.getItem("userInput");

const heading = document.querySelector("#h-platform-overview");

if (heading && inputValue) {
  heading.textContent = `Hi ${inputValue},🎓`;
  heading.style.color = "#228B22";
}

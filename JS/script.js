const languageCurrent = document.querySelector(".language-current");
const languageList = document.querySelector(".language-list");
languageCurrent.addEventListener("click", () => {
  languageList.style.display =
    languageList.style.display === "block" ? "none" : "block";
});

const dropdown = document.querySelector(".dropdown");
const button = document.querySelector(".dropdown-button");
const items = document.querySelectorAll("dropdown-item");
const buttonText = button.querySelector("span");

button.addEventListener("click", function () {
  dropdown.classList.toggle("open");
});

items.forEach(function (item) {
  item.addEventListener("click", function () {
    buttonText.textContent = item.textContent;
    dropdown.classList.remove("open");
  });
});

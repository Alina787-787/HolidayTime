const languageCurrent = document.querySelector(".language-current");
const languageList = document.querySelector(".language-list");
languageCurrent.addEventListener("click", () => {
  languageList.style.display =
    languageList.style.display === "block" ? "none" : "block";
});

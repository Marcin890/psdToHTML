const btn = document.querySelector("#more");
const view = document.querySelector("#traditional");
btn.addEventListener("click", () => {
  view.scrollIntoView({ behavior: "smooth", block: "start" });
});

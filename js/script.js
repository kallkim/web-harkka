const hamburger = document.querySelector("#nav-menu1");
const navsub = document.querySelector(".nav");
hamburger.addEventListener("click", () => {
  navsub.classList.toggle("active");
});

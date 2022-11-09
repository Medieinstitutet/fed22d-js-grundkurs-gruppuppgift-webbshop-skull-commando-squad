const hejHej = "Hallå!";

console.log(hejHej);

// testar js med hamburger menu, work in progress..

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".munk-nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  navMenu.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

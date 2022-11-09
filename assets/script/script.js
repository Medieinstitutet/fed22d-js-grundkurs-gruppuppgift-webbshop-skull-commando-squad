const hejHej = "Hallå!";

console.log(hejHej);

const hamburger = document.querySelector(".hamburger"); // deklarerar en hamburger variabel
const navMenu = document.querySelector(".munk-nav-menu"); // deklarerar en menu variabel

// skapar en klick funktion till hamburger och menu för att aktiveras
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// skapar en funktion för alla nav items för att ta bort aktivering
document.querySelectorAll(".nav-link").forEach((n) =>
  navMenu.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

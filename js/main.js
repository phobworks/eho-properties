/* ======== nav bar scroll reveal ========= */
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scrolled", window.scrollY > 0);
});
/* ======== nav bar scroll reveal end ========= */

/* Navbar  */
const nav = document.querySelector(".nav__links");
const openNavBtn = document.querySelector("#nav__toggle-open");
const closeNavBtn = document.querySelector("#nav__toggle-close");

const openNav = () => {
  nav.style.display = "flex";
  openNavBtn.style.display = "none";
  closeNavBtn.style.display = "inline-block";
  nav.classList.remove("reverse"); // Remove reverse class when opening nav
};

openNavBtn.addEventListener("click", openNav);

const closeNav = () => {
  // Add reverse class to apply reverse animation
  nav.classList.add("reverse");

  // Wait for the animation to complete before hiding nav
  setTimeout(() => {
    nav.style.display = "none";
    openNavBtn.style.display = "inline-block";
    closeNavBtn.style.display = "none";
  }, 1000); // Match the duration of the animation (1s)
};

closeNavBtn.addEventListener("click", closeNav);

nav.querySelectorAll("li a").forEach((navLink) => {
  navLink.addEventListener("click", closeNav);
});

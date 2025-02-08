
// side menu
const hamburger = document.querySelector("#hamburger");
const closeIcon = document.querySelector("#closeNavList");
const navList = document.querySelector(".navListBar");
function toggleNav() {
  navList.classList.toggle("show");
}
hamburger.addEventListener("click", toggleNav);
closeIcon.addEventListener("click", toggleNav);

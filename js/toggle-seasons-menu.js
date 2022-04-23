const seasonsMenu = document.querySelector(".seasons");
const openMenuBtn = document.querySelector(".toggle-menu");

openMenuBtn.addEventListener("click", () => {
  seasonsMenu.classList.toggle("open");
  openMenuBtn.classList.toggle("rotate");
});

const menuBtn = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const headerButtons = document.getElementById("header-buttons");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("toggle");
  mobileMenu.classList.toggle("active");
});

// history page

const cards = document.querySelectorAll(".history-card");

cards.forEach((card) => {
  // const cardImage = card.children[0];
  card.addEventListener("dblclick", () => {
    card.classList.toggle("active");
    const deleteBtn = card.querySelector(".delete");
    const cancelBtn = card.querySelector(".cancel");

    deleteBtn.addEventListener("click", () => {
      deleteBtn.parentElement.parentElement.remove();
    });

    cancelBtn.addEventListener("click", () => {
      card.classList.remove("active");
    });
  });
});

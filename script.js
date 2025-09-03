const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
   document.body.classList.toggle("show-mobile-menu");    
});
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

navLinks.forEach(link => {
   link.addEventListener("click", () => menuOpenButton.click());
   })

const swiper = new Swiper('.slider-wrapper',{
   loop: true,
   grabCursor: true,
   spaceBetween: 25, 
}) 
// Swiper initialization
const swiper = new Swiper(".productSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiperNextBtn",
    prevEl: ".swiperPrevBtn",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 6,
    },
  },
});

// side menu
const hamburger = document.querySelector("#hamburger");
const closeIcon = document.querySelector("#closeNavList");
const navList = document.querySelector(".navListBar");
function toggleNav() {
  navList.classList.toggle("show");
}
hamburger.addEventListener("click", toggleNav);
closeIcon.addEventListener("click", toggleNav);

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".showcase__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".showcase__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".showcase__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".showcase__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});

document.querySelectorAll(".destination__card").forEach((card) => {
  const bgImage = card.getAttribute("data-bg");
  card.style.setProperty("--bg-image", `url(${bgImage})`);
  card.style.position = "relative";

  const bgElement = document.createElement("div");
  bgElement.classList.add("hover-bg");
  bgElement.style.position = "absolute";
  bgElement.style.top = "0";
  bgElement.style.left = "0";
  bgElement.style.width = "100%";
  bgElement.style.height = "100%";
  bgElement.style.backgroundImage = `url(${bgImage})`;
  bgElement.style.backgroundSize = "cover";
  bgElement.style.backgroundPosition = "center";
  bgElement.style.filter = "brightness(0.6)";
  bgElement.style.opacity = "0";
  bgElement.style.transition = "opacity 0.4s ease";
  bgElement.style.zIndex = "-1";

  card.appendChild(bgElement);

  card.addEventListener("mouseenter", () => {
    bgElement.style.opacity = "1";
  });

  card.addEventListener("mouseleave", () => {
    bgElement.style.opacity = "0";
  });
});

function contactWhatsApp() {
  window.open("https://wa.me/9779843223394", "_blank"); //
}

const swiper = new Swiper(".swiper", {
  mousewheel: {
    invert: false,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },

  spaceBetween: 10,
});

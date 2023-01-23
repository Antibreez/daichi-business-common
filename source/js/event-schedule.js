import Swiper, { FreeMode, Navigation } from "swiper";

$(window).on("load", () => {
  const swiper = new Swiper(".club-program-schedule__slider", {
    modules: [Navigation],

    slidesPerView: "auto",
    watchOverflow: true,

    navigation: {
      nextEl: ".club-program-schedule .slider-next",
      prevEl: ".club-program-schedule .slider-prev",
    },
  });
});

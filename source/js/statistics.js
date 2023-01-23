const { default: Swiper } = require("swiper");

const $toggleBtn = $(".club-program-statistics__toggle-btn");
const $content = $(".club-program-statistics__content");

$toggleBtn.on("click", function () {
  $content.slideToggle();
  $(this).toggleClass("opened");
});

const $headers = $(".club-program-statistics__header-part");
const $contents = $(".club-program-statistics__content-part");

$headers.each((idx, header) => {
  const $slider = $('<div class="club-program-statistics__slider swiper"/>');
  const $wrapper = $('<div class="club-program-statistics__slider-wrapper swiper-wrapper"/>');

  const $header = $(header).clone();
  $header.addClass("swiper-slide");

  $wrapper.append($header);
  $contents
    .eq(idx)
    .find(".club-program-statistics__chip")
    .each((idx, chip) => {
      const $chip = $(chip).clone();
      $chip.addClass("swiper-slide");
      $wrapper.append($chip);
    });

  $slider.append($wrapper);
  $(".club-program-statistics__block.mobile").append($slider);
});

const slider = new Swiper(".club-program-statistics__slider", {
  slidesPerView: "auto",
});

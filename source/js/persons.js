const $btn = $(".club-program-persons__text button");

$btn.on("click", function () {
  const $block = $(this).parent();
  const $text = $block.find("p");

  $block.toggleClass("opened");
  $text.toggleClass("short");
});

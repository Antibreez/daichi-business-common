const $btn = $('.breadcrumbs-stock__button');

$btn.on('click', function(e) {
  if (window.innerWidth < 1025) {
    console.log('click');
    $(e.currentTarget).next('.breadcrumbs-stock__download-tooltip').toggleClass('opened')
  }
})

$(document).on('click', function(e) {
  const $target = $(e.target);

  if (
    $target.closest('.breadcrumbs-stock__download-tooltip').length === 0 &&
    $target.closest('.breadcrumbs-stock__button').length === 0
  ) {
    $('.breadcrumbs-stock__download-tooltip').removeClass('opened');
  }
})

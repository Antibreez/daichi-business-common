const $btn = $(".breadcrumbs-stock__button");

$btn.on("click", function (e) {
  if (window.innerWidth < 1025) {
    console.log("click");
    $(e.currentTarget).next(".breadcrumbs-stock__download-tooltip").toggleClass("opened");
  }
});

$(document).on("click", function (e) {
  const $target = $(e.target);

  if (
    $target.closest(".breadcrumbs-stock__download-tooltip").length === 0 &&
    $target.closest(".breadcrumbs-stock__button").length === 0
  ) {
    $(".breadcrumbs-stock__download-tooltip").removeClass("opened");
  }
});

$(window).on("load", function () {
  window.onApiKeyRequestSended = function () {
    let modal = new CPopup();

    modal.setTitle("Получить ключ API");
    const bodyText = `
      <div class="api-page__modal-body">
        <span class="api-page__modal-icon"></span>
        <h3 class="api-page__modal-title">Запрос отправлен</h3>
        <p class="api-page__modal-desc">В ближайшем времени с вами свяжется наш менеджер</p>
      </div>
    `;
    modal.setText(bodyText);

    modal.showPopup();

    let tplParams = $.extend({}, modal.defaultTplParams, modal.tplParams);
    let contentTarget = tplParams.templateSelector;
    let containerId = (contentTarget + "-outer-" + modal.tplParams.uniqId).substr(1);
    $("#" + containerId)
      .parent()
      .addClass("api-page__api-key-cl");
  };

  onApiKeyRequestSended();
});

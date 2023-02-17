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
    console.log("lool");
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

  $(document).on("click", ".api-page__promo-btn-received", async function (e) {
    const $target = $(e.currentTarget);
    const text = $target.find("span").eq(1).text();

    try {
      await navigator.clipboard.writeText(text);
      console.log("Content copied to clipboard");
      $target.addClass("copied");
      setTimeout(function () {
        $target.removeClass("copied");
      }, 1000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  });

  const $notification = $(".api-page__notification");
  const $notificationToggle = $notification.find(".api-page__notification-toggle-input");
  const $timeBlock = $notification.find(".api-page__notification-time");

  $(document).on("change", $notificationToggle, function (e) {
    const $target = $(e.target);

    if ($target.is(":checked")) {
      $notification.addClass("opened");
    } else {
      $notification.removeClass("opened");
    }
  });

  window.showAlert = function () {
    let modal = new CPopup();

    const titleText = `
      <span class="erp-alert-icon">
        <svg>
          <use xlink:href="#ico-alert-warning"></use>
        </svg>
      </span>
      <span class="erp-alert-title">Внимание!</span>
    `;

    modal.setTitle(titleText);
    modal.setText(`
      В связи с проведением технических работ на сервере, могут некорректно отображаться данные оформленных заказов, а также происходить задержки при выставлении счётов.<br/>
      Информация в карточке заказа будет обновлена автоматически после завершения технических работ.
    `);

    modal.showPopup();

    let tplParams = $.extend({}, modal.defaultTplParams, modal.tplParams);
    let contentTarget = tplParams.templateSelector;
    let containerId = (contentTarget + "-outer-" + modal.tplParams.uniqId).substr(1);
    $("#" + containerId)
      .parent()
      .addClass("erp-alert");
  };

  $(document).on("click", ".header-top-nav__alert", function () {
    showAlert();
  });
});

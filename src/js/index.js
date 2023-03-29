var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$(document).ready(function () {
  $(".to-open_menu-btn").click(function (event) {
    $(".to-open_menu-btn, .main-header__navigation").toggleClass("active");
  });
});

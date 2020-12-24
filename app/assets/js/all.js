//swiper
var swiper = new Swiper('.swiper-container', {
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1, //同時顯示的slides數量
      spaceBetween: 10, //slide之間的距離 (單位px)
    },
    // when window width is >= 480px
    690: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//錨點
// $(document).ready(function () {
//   $("a").click(function () {
//     console.log($(this).attr("href"))

//     var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

//     $body.animate({
//       scrollTop: $($(this).attr("href")).offset().top + "px"
//     }, {
//       duration: 500,
//       easing: "swing"
//     });

//     return false;
//   });

// });



$(document).ready(function () {
  // 動態切換圖片 (servieDetail.html)
  $('.carousel-inner-link').click(function () {
    $('.carousel-item-img--active').attr('src', $(this).attr('href'));
    return false;
  });

  // BS datepicker
  $('#datepickerStart').datepicker({
    format: "yy-mm-dd",
    startDate: '-1y -1m',
    endDate: '+2m +10d',
    todayHighlight: true,
  });

  $('#datepickerEnd').datepicker({
    format: "yy-mm-dd",
    startDate: '-1m',
    endDate: '+10d',
    todayHighlight: true
  });

});


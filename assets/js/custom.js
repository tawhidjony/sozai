"use strict";

$('.slider').slick({
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  infinite: true,
  loop: true,
  speed: 4000,
  fade: true,
  cssEase: 'ease-in-out',
  responsive: [{
    breakpoint: 991,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 575,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});
$('.slider-for').slick({
  arrows: false,
  asNavFor: '.slider-nav,.slider-x',
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 4000
});
$('.slider-nav').slick({
  arrows: true,
  asNavFor: '.slider-for,.slider-x',
  centerMode: true,
  centerPadding: '60px',
  dots: true,
  focusOnSelect: true,
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 4000,
  responsive: [{
    breakpoint: 491,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
}); ////------add class----////

$(window).bind("resize", function () {
  if ($(this).width() < 768) {
    $('#blog').addClass('blogSliders ');
  } else {
    $('#blog').removeClass('blogSliders slick-initialized slick-slider');
  }
}).trigger('resize'); ////------add class----////

$('.blogSliders').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 2000,
  infinite: true,
  loop: true,
  responsive: [{
    breakpoint: 768,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 1.2
    }
  }, {
    breakpoint: 440,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      speed: 2000,
      slidesToShow: 1
    }
  }]
});
$('.btn-menu').click(function () {
  $(this).toggleClass("click");
  $('.sidebar').toggleClass("show");
});
$('.close-btn').click(function () {
  $(this).toggleClass("click");
  $('.sidebar').toggleClass("show");
});
$(".language-show").click(function () {
  $(".select-language-area").fadeToggle(600);
});
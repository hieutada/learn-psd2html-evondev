$(document).ready(function () {
  const menuToggle = $('.header-toggle');
  const menu = $('.header-menu');
  const expandClass = 'header-menu--expand';

  menuToggle.click((e) => {
    menu.addClass(expandClass);
  });

  $(window).click((e) => {
    if (!menu.has(e.target).length && !e.target.matches('.header-toggle')) {
      menu.removeClass(expandClass);
    }
  });
});

// Slick slider
const sliderConfig = {
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
  responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows: false,
      },
    },
  ],
};
$(document).ready(function () {
  $('.quote-wrapper').slick(sliderConfig);
});

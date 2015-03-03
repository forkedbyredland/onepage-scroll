$(function() {
  var onePageScrollIsOn = true;
  initOnePageScroll();

  $('.toggle').click(function() {
    if (onePageScrollIsOn) {
      onePageScrollIsOn = false;
      uninitOnePageScroll();
    } else {
      onePageScrollIsOn = true;
      initOnePageScroll();
    }
  });

  function initOnePageScroll() {
    $('.main').onepage_scroll({
       sectionContainer: 'section',
       easing: 'ease',
       animationTime: 1000,
       pagination: true,
       updateURL: false,
       beforeMove: function(index) {},
       afterMove: function(index) {},
       loop: false,
       keyboard: true,
       responsiveFallback: false,
       direction: 'vertical'
    });
  }

  function uninitOnePageScroll() {
    $('.main').destroy_onepage_scroll();
  }

});

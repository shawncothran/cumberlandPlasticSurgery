var $ = require('jQuery');

$(document).ready(function() {
  $(window).resize(function() {
    $(document).scroll(function() {

      if ($(this).scrollTop() > $(window).height() - 85) {
        $('.stickyNav').addClass('stickyNavScrolled');

      } else {
        $('.stickyNav').removeClass('stickyNavScrolled');
      }

      $('.stickyNav__anchor').each(function() {
        if (($(this.hash).position().top - 85) < $(window).scrollTop()){
          console.log('hi');
          $('.stickyNav__anchor.active').removeClass('active');
          $(this).addClass('active');
        }
      });
    });
  }).resize();
});

$(function() {
  $('a[href*="#"]:not([href="#"]):not([href*="#modal"])').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {
        $('body').animate({
          scrollTop: target.offset().top - 85
        }, 720);

        return false;
      }
    }
  });
});

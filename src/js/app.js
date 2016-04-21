var $ = require('jQuery');

$(document).ready(function() {
  $(window).resize(function() {
    $(document).scroll(function() {
      var nav = '.stickyNav';

      if ($(this).scrollTop() > $(window).height() - $(nav).height()) {
        $(nav).addClass('stickyNavScrolled');

      } else {
        $(nav).removeClass('stickyNavScrolled');
      }

      $('.stickyNav__anchor').each(function() {
        if (($(this.hash).position().top - $(nav).height()) < $(window).scrollTop()){
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
      target = target.length ? target : $(`[name=$(this.hash.slice(1))]`);

      if (target.length) {
        $('body').animate({
          scrollTop: target.offset().top
        }, 720);

        return false;
      }
    }
  });
});

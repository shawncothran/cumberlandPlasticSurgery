var $ = require('jQuery');

$(document).ready(function(){
  $(window).resize(function(){
    $(document).scroll(function(){

      if( $(this).scrollTop() > $(window).height() - 80) {
        $('.stickyNav').addClass('stickyNavScrolled');
      } else {
        $('.stickyNav').removeClass('stickyNavScrolled');
      }

      $('.stickyNav__anchor').each(function(){
        if ($(this.hash).position().top - 81 <= $(window).scrollTop()){
          $('.stickyNav__anchor.active').removeClass('active');
          $(this).addClass('active');
        }
      });

    });
  }).resize();
});

$(function() {
  $('a[href*="#"]:not([href="#"]):not([href*="#modal"])').click(function() {

    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {
        $('body').animate({
          scrollTop: target.offset().top - 80
        }, 720);

        return false;
      }
    }
  });
});

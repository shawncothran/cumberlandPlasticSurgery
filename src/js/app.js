var $ = require('jQuery');

$(document).ready(function(){
  $(window).resize(function(){
    $(document).scroll(function(){

      if( $(this).scrollTop() > $('.hero').height() - 80) {
        $('.stickyNav').addClass('stickyNavScrolled');
      } else {
        $('.stickyNav').removeClass('stickyNavScrolled');
      }

    });
  }).resize();
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {

    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {
        $('body').animate({
          scrollTop: target.offset().top - 80
        }, 720);

        // $(".slider").animate({
        //   top: $(this).position().top,
        //   left: $(this).width()
        // }, 720);

        return false;
      }
    }
  });
});

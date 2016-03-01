'use strict';

define(['jquery'], function($)
{
  return (function()
  {
    $('a[href*="#"]').click(function() {
      var target = $(this.hash);

      if (target.length) {
        var scrollTop = target.offset().top;
        if($(window).width() > 768)
          scrollTop -= 65;

        $('html, body').animate({
          scrollTop: scrollTop
        }, 1000);

        return false;
      }
    });
  })();
});

'use strict';

define(['jquery'], function($)
{
  return (function()
  {
    var STICKY_CLASS = '-stuck';
    var $nav = $('[data-component="sticky-nav"]');
    var $header = $($nav.data('header-element'));
    var navHeight = $nav.height();
    var lastScrollTop = 0;

    function isScrollingUp(scrollTop)
    {
      return scrollTop < lastScrollTop;
    }

    function handleScrollEvent()
    {
      var scrollTop = $(this).scrollTop();

      if ($(this).scrollTop() > ($header.height() - navHeight) && ! isScrollingUp(scrollTop)) {
        $nav.addClass(STICKY_CLASS);
      }

      if ($(this).scrollTop() <= ($header.height() - navHeight + 15) && isScrollingUp(scrollTop)) {
        $nav.removeClass(STICKY_CLASS);
      }

      lastScrollTop = scrollTop;

      $('.global-nav__anchor').each(function() {
        var $section = $(this.hash);
        if ($section.position().top - 80 <= $(window).scrollTop()) {
          $('.global-nav__anchor.active').removeClass('active');
          $(this).addClass('active');
        }
      });
    }

    $(window).scroll(handleScrollEvent);
  })();
});

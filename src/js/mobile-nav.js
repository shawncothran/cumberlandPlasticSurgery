'use strict';

define(['jquery'], function($)
{
  return (function()
  {
    var $button = $('.Button.-burger');
    var $navLinks = $('.global-nav__anchor');

    $button.on('mouseup', function() {
      if($(this).hasClass('is-active')) {
        $(this).blur();
        $button.removeClass('is-active');
      } else {
        $(this).toggleClass('is-active');
      }
    });

    $navLinks.on('click', function() {
      $button.removeClass('is-active');
    });
  })();
});

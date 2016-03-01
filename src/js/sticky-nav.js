'use strict';

define(['jquery'], function($){
  return (function(){
    function handleScrollEvent(){

      $('.global-nav__anchor').each(function(){
        var $section = $(this.hash);

        if ($section.position().top - 80 <= $(window).scrollTop()){
          $('.global-nav__anchor.active').removeClass('active');
          $(this).addClass('active');
        }

      });

    }

    $(window).scroll(handleScrollEvent);
  })();
});

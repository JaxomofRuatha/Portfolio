"use strict";

$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
         $(‘nav’).addClass(‘scrolledNav’)
      }
      if ($(this).scrollTop() < 50) {
         $(‘nav’).removeClass(‘scrolledNav’)
      }
   });
});

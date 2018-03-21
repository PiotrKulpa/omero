'use strict';

(function () {

  /**
  * Represents copyright medhods.
  */

  var swiper = new Swiper('#swiper1', {
    spaceBetween: 30,
     centeredSlides: true,
     autoplay: {
       delay: 15500,
       disableOnInteraction: false,
     },
     pagination: {
       el: '.swiper-pagination',
       clickable: true,
     },
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
   });

   var swiperRef = new Swiper('#swiper2', {
     spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      }
    });

} ());

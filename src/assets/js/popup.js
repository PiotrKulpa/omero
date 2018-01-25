(function () {

  var infoLink = $('.popup-btn'),
      closeInfoLink = $('.short-info-close'),
      popup = $('.popup'),
      slideDown = $('.short-info'),
      pSlide = $('.slide-down');

  infoLink.on('click', function (e) {
    e.preventDefault();
    //popup.show();
    popup.slideDown( "fast", function() {});

  });

  closeInfoLink.on('click', function (e) {
    e.preventDefault();
    popup.hide();
  });

  slideDown.on('click', function (e) {
    e.preventDefault();
    $( this ).find(pSlide).slideToggle();
  })

} ());

(function () {
  //TODO MVC
var i = 0, x = 0, slide = 0;
$('.right').click(function () {
  if (slide > -200) {
    slide+=-100;
    $('.slider-content').css({
      'transform': 'translate('+slide+'%, 0)',
      'transition': 'transform 1s ease'
    });
   }
});

$('.left').click(function () {
  if (slide < 0) {
    slide+=100;
    $('.slider-content').css({
      'transform': 'translate('+ slide +'%, 0)',
      'transition': 'transform 1s ease'
    });
  }
});
} ());
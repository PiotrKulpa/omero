var i = 0, x = 0, slide = 0;
$('.left').click(function () {
  slide+=-33.3;
  $('#figure').css({
    'transform': 'translate('+ slide +'%, 0)',
    'transition': 'transform 1s ease'
  });
  console.log(slide);
});

$('.right').click(function () {
  slide+=33.3;
  $('#figure').css({
    'transform': 'translate('+ slide +'%, 0)',
    'transition': 'transform 1s ease'
  });
  console.log(slide);
});
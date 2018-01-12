var i = 0, x = 0, slide = 0;
$('.arrow-wrapper').on('click','.left-arrow', function () {
  slide+=-33.3;
  $('#figure').css({
    'transform': 'translate('+ slide +'%, 0)',
    'transition': 'transform 1s ease'
  });
  console.log(slide);
});

$('.arrow-wrapper').on('click','.right-arrow', function () {
  slide+=33.3;
  $('#figure').css({
    'transform': 'translate('+ slide +'%, 0)',
    'transition': 'transform 1s ease'
  });
  console.log(slide);

});

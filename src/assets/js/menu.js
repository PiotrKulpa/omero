(function () {
  //menu color change
  $( window ).scroll(function() {
    var scrollPos = $( window ).scrollTop();
    scrollPos > 300 ?
    $( ".nav-wrapper" ).css( "background-color", "#252023" ) :
    $( ".nav-wrapper" ).css( "background-color", "transparent" );
  });

  //menu scroll system
  $(".nav-menu").on('click', 'a', function(e){
    e.preventDefault();
    var menuHeight = $('.nav-wrapper').height();
    var position = $(this).data('position');
    $('html, body').animate({
    scrollTop: $(position).offset().top - menuHeight
    }, 'slow');
	});

} ());

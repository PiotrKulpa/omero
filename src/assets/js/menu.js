(function () {
  //menu bar color change
  $( window ).scroll(function() {
    var scrollPos = $( window ).scrollTop();
    scrollPos > 300 ?
    $( ".nav-wrapper" ).css( "background-color", "#252023" ) :
    $( ".nav-wrapper" ).css( "background-color", "transparent" );
  });

  //menu scroll system
  $(".nav-menu, .bottom-links").on('click', 'a', function(e){
    //e.preventDefault();
    var menuHeight = $('.nav-wrapper').height();
    var position = $(this).data('position');
    $('html, body').animate({
    scrollTop: $(position).offset().top - menuHeight
    }, 'slow');
	});

  //Footer navigation for other content

  $(".bottom-links-nav").on('click', 'a', function(e){
    //e.preventDefault();
    var tar = $( this ).data('target');
    var other = $('.other');
    var otherContent = $('.other-content');
    otherContent.hide();
    $(tar).show();
	});

} ());

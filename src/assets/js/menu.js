/**
* Represents a all menu medhods.
* top menu background color change after scrolling
* animated scrolling page
* bottom menu system
*/

(function () {

 /**
 * MVC start.
 */
  var model = {

  };

  /**
  * Controller.
  * Initialize view methods.
  */
  var controller = {

    init: function () {
      view.init();
    }

  };

  /**
  * View.
  */
  var view = {
    /** Get DOM elements. */
    body: $('html, body'),
    navWrapper: $( ".nav-wrapper" ),
    navMenuBottom: $(".nav-menu, .bottom-links"),
    navBottom: $(".bottom-links-nav"),
    otherContent: $('.other-content'),
    hamburger: $('.nav-lang .fa-bars'),
    mainMenu: $('.nav-menu'),

    /** Get current vertical position of scrollbar. */
    scrollPos: function () {
      return $( window ).scrollTop();
    },

    /** Get absolute top menu height. */
    menuHeight: function () {
      return $('.nav-wrapper').outerHeight(true);
    },

    /** Initialize main methods. */
    init: function () {

      /**
      * Button events start.
      */

      /** Initialize top menu bar color change after scroling down. */
      $( window ).scroll(function() {
        // var scrollPos = $( window ).scrollTop();
        // scrollPos > 300 ?
        view.scrollPos() > 300 ?
        view.navWrapper.css( "background-color", "#29c0ff" ) :
        view.navWrapper.css( "background-color", "transparent" );
      });

      /** Initialize top and bottom menu scroll system. */
      this.navMenuBottom.on('click', 'a', function(e){
        // var menuHeight = $('.nav-wrapper').height();
        var position = $(this).data('position');
        view.body.animate({
        scrollTop: $(position).offset().top - view.menuHeight()
        }, 'slow');
    	});

      /** Initialize footer navigation for other content. */
      this.navBottom.on('click', 'a', function(e){
        //e.preventDefault();
        var tar = $( this ).data('target');
        //var other = $('.other');
        //var otherContent = $('.other-content');
        view.otherContent.hide();
        $(tar).show();
    	});

      this.hamburger.on('click', function () {
        view.mainMenu.slideToggle();
      });


    }

  };

  /** Initialize controller. */
  controller.init();
} ());

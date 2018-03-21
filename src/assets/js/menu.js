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
    },
    routerSystem: function(e) {
      var tar = $( e.currentTarget ).data('target');
      console.log(tar);
      view.otherContent.hide();
      view.main.children().hide();
      $(tar).show();
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
    routs: $(".router-links"),
    rout: $(".router-link"),
    otherContent: $('.other-content'),
    hamburger: $('.nav-lang .fa-bars'),
    mainMenu: $('.nav-menu'),
    main: $('#main'),

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
        view.scrollPos() > 100 ?
        view.navWrapper.css( "box-shadow", "0 1px 55px #000" ) :
        view.navWrapper.css( "box-shadow", "none" );
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
      this.routs.on('click', 'a', function(e){
        //e.preventDefault();
        controller.routerSystem(e);
    	});

      this.rout.on('click', function(e){
        //e.preventDefault();
        controller.routerSystem(e);
    	});

      this.hamburger.on('click', function () {
        view.mainMenu.slideToggle();
      });


    }

  };

  /** Initialize controller. */
  controller.init();
} ());

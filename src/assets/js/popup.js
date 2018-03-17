(function () {

  /**
  * Represents popup and services system.
  */

  /** Main object. */
  var popupObj = {

    /** Get DOM elements */
    infoLink: $('.popup-link'),
    closeInfoLink: $('.short-info-close'),
    popup: $('.popup'),
    popupInner: $('.popup-inner'),
    slideDown: $('.short-info'),
    pSlide: $('.slide-down'),

    /** Popup Event methods */
    /** Popup open method */
    openPopup: function () {
      popupObj.infoLink.on('click', function (e) {
        e.preventDefault();
        var tar = $( e.currentTarget ).data('popup');
        popupObj.popup.show();
        //schowaj zawartosc
        //pokaz tylko konkretna pobrana z pomoca data-showpopup
        popupObj.popupInner.children().hide();
        $(tar).show();
        popupObj.popup.addClass('slide-in-top');
      });


    },
    /** Popup close method */
    closePopup: function () {
      popupObj.closeInfoLink.on('click', function (e) {
        e.preventDefault();
        popupObj.popup.hide();
        popupObj.popup.removeClass('slide-in-top');
      });

    },

    /** Services Event methods */
    toggleService: function () {
      popupObj.slideDown.on('click', function (e) {
        e.preventDefault();
        $( this ).find(popupObj.pSlide).slideToggle();
      })

    },

    /** Init method */
    init: function () {
      this.openPopup();
      this.closePopup();
      //this.toggleService();
    }
  };

  popupObj.init();

} ());

(function () {

  /**
  * Represents popup and services system.
  */

  /** Main object. */
  var popupObj = {

    /** Get DOM elements */
    infoLink: $('.popup-btn'),
    closeInfoLink: $('.short-info-close'),
    popup: $('.popup'),
    slideDown: $('.short-info'),
    pSlide: $('.slide-down'),

    /** Popup Event methods */
    /** Popup open method */
    openPopup: function () {
      popupObj.infoLink.on('click', function (e) {
        e.preventDefault();
        popupObj.popup.slideDown( "fast", function() {});

      });

    },
    /** Popup close method */
    closePopup: function () {
      popupObj.closeInfoLink.on('click', function (e) {
        e.preventDefault();
        popupObj.popup.hide();
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
      this.toggleService();
    }
  };

  popupObj.init();

} ());

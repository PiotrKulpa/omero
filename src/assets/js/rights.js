(function () {

  /**
  * Represents copyright medhods.
  */

  /** Main object. */
  var copyright = {
    /** Get dom element. */
    copyrightDom: $('.copyright'),
    /** Get current Year */
    y: new Date().getFullYear(),
    /** Init main method. */
    init: function () {
      this.copyrightDom.text(this.y);
    }
  };

  copyright.init();

} ());

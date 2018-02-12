(function () {
  /**
  * Represents banner medhods in MVC.
  * Use arrows to slide banner right or left
  */


  var model = {
    /** Store current position of slider. */
    slide: 0
  };

  var controller = {
    /** Slide right method. */
    right: function () {
      /** Slide right method. */
      view.rightArrow.click(function () {
        /** Get current position (must be greater than -200) and set new (current position - 100) */
        if (model.slide > -200) {
          model.slide += -100;
          /** Slide horizontally -100 */
          view.sliderContent.css({
            'transform': 'translate('+ model.slide +'%, 0)',
            'transition': 'transform 1s ease'
          });
         }
      });
    },
    /** Slide left method. */
    left: function () {
      view.leftArrow.click(function () {
        /** Get current position (must be smaller than 0) and set new (current position + 100) */
        if (model.slide < 0) {
          model.slide += 100;
          /** Slide horizontally + 100 */
          view.sliderContent.css({
            'transform': 'translate('+ model.slide +'%, 0)',
            'transition': 'transform 1s ease'
          });
        }
      });
    },
    /** Init method */
    init: function () {
      this.right();
      this.left();
    }

  };

  var view = {
    /** Get DOM elements */
    rightArrow: $('.right'),
    leftArrow: $('.left'),
    sliderContent: $('.slider-content')
  };

  controller.init();

} ());

'use strict';

(function () {

  /**
  * Represents copyright medhods.
  */

  var options = {
  useEasing: true,
  useGrouping: true,
  separator: ',',
  decimal: '.',
};
var demo = new CountUp('cu', 0, 4349, 0, 2.5, options);
var demo2 = new CountUp('cu2', 0, 1349, 0, 7.5, options);
if (!demo.error) {
  demo.start();
  demo2.start();
} else {
  console.error(demo.error);
}

} ());

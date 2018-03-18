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
var cu = new CountUp('cu', 0, 20, 0, 2.5, options);
var cu2 = new CountUp('cu2', 0, 5, 0, 7.5, options);
var cu3 = new CountUp('cu3', 0, 1349, 0, 7.5, options);
var cu4 = new CountUp('cu4', 0, 10349, 0, 7.5, options);
if (!cu.error) {
  cu.start();
  cu2.start();
  cu3.start();
  cu4.start();
} else {
  console.error(cu.error);
}

} ());

/**
* Map.
*/
var omeroMap =(function () {

  //Gogle Map Api: https://developers.google.com/maps/documentation/javascript/tutorial
  return function omeroMap() {
    var mapProp = {
        center:new google.maps.LatLng(51.2321993,22.5852197),
        zoom:15,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var marker = new google.maps.Marker({
      position: mapProp.center,
      map: map,
      title: 'Omero'
    });
  };

} ());

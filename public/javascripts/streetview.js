/*
usage: 
1.create a div whose id is named 'pano'
2.call showStreetView(lat,lng) example: showStreetView(25.11617,121.8414007);
3.include streetView.js
Example: in other file
    <script src="./streetview.js"></script>
    <script>showStreetView(25.11617,121.8414007);</script>
    <div id="pano" style="width: 100%; height: 100%;float:left"></div>
*/
var lat;
var lng;
function initialize() {
  var location = new google.maps.LatLng(lat, lng);
  var panoramaOptions = {
    position: location,
    pov: {
      heading: 90,
      pitch: 20
    }
  };
  var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), panoramaOptions);
  var map = new google.maps.Map();
  map.setStreetView(panorama);
}
function showStreetView(latitude,longitude){
  lat=latitude;
  lng=longitude;
  initialize();
}

google.maps.event.addDomListener(window, 'load', initialize);

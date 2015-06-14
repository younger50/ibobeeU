var map;
var markersArray = [];

function initialize() {
	var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
      center: new google.maps.LatLng(25.017358, 121.540014),
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(mapCanvas, mapOptions);

	google.maps.event.addListener(map, 'bounds_changed', function() {
    	update(map);
	});
}
google.maps.event.addDomListener(window, 'load', initialize);

function update(map){
	//send request with boundary, get array of temples. get temple coordinates
	clear_markers(map);
	console.log("update");
	/*for(number of temples within boundary){
		var lat, long;
		var pos = new google.maps.LatLng(lat, long);
		place_marker(pos, map);
	}*/
}
function place_marker(position, map){
	var marker = new google.maps.Marker({
    	position: position,
    	map: map
	});
	markersArray.push(marker);
}
function clear_markers(){
	for(var i =0; i < markersArray.length; i++){
		markersArray[i].setMap(null);
	}
	markersArray.length = 0;
}
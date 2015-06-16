var map;
var markersArray = [];

function initialize() {
	var mapCanvas = document.getElementById('map-canvas');
	var mapOptions = {
	  center: new google.maps.LatLng(23.8, 120),
	  zoom: 7,
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
	//clear_markers(map);

	var bound = map.getBounds();

	SWlat = bound.getSouthWest().lat();
	NElat = bound.getNorthEast().lat();
	SWlng = bound.getSouthWest().lng();
	NElng = bound.getNorthEast().lng();

	//alert(SWlng+" "+NElng+" "+SWlat+" "+NElat);
	/*
	$.post("/test/data/findTemplesByRange/",
		{
			//words:""+$("#sortreligion").val()
			bound: ""+SWlng+" "+NElng+" "+SWlat+" "+NElat
		}, 
		function(data,status){
			//console.log(data);
			for(var i = 0; i < data.length; i++){
				//console.log(data[i].latitude+" "+data[i].longitude);
				var pos = new google.maps.LatLng(data[i].latitude, data[i].longitude);
				place_marker(pos, map, data[i]);
			}

		}
	);
	*/
}
var last_open;
function place_marker(position, map, templejson){
	var marker = new google.maps.Marker({
		position: position,
		map: map
	});
	var contentString = '<a href=\"/individual\">'+templejson.name+'</a>';
	var infowindow = new google.maps.InfoWindow({
  		content: contentString
		});
	markersArray.push(marker);
	google.maps.event.addListener(marker, 'click', function() {
		if (last_open != undefined){
			last_open.close();
		}
		last_open = infowindow;
		infowindow.open(map,marker);
		insert_temple_to_session( templejson);
	});
}
function clear_markers(){
	for(var i =0; i < markersArray.length; i++){
		markersArray[i].setMap(null);
	}
	markersArray.length = 0;
}


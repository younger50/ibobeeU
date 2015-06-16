$(document).ready(function () {
	$("#dataView1").html("test:"+sessionStorage.homecount);
	// retrieve detail info from local storage
	temple = {};
	//temple = 
	get_temple_from_session(temple);
	/*
	temple.name = "台大";
	temple.address = "140.112";
	temple.religion = "二進位";
	temple.deity = "Tux";
	temple.latitude = 25.017358;
	temple.longitude = 121.540014;
	*/
	// insert detail info into page
	$("#detail_name").html(temple.name);
	$("#detail_address").html(temple.address);
	$("#detail_religion").html(temple.religion);
	$("#detail_deity").html(temple.deity);
	showStreetView(temple.latitude,temple.longitude);
});
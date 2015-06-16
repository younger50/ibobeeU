$(document).ready(function () {
	$("#dataView1").html("test:"+sessionStorage.homecount);
	// retrieve detail info from local storage
	address = "台大";
	religion = "二進位";
	deity = "Tux";
	phone = "140.112";
	latitude = 25.017358;
	longitude = 121.540014;
	// insert detail info into page
	$("#detail_address").html(address);
	$("#detail_religion").html(religion);
	$("#detail_deity").html(deity);
	$("#detail_phone").html(phone);
	showStreetView(latitude,longitude);
});
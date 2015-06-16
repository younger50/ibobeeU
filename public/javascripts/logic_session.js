function insert_temple_to_session(temple){
	sessionStorage.nam = temple.name;
	sessionStorage.adr = temple.address;
	sessionStorage.rlg = temple.religion;
	sessionStorage.dit = temple.deity;
	sessionStorage.lat = temple.latitude;
	sessionStorage.lnt = temple.longitude;
}

function get_temple_from_session(temple){
	//temple = {};
	temple.name = sessionStorage.nam;
	temple.address = sessionStorage.adr;
	temple.religion = sessionStorage.rlg;
	temple.deity = sessionStorage.dit;
	temple.latitude = sessionStorage.lat;
	temple.longitude = sessionStorage.lnt;
	//return temple;
}
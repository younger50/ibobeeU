$(document).ready(function () {
	$("#btnview").click( function (){
		$.get("/db", function(data){
			$("#dataView1").innerHTML = data;
		});
	});
});
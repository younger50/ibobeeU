$(document).ready(function () {
	$("#dataView1").html("test");
	$("#btnview").click( function (){
		$.getJSON("/data/db", function(data){
			$("#dataView1").html(data);
		});
	});
});
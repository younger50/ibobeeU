$(document).ready(function () {
	$("#dataView1").html("test");
	$("#btnAdd").click( function(){
		console.log($("#dataAdd").val());
		$.post("/data/db/add",
			{
				words:""+$("#dataAdd").val()
			}, 
			function(data,status){
				console.log(data)
			}
		);
	});
	$("#btnView").click( function (){
		$.getJSON("/data/db", function(data){
			$("#dataView1").html(JSON.stringify(data));
			console.log(data);
		});
	});
});
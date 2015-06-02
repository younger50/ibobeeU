$(document).ready(function () {
	$("#dataView1").html("test");
	$("#btnAdd").click( function(){
		$.post("/data/db/add",
			{
				words:$("#dataAdd").value;
			}, 
			function(data){
				console.log(data)
			};
		);
	});
	$("#btnView").click( function (){
		$.getJSON("/data/db", function(data){
			$("#dataView1").html(JSON.stringify(data));
			console.log(data);
		});
	});
});
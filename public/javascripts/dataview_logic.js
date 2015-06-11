$(document).ready(function () {
	$("#dataView1").html("test");
	$("#btnAdd").click( function(){
		console.log($("#dataInfo").val());
		$.post("/data/db/add",
			{
				words:""+$("#dataInfo").val()
			}, 
			function(data,status){
				$("#dataView1").html("db add finisehed");
				console.log(data);
			}
		);
	});
	$("#btnDel").click( function(){
		console.log($("#dataInfo"));
		$.post("/data/db/del",
			{
				words:""+$("#dataInfo").val()
			}, 
			function(data,status){
				$("#dataView1").html("db del finisehed");
				console.log(data);
			}
		);
	});
	$("#btnView").click( function (){
		$.getJSON("/data/db", function(data){
			$("#dataView1").html(JSON.stringify(data));
			console.log(data);
		});
	});
	//Search Temple Keyword
	$("#templesrch2").click( function(){
		
		$.post("/data/temple/findkey",
			{
				words:""+$("#templekey").val()
			}, 
			function(data,status){
				$("#dataView1").html(data);
				console.log(data);
			}
		);
	});
});
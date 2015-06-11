$(document).ready(function () {
	$("#dataView1").html("test");
	/*--TEMPLE SEARCH--*/
	//Search Address
	$("#templesrch1").click( function(){
		//console.log($("#dataInfo").val());
		$.post("/data/temple/findadrs",
			{
				words:""+$("#templeadrs").val()
			}, 
			function(data,status){
				$("#dataView1").html("return by address");
				console.log(data);
			}
		);
	});
	//Search Keyword
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
	//Search Area
	$("#templesrch3").click( function(){
		//console.log($("#dataInfo").val());
		$.post("/data/temple/findarea",
			{
				words:""+$("#templearea").val()
			}, 
			function(data,status){
				$("#dataView1").html("return by area");
				console.log(data);
			}
		);
	});


	/*--Festival Search--*/
	//Search Keyword
	$("#evntsrch1").click( function(){
		$.post("/data/events/findbykey",
			{
				words:""+$("#evntkey").val()
			}, 
			function(data,status){
				$("#dataView1").html("return event by Keyword");
				console.log(data);
			}
		);
	});
	//Search Date
	$("#evntsrch2").click( function(){
		//console.log($("#dataInfo").val());
		$.post("/data/events/daterange",
			{
				startdate:""+$("#evntdate1").val()
				enddate:""+$("#evntdate2").val()
			}, 
			function(data,status){
				$("#dataView1").html("return by date range");
				console.log(data);
			}
		);
	});
	/*--Diety Search--*/
	//Keyword
	$("#dietysrch1").click( function (){
		$.post("/data/deity/deitykey",
			{
				words:""+$("#dietykey").val()
			}, 
			function(data,status){
				$("#dataView1").html("return diety by keword");
				console.log(data);
			}
		);
		/*$.getJSON("/data/db", function(data){
			$("#dataView1").html(JSON.stringify(data));
			console.log(data);
		});*/
	});
	//Scenario
	$("#dietysrch2").click( function (){
		$.post("/data/deity/findbyscenario",
			{
				words:""+$("#deityscene").val()
			}, 
			function(data,status){
				$("#da").html("return deities by scenario");
				console.log(data);
			}
		);
	});
	/*-後分類-*/
	//deity name
	$("#sortsrch1").click( function (){
		$.post("/data/deity/findbyscenario",
			{
				words:""+$("#sortname").val()
			}, 
			function(data,status){
				$("#returnmap").html(data);
				$("#returncity").html(data);
				$("#returnregion").html(data);
				$("#returnreligion").html(data);
				$("#returnnames").html(data);
				console.log(data);
			}
		);
	});
	//temple
	$("#sortsrch2").click( function (){
		$.post("/data/deity/findbyscenario",
			{
				words:""+$("#sorttemple").val()
			}, 
			function(data,status){
				$("#returnmap").html(data);
				$("#returncity").html(data);
				$("#returnregion").html(data);
				$("#returnreligion").html(data);
				$("#returnnames").html(data);
				console.log(data);
			}
		);
	});
	//religion
	$("#sortsrch3").click( function (){
		$.post("/data/deity/findbyscenario",
			{
				words:""+$("#sortreligion").val()
			}, 
			function(data,status){
				$("#returnmap").html(data);
				$("#returncity").html(data);
				$("#returnregion").html(data);
				$("#returnreligion").html(data);
				$("#returnnames").html(data);
				console.log(data);
			}
		);
	});
});


 /*--
        地址 ID: templeadrs
	    關鍵字 ID: templekey 
	    城市 ID: templecity
	    地區 ID: templearea
	    搜索地址 ID: templesrch1
	    搜索關鍵字 ID: templesrch2
	    搜索地區 ID: templesrch3

		關鍵字 ID: evntkey 
        開始日期 ID: evntdate1
        結束日期 ID: evntdate2
        搜索關鍵字 ID: evntsrch1
        搜索 ID: evntsrch2

        關鍵字 ID: dietykey
        情境 ID: deityscene
        搜索關鍵字 ID: dietysrch1
        搜索情境 ID: dietysrch2

        後分類：
        台灣地圖：returnmap
        城鄉分布：returncity
		地區分佈：returnregion
		宗教派別：returnreligion
		相似名稱：returnnames

		搜索神明名字：
		[input] sortname
		[button] sortsrch1
		搜索廟宇：
		[input] sorttemple
		[button] sortsrch2
		搜索教派：
		[input] sortreligion
		[button] sortsrch3
 --*/
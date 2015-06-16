$(document).ready(function () {
	if(sessionStorage.homecount){
		sessionStorage.homecount = Number(sessionStorage.homecount)+1;
	}
	else{
		sessionStorage.homecount = 1;
	}
	$("#dataView1").html("test:"+sessionStorage.homecount);
	/*--TEMPLE SEARCH--*/
	//Search Address
	$("#templesrch1").click( function(){
		//console.log($("#dataInfo").val());
		$.post("/data/temple/findadrs",
			{
				words:""+$("#templeadrs").val()
			}, 
			function(data,status){
				$("#dataView1").html( data);
				console.log(data);
				data = JSON.parse(data);
				clear_markers();
				for (var i = data.length - 1; i >= 0; i--) {
					var pos = new google.maps.LatLng(data[i].latitude, data[i].longitude);
					place_marker( pos, map, data[i]);
				};
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
				$("#dataView1").html( data);
				console.log(data);
				data = JSON.parse(data);
				clear_markers();
				for (var i = data.length - 1; i >= 0; i--) {
					var pos = new google.maps.LatLng(data[i].latitude, data[i].longitude);
					place_marker( pos, map, data[i]);
				};
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
				$("#dataView1").html( data);
				//insert_temple_to_session( JSON.parse(data)[0]);
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
				startdate:""+$("#evntdate1").val(),
				enddate:""+$("#evntdate2").val()
			}, 
			function(data,status){
				$("#dataView1").html("return by date range");
				console.log(data);
				data = JSON.parse(data);
				clear_markers();
				for (var i = data.length - 1; i >= 0; i--) {
					var pos = new google.maps.LatLng(data[i].latitude, data[i].longitude);
					place_marker( pos, map, data[i]);
				};
			}
		);
	});
	/*--Diety Search--*/
	//Keyword
	$("#dietysrch1").click( function (){
		$.post("/data/deity/deity",
			{
				words:""+$("#dietykey").val()
			}, 
			function(data,status){
				$("#dataView1").html("return diety by keword");
	
				console.log(data);
				data = JSON.parse(data);
				clear_markers();
				for (var i = data.length - 1; i >= 0; i--) {
					var pos = new google.maps.LatLng(data[i].latitude, data[i].longitude);
					place_marker( pos, map, data[i]);
				};

			}
		);
		/*$.getJSON("/data/db", function(data){
			$("#dataView1").html(JSON.stringify(data));
			console.log(data);
		});*/
	});
	//Scenario
	$("#dietysrch2").click( function (){
		$.post("/data/deity/scenario",
			{
				words:""+$("#deityscene").val()
			}, 
			function(data,status){
				//$("#da").html("return deities by scenario");
				//$("#scenarioResult").html(data);
				console.log(data);

				request = JSON.parse(data);
				//result="<thead><tr><th>名稱</th></tr></thead><tbody>";
				result="";
                for(i=0;i<request.length;i++){
                	//nameCountArr.push([k,nameCount[k]]);	
                	result += (request[i].name+"<br>");}
              
                //result = result.concat("</tbody>");
                console.log("result:"+result);
                $("#scenarioResult").html(result);
                $("#dataView1").html(result);
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
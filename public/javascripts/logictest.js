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
				$("#dataView1").html( data);
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
				$("#dataView1").html( data);
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
				$("#dataView1").html( data);
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
		$("#religionblock").show();
		$("#nameblock").show();
		console.log($("#sortname").val());

		$.post("/test/data/postclassification/deity",
			{
				words:""+$("#sortname").val()
			}, 
			function(data,status){				
				console.log(data);
				requestArr = JSON.parse(data);

				cityCount 		= requestArr[0];
				religionCount 	= requestArr[1];
				nameCount 		= requestArr[2];

				//update taiwan map
				var cityCountArr=[];
                for(var k in cityCount){
                	cityCountArr.push([k,cityCount[k]]);	
                }
                showGeomap(cityCountArr);
                drawMap();

                //update religions
                religionHtml="<thead><tr><th>教派</th><th>出現次數</th></tr></thead><tbody>";
                for(var k in religionCount){
                	//nameCountArr.push([k,nameCount[k]]);	
                	religionHtml = religionHtml.concat("<tr><td>"+k+"</td><td>"+religionCount[k]+"</td></tr>");
                }
                religionHtml = religionHtml.concat("</tbody>");
                $("#returnreligion").html(religionHtml);


                //update related names
                nameHtml="<thead><tr><th>名稱</th><th>出現次數</th></tr></thead><tbody>";
                for(var k in nameCount){
                	//nameCountArr.push([k,nameCount[k]]);	
                	nameHtml = nameHtml.concat("<tr><td>"+k+"</td><td>"+nameCount[k]+"</td></tr>");
                }
                nameHtml = nameHtml.concat("</tbody>");
                $("#returnnames").html(nameHtml);





			}
		);
	});
	//temple
	$("#sortsrch2").click( function (){
		$("#religionblock").show();
		$("#nameblock").show();
		console.log($("#sorttemple").val());
		$.post("/test/data/postclassification/temple",
			{
				words:""+$("#sorttemple").val()
			}, 
			function(data,status){
				console.log(data);
				requestArr = JSON.parse(data);

				cityCount 		= requestArr[0];
				religionCount 	= requestArr[1];
				nameCount 		= requestArr[2];

				//update taiwan map
				var cityCountArr=[];
                for(var k in cityCount){
                	cityCountArr.push([k,cityCount[k]]);	
                }
                showGeomap(cityCountArr);
                drawMap();

                //update religions
                religionHtml="<thead><tr><th>教派</th><th>出現次數</th></tr></thead><tbody>";
                for(var k in religionCount){
                	//nameCountArr.push([k,nameCount[k]]);	
                	religionHtml = religionHtml.concat("<tr><td>"+k+"</td><td>"+religionCount[k]+"</td></tr>");
                }
                religionHtml = religionHtml.concat("</tbody>");
                $("#returnreligion").html(religionHtml);


                //update related names
                nameHtml="<thead><tr><th>名稱</th><th>出現次數</th></tr></thead><tbody>";
                for(var k in nameCount){
                	//nameCountArr.push([k,nameCount[k]]);	
                	nameHtml = nameHtml.concat("<tr><td>"+k+"</td><td>"+nameCount[k]+"</td></tr>");
                }
                nameHtml = nameHtml.concat("</tbody>");
                $("#returnnames").html(nameHtml);
			}
		);
	});
	//religion
	$("#sortsrch3").click( function (){
		console.log($("#sortreligion").val());
		$("#religionblock").hide();
		$("#nameblock").hide();
		$.post("/test/data/postclassification/religion",
			{
				words:""+$("#sortreligion").val()
			}, 
			function(data,status){
				requestArr = JSON.parse(data);
				cityCount 		= requestArr[0];
				//update taiwan map
				var cityCountArr=[];
                for(var k in cityCount){
                	cityCountArr.push([k,cityCount[k]]);	
                }
                showGeomap(cityCountArr);
                drawMap();

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
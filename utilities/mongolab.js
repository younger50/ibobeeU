
var request = require('request');

//findTemplesByRange(121.7,121.9,23.5,24.5);
function findTemplesByRange(lon1,lon2,lat1,lat2){
  //make lon2>lon1 and lat2 > lat1
  if(lon1>lon2){
    tmp=lon1;
    lon1=lon2;
    lon2=tmp;
  }
  if(lat1>lat2){
    tmp=lat1;
    lat1=lat2;
    lat2=tmp;
  }

  collection  = "dbtemples";
  query       = "{\"longitude\":{\"$gte\":"+lon1+",\"$lte\":"+lon2+"},\"latitude\":{\"$gte\":"+lat1+",\"$lte\":"+lat2+"}}";
  
  php_db      = require('../utilities/php_db.js');
  phpurl      = php_db.getURL(collection,query);
  request({url:phpurl},
    function(error,response,body){
      if (!error && response.statusCode == 200) {
        console.log(body);
        //body is the result      
      }
      else{
        console.log("error:findTemplesByRange");
      }
    }
  );
}

//{"longitude":{"$gte":121.7,"$lte":121.9},"latitude":{"$gte":23.5,"$lte":24.5}}
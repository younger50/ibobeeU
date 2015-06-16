var express = require('express');
var request = require('request');
var router = express.Router();

var thisRes;

router.post('/', function(req,res,next){
  //words = req.body.words;
  //console.log("words:"+words);
  bound = req.body.bound;
  console.log(bound);
  var temp = bound.split(" ");
  var lon1 = parseFloat(temp[0]);
  var lon2 = parseFloat(temp[1]);
  var lat1 = parseFloat(temp[2]);
  var lat2 = parseFloat(temp[3]);
  findTemplesByRange(lon1, lon2, lat1, lat2, res);
  //console.log("check: "+lon1+" "+lon2+" "+lat1+" "+lat2);
  
});

//findTemplesByRange(121.7,121.9,23.5,24.5);
function findTemplesByRange(lon1,lon2,lat1,lat2, res){
  //make lon2>lon1 and lat2 > lat1
  //in: lon1,lon2,lat1,lat2
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
        var tempjson = JSON.parse(body);
        res.send(tempjson);
        //body is the result      
      }
      else{
        console.log("error:findTemplesByRange");
      }
    }
  );
}

//{"longitude":{"$gte":121.7,"$lte":121.9},"latitude":{"$gte":23.5,"$lte":24.5}}
module.exports = router;
var express = require('express');
var request = require('request');
var router = express.Router();


var cityCount;

var thisRes;


router.post('/religion', function(req,res,next){
  cityCount     = {};
  words = req.body.words;
  console.log("words:"+words);
  findTempleByReligion(words);

  thisRes=res;
});


function findTempleByReligion(words){
  religion    = words;
  collection  = "dbtemples";
  query       = "{\"religion\":\""+religion+"\"}"
  php_db      = require('../utilities/php_db.js');
  phpurl      = php_db.getURL(collection,query);
  request({url:phpurl},
    function(error,response,body){
      if (!error && response.statusCode == 200) {
        temples = JSON.parse(body);
        for(i=0;i<temples.length;i++){
          if(cityCount[temples[i].city]==null){cityCount[temples[i].city]=1;}
          else{cityCount[temples[i].city]++;}

        }
        console.log(body);
        //console.log(cityCount);
        //console.log(nameCount);
        //console.log(religionCount);
        responseArr=[cityCount];
        thisRes.send(JSON.stringify(responseArr));
      }
      else{
        console.log("error:findTempleByWords");
        findTempleByWords(words);
      }
    }
  );
}

module.exports = router;

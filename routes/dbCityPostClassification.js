var express = require('express');
var request = require('request');
var router = express.Router();


var cityCount;
var nameCount;
var religionCount;
var thisRes;


router.post('/deity', function(req,res,next){
  cityCount     = {};
  nameCount     = {};
  religionCount = {};
  words = req.body.words;
  console.log("words:"+words);
  findTempleByWords(words);
  //words = "土地公";

  thisRes=res;
});



function findTempleByWords(words){
  collection  = "dbtemples";
  query       = "{\"deity\":{\"\$regex\":\""+words+"\"}}"
  php_db      = require('../utilities/php_db.js');
  phpurl      = php_db.getURL(collection,query);
  request({url:phpurl},
    function(error,response,body){
      if (!error && response.statusCode == 200) {
        temples = JSON.parse(body);
        for(i=0;i<temples.length;i++){
          if(cityCount[temples[i].city]==null){cityCount[temples[i].city]=1;}
          else{cityCount[temples[i].city]++;}

          if(nameCount[temples[i].deity]==null){nameCount[temples[i].deity]=1;}
          else{nameCount[temples[i].deity]++;}

          if(religionCount[temples[i].religion]==null){religionCount[temples[i].religion]=1;}
          else{religionCount[temples[i].religion]++;}

        }
        console.log(cityCount);
        console.log(nameCount);
        console.log(religionCount);
        responseArr=[cityCount,religionCount,nameCount];
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

var express = require('express');
var request = require('request');
var router = express.Router();


var cityCount;
var nameCount;
var religionCount;
var deityCount;
var thisRes;


router.post('/temple', function(req,res,next){
  cityCount     = {};
  nameCount     = {};
  religionCount = {};
  deityCount    = {};
  words = req.body.words;
  console.log("words:"+words);
  findTempleByWords(words);
  //words = "天后宮";

  thisRes=res;
});


function findTempleByWords(words){
  collection  = "dbtemples";
  query       = "{\"name\":{\"\$regex\":\""+words+"\"}}"
  php_db      = require('../utilities/php_db.js');
  phpurl      = php_db.getURL(collection,query);
  request({url:phpurl},
    function(error,response,body){
      if (!error && response.statusCode == 200) {
        temples = JSON.parse(body);
        for(i=0;i<temples.length;i++){
          if(cityCount[temples[i].city]==null){cityCount[temples[i].city]=1;}
          else{cityCount[temples[i].city]++;}

          if(nameCount[temples[i].name]==null){nameCount[temples[i].name]=1;}
          else{nameCount[temples[i].name]++;}

          if(religionCount[temples[i].religion]==null){religionCount[temples[i].religion]=1;}
          else{religionCount[temples[i].religion]++;}

          if(deityCount[temples[i].deity]==null){deityCount[temples[i].deity]=1;}
          else{deityCount[temples[i].deity]++;}

        }
        console.log(body);
        //console.log(cityCount);
        //console.log(nameCount);
        //console.log(religionCount);
        responseArr=[cityCount,religionCount,nameCount,deityCount];
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

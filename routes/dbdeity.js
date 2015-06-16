var express = require('express');
var request = require('request');
var router = express.Router();


var thisRes;


router.post('/scenario', function(req,res,next){
  words = req.body.words;
  console.log("words:"+words);
  findDeitiesByScenario(words,res);
  thisRes=res;
});

router.post('/deity', function(req,res,next){
  words = req.body.words;
  console.log("words:"+words);
  findTemplesByDeity(words,res);
  thisRes=res;
});



function findDeitiesByScenario(scenario,res){
  //{"scenarios":"身體健康"}
 collection  = "dbdeities";
  query       = "{\"scenarios\":\""+scenario+"\"}";
  
  php_db      = require('../utilities/php_db.js');
  phpurl      = php_db.getURL(collection,query);
  request({url:phpurl},
    function(error,response,body){
      if (!error && response.statusCode == 200) {
        deities = JSON.parse(body);
        console.log(deities);
        res.send(JSON.stringify(deities));  
      }
      else{
        console.log("error:findTemplesByRange");
      }
    }
  );
}
function findTemplesByDeity(deity,res){
 collection  = "dbtemples";
  query       = "{\"deity\":{\"\$regex\":\""+deity+"\"}}";
  php_db      = require('../utilities/php_db.js');
  phpurl      = php_db.getURL(collection,query);
  request({url:phpurl},
    function(error,response,body){
      if (!error && response.statusCode == 200) {
        temples=JSON.parse(body);
        console.log(temples);
        res.send(JSON.stringify(temples)); 
      }
      else{
        console.log("error:findTemplesByDeity");
      }
    }
  );
}




module.exports = router;

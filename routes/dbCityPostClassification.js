var express = require('express');
var request = require('request');
var router = express.Router();


var map;
var thisRes;


router.post('/city', function(req,res,next){
  map={};
  words = req.body.words;
  console.log("words:"+words);
  findTempleByWords(words);
  //words = "土地公";

  thisRes=res;
});



function findTempleByWords(words){
  request({url:"http://www.csie.ntu.edu.tw/~b99902093/ibobeeu/phpMongo4.php?name="+encodeURI(words)},
    function(error,response,body){
      if (!error && response.statusCode == 200) {
        temples = JSON.parse(body);
        for(i=0;i<temples.length;i++){
          if(map[temples[i].city]==null){map[temples[i].city]=1;}
          else{map[temples[i].city]++;}
        }
        console.log(map);
        thisRes.send(JSON.stringify(map));
      }
      else{
        console.log("error:findTempleByWords");
        findTempleByWords(words);
      }
    }
  );
}





module.exports = router;

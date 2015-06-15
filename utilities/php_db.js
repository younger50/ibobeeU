/*
usage example:
  collection  = "dbtemples";
  query       = "{\"deity\":{\"\$regex\":\""+words+"\"}}"
  php_db      = require('../utilities/php_db.js');
  phpurl      = php_db.getURL(collection,query);

*/
module.exports = {
	getURL: function(collection,query){
		URL="http://www.csie.ntu.edu.tw/~b99902093/ibobeeu/phpMongolab.php?collection="+collection+"&query="+encodeURI(query);
		return URL;
	}
}

/*
usage: 
1.create a div whose id is named 'geomap'
2.call showGeomap(dataArray) 
3.include geomap.js and https://www.google.com/jsapi
Example: in other file
  <script type='text/javascript' src='https://www.google.com/jsapi'></script>
  <script type='text/javascript' src="./geomap.js"></script>
  <script>
    var arr = [[300,'臺南市'],[100,'臺北市']];
    showGeomap(arr);
  </script>
  <div id='geomap'></div>
*/

var map={};
setMap();
var dataArr;
function showGeomap(arr){
  dataArr=arr;
  transformDataArr();
}

google.load('visualization', '1', {'packages': ['geomap']});
google.setOnLoadCallback(drawMap);

function drawMap() {
  var data = google.visualization.arrayToDataTable(dataArr);
  var options = {};
  options['region'] = 'TW';
  options['colors'] = [0xFF8747, 0xFFB581, 0xc06000]; //orange colors
  options['dataMode'] = 'markers';

  var container = document.getElementById('geomap');
  var geomap = new google.visualization.GeoMap(container);
  geomap.draw(data, options);
};

function setMap(){
  map['高雄市']='Kaohsiung City';
  map['新北市']='New Taipei City';
  map['臺中市']='Taichung City';
  map['臺南市']='Tainan City';
  map['桃園市']='Taoyuan City';

  map['彰化縣']='Changhua';
  map['嘉義縣']='TW-CYQ';
  map['嘉義市']='TW-CYI';
  map['新竹縣']='TW-HSQ';
  map['新竹市']='TW-HSI';
  map['花蓮縣']='Hualien';
  map['宜蘭縣']='Ilan';
  map['苗栗縣']='Miaoli';
  map['南投縣']='Nantou';
  map['澎湖縣']='Penghu';
  map['屏東縣']='Pingtung';
  map['臺北市']='Taipei';
  map['臺東縣']='Taitung';
  map['雲林縣']='Yunlin';
  map['基隆市']='Keelung';
}

function transformDataArr(){
  for(i=0;i<dataArr.length;i++){
    dataArr[i].unshift(map[dataArr[i][1]]);
  }
  dataArr.unshift(['City','count','displayName']);
}



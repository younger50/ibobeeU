

var map={};
setMap();
var dataArr;
function showGeomap(arr){
  dataArr=arr;
  swapArr(dataArr);
  transformDataArr();
}

//google.load('visualization', '1', {'packages': ['geomap']});
//google.setOnLoadCallback(drawMap);

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
  map['新竹市']='TW-HSZ';
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

  map['連江縣']='Lienchiang';
  map['金門縣']='Kinmen';
}

function transformDataArr(){
  for(i=0;i<dataArr.length;i++){
    dataArr[i].unshift(map[dataArr[i][1]]);
  }
  dataArr.unshift(['City','count','displayName']);
}
function swapArr(arr){
  for(i=0;i<arr.length;i++){
    var tmp = arr[i][1];
    arr[i][1]=arr[i][0];
    arr[i][0]=tmp;
  }

}


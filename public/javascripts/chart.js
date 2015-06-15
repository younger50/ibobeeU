//google.load('visualization', '1', {packages: ['corechart', 'bar']});
//google.setOnLoadCallback(drawBasic);

var dataArr2;
function showChart(arr2){
  dataArr2=arr2;
  dataArr2.unshift(['City','相關廟宇數']);
  console.log(dataArr2);
}

function drawBasic() {

      var data = google.visualization.arrayToDataTable(dataArr2);

      var options = {
        title: '相關廟宇於各縣市之分布',
        chartArea: {width: '80%'},
        hAxis: {
          title: '廟宇數',
          minValue: 0
        },
        vAxis: {
          title: '縣市'
        },
        height:600,
      };

      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }
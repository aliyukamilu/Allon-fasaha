
document.getElementById('select-subject').onchange = function() {
  let index = this.selectedIndex;
  let inputText = this.children[index].innerHTML.trim();
  // console.log(inputText);
  let queryString = location.search.substring(1);
  let linkFetch = queryString.split('?');
  let topic = ""
  let topicValue = ""
  fetch(`http://localhost/allonfasahaDashboard/php/?getStudentPerformance=&subject=${inputText.toLowerCase()}&id=${linkFetch[0]}`)
  .then(response => response.json())
  .then(jsonResponse => {
    for (const key in jsonResponse) {
      topic +=`'${key}',`
      topicValue +=`${jsonResponse[key]},` 
    }
    // console.log(topic)
    // console.log(topicValue)
 
});

      
}

if ($('#performanceGraph')) {
  const labels = [
    'Numeration',
    'Basic Operation',
    'Writing',
    'Phonics',
    'Geometry',
    'Javascript',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Performance',
      backgroundColor: '##23608A',
      borderColor: '#23608A',
      borderJoinStyle: 'bevel',
      pointHitRadius: 5,
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('performanceGraph'),
    config
  );
}



// var chartDom = document.getElementById('progressM1');
// var myChart = echarts.init(chartDom);
// var option;

// option = {
//   series: [
//     {
//       type: 'gauge',
//       progress: {
//         show: true,
//         width: 5
//       },
//       axisLine: {
//         lineStyle: {
//           width: 5
//         }
//       },
//       itemStyle: {
//         color: '#96EAB7',
//       },
//       axisTick: {
//         show: false
//       },
//       splitLine: {
//         length: 0,
//         lineStyle: {
//           width: 0,
//           color: '#999'
//         }
//       },
//       axisLabel: {
//         distance: 0,
//         color: '#999',
//         fontSize: 0
//       },
//       anchor: {
//         show: false,
//         showAbove: false,
//         size: 0,
//         itemStyle: {
//           borderWidth: 0
//         }
//       },
//       title: {
//         show: false
//       },
//       detail: {
//         valueAnimation: true,
//         fontSize: 10,
//         offsetCenter: [0, '70%']
//       },
//       data: [
//         {
//           value: 100
//         }
//       ]
//     }
//   ]
// };
// option && myChart.setOption(option);

// var chartDom = document.getElementById('progressM2');
// var myChart = echarts.init(chartDom);
// var option;

// option = {
//   series: [
//     {
//       type: 'gauge',
//       progress: {
//         show: true,
//         width: 5
//       },
//       axisLine: {
//         lineStyle: {
//           width: 5
//         }
//       },
//       itemStyle: {
//         color: '#96EAB7',
//       },
//       axisTick: {
//         show: false
//       },
//       splitLine: {
//         length: 0,
//         lineStyle: {
//           width: 0,
//           color: '#999'
//         }
//       },
//       axisLabel: {
//         distance: 0,
//         color: '#999',
//         fontSize: 0
//       },
//       anchor: {
//         show: false,
//         showAbove: false,
//         size: 0,
//         itemStyle: {
//           borderWidth: 0
//         }
//       },
//       title: {
//         show: false
//       },
//       detail: {
//         valueAnimation: true,
//         fontSize: 10,
//         offsetCenter: [0, '70%']
//       },
//       data: [
//         {
//           value: 100
//         }
//       ]
//     }
//   ]
// };
// option && myChart.setOption(option);

// var chartDom = document.getElementById('progressM3');
// var myChart = echarts.init(chartDom);
// var option;

// option = {
//   series: [
//     {
//       type: 'gauge',
//       progress: {
//         show: true,
//         width: 5
//       },
//       axisLine: {
//         lineStyle: {
//           width: 5
//         }
//       },
//       itemStyle: {
//         color: '#96EAB7',
//       },
//       axisTick: {
//         show: false
//       },
//       splitLine: {
//         length: 0,
//         lineStyle: {
//           width: 0,
//           color: '#999'
//         }
//       },
//       axisLabel: {
//         distance: 0,
//         color: '#999',
//         fontSize: 0
//       },
//       anchor: {
//         show: false,
//         showAbove: false,
//         size: 0,
//         itemStyle: {
//           borderWidth: 0
//         }
//       },
//       title: {
//         show: false
//       },
//       detail: {
//         valueAnimation: true,
//         fontSize: 10,
//         offsetCenter: [0, '70%']
//       },
//       data: [
//         {
//           value: 100
//         }
//       ]
//     }
//   ]
// };
// option && myChart.setOption(option);
// var chartDom = document.getElementById('progressM4');
// var myChart = echarts.init(chartDom);
// var option;

// option = {
//   series: [
//     {
//       type: 'gauge',
//       progress: {
//         show: true,
//         width: 5
//       },
//       axisLine: {
//         lineStyle: {
//           width: 5
//         }
//       },
//       itemStyle: {
//         color: '#96EAB7',
//       },
//       axisTick: {
//         show: false
//       },
//       splitLine: {
//         length: 0,
//         lineStyle: {
//           width: 0,
//           color: '#999'
//         }
//       },
//       axisLabel: {
//         distance: 0,
//         color: '#999',
//         fontSize: 0
//       },
//       anchor: {
//         show: false,
//         showAbove: false,
//         size: 0,
//         itemStyle: {
//           borderWidth: 0
//         }
//       },
//       title: {
//         show: false
//       },
//       detail: {
//         valueAnimation: true,
//         fontSize: 10,
//         offsetCenter: [0, '70%']
//       },
//       data: [
//         {
//           value: 100
//         }
//       ]
//     }
//   ]
// };
// option && myChart.setOption(option);

// var chartDom = document.getElementById('progressM5');
// var myChart = echarts.init(chartDom);
// var option;

// option = {
//   series: [
//     {
//       type: 'gauge',
//       progress: {
//         show: true,
//         width: 5,
//         color: '#073351'
//       },
//       axisLine: {
//         lineStyle: {
//           width: 5
//         }
//       },
//       itemStyle: {
//         color: '#073351',
//       },
//       axisTick: {
//         show: false
//       },
//       splitLine: {
//         length: 0,
//         lineStyle: {
//           width: 0,
//           color: '#999'
//         }
//       },
//       axisLabel: {
//         distance: 0,
//         color: '#999',
//         fontSize: 0
//       },
//       anchor: {
//         show: false,
//         showAbove: false,
//         size: 0,
//         itemStyle: {
//           borderWidth: 0
//         }
//       },
//       title: {
//         show: false
//       },
//       detail: {
//         valueAnimation: true,
//         fontSize: 10,
//         offsetCenter: [0, '70%']
//       },
//       data: [
//         {
//           value: 60
//         }
//       ]
//     }
//   ]
// };
// option && myChart.setOption(option);

// var chartDom = document.getElementById('progressM6');
// var myChart = echarts.init(chartDom);
// var option;

// option = {
//   series: [
//     {
//       type: 'gauge',
//       progress: {
//         show: true,
//         width: 5
//       },
//       axisLine: {
//         lineStyle: {
//           width: 5
//         }
//       },
//       itemStyle: {
//         color: '#F7941D',
//       },
//       axisTick: {
//         show: false
//       },
//       splitLine: {
//         length: 0,
//         lineStyle: {
//           width: 0,
//           color: '#999'
//         }
//       },
//       axisLabel: {
//         distance: 0,
//         color: '#999',
//         fontSize: 0
//       },
//       anchor: {
//         show: false,
//         showAbove: false,
//         size: 0,
//         itemStyle: {
//           borderWidth: 0
//         }
//       },
//       title: {
//         show: false
//       },
//       detail: {
//         valueAnimation: true,
//         fontSize: 10,
//         offsetCenter: [0, '70%']
//       },
//       data: [
//         {
//           value: 0
//         }
//       ]
//     }
//   ]
// };
// option && myChart.setOption(option);

// var chartDom = document.getElementById('progressM7');
// var myChart = echarts.init(chartDom);
// var option;

// option = {
//   series: [
//     {
//       type: 'gauge',
//       progress: {
//         show: true,
//         width: 5
//       },
//       axisLine: {
//         lineStyle: {
//           width: 5
//         }
//       },
//       itemStyle: {
//         color: '#F7941D',
//       },
//       axisTick: {
//         show: false
//       },
//       splitLine: {
//         length: 0,
//         lineStyle: {
//           width: 0,
//           color: '#999'
//         }
//       },
//       axisLabel: {
//         distance: 0,
//         color: '#999',
//         fontSize: 0
//       },
//       anchor: {
//         show: false,
//         showAbove: false,
//         size: 0,
//         itemStyle: {
//           borderWidth: 0
//         }
//       },
//       title: {
//         show: false
//       },
//       detail: {
//         valueAnimation: true,
//         fontSize: 10,
//         offsetCenter: [0, '70%']
//       },
//       data: [
//         {
//           value: 0
//         }
//       ]
//     }
//   ]
// };
// option && myChart.setOption(option);

// var chartDom = document.getElementById('progressM8');
// var myChart = echarts.init(chartDom);
// var option;

// option = {
//   series: [
//     {
//       type: 'gauge',
//       progress: {
//         show: true,
//         width: 5
//       },
//       axisLine: {
//         lineStyle: {
//           width: 5
//         }
//       },
//       itemStyle: {
//         color: '#F7941D',
//       },
//       axisTick: {
//         show: false
//       },
//       splitLine: {
//         length: 0,
//         lineStyle: {
//           width: 0,
//           color: '#999'
//         }
//       },
//       axisLabel: {
//         distance: 0,
//         color: '#999',
//         fontSize: 0
//       },
//       anchor: {
//         show: false,
//         showAbove: false,
//         size: 0,
//         itemStyle: {
//           borderWidth: 0
//         }
//       },
//       title: {
//         show: false
//       },
//       detail: {
//         valueAnimation: true,
//         fontSize: 10,
//         offsetCenter: [0, '70%']
//       },
//       data: [
//         {
//           value: 0
//         }
//       ]
//     }
//   ]
// };
// option && myChart.setOption(option);

// var chartDom = document.getElementById('progressM9');
// var myChart = echarts.init(chartDom);
// var option;

// option = {
//   series: [
//     {
//       type: 'gauge',
//       progress: {
//         show: true,
//         width: 5,
//       },
//       axisLine: {
//         lineStyle: {
//           width: 5
//         }
//       },
//       itemStyle: {
//         color: '#F7941D',
//       },
//       axisTick: {
//         show: false
//       },
//       splitLine: {
//         length: 0,
//         lineStyle: {
//           width: 0,
//           color: '#999'
//         }
//       },
//       axisLabel: {
//         distance: 0,
//         color: '#999',
//         fontSize: 0
//       },
//       anchor: {
//         show: false,
//         showAbove: false,
//         size: 0,
//         itemStyle: {
//           borderWidth: 0
//         }
//       },
//       title: {
//         show: false
//       },
//       detail: {
//         valueAnimation: true,
//         fontSize: 10,
//         offsetCenter: [0, '70%']
//       },
//       data: [
//         {
//           value: 0
//         }
//       ]
//     }
//   ]
// };
// option && myChart.setOption(option);

// var chartDom = document.getElementById('performanceGraph2');
// var myChart = echarts.init(chartDom);
// var option;

// option = {
//   title: {
//     text: ''
//   },
//   tooltip: {
//     trigger: 'axis',
//     axisPointer: {
//       type: 'shadow'
//     }
//   },
//   legend: {},
//   grid: {
//     left: '3%',
//     right: '4%',
//     bottom: '3%',
//     containLabel: true
//   },
//   yAxis: {
//     type: 'value',
//     // boundaryGap: [0, 0.01]
//   },
//   xAxis: {
//     type: 'category',
//     data: ['Feeding', 'Logins']
//   },
//   series: [
//     {
//       type: 'bar',
//       data: [{
//         value: 100,
//         itemStyle: {
//           color: '#96EAB7'
//         }
//       }, 120],
//       // barWidth: '20%',
//       itemStyle: {
//         barBorderRadius: 5,
//         color: '#A6CEE3',
//       }
//     },


//   ]
// };

// option && myChart.setOption(option);




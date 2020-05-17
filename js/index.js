//饼图左
(function () {

  // 1. 实例化对象
  let myChart = echarts.init(document.querySelector(".delivey-pie"));

  let color = ['#C96C00', '#0091A2'];
  // 2. 指定配置和数据
  let option = {
    color: color,
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 200,
      top: 120,
      data: ['完成', '剩余'],
      textStyle: {
        color: '#fff',
        fontSize: 8
      },
      itemWidth: 17,
      itemHeight: 10,
      borderRadius: 10
    },
    series: [
      {
        type: 'pie',
        radius: ['50%', '90%'],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: 'inner',
          formatter: params => {
            return params.data.value

          },
          fontFamily: 'Impact',
          fontSize: 15,
          fontWeight: 'bold',

        },
        // emphasis: {
        //   label: {
        //     show: true,
        //     fontSize: '30',
        //     fontWeight: 'bold',
        //     formatter: params => {
        //       console.log(params);
        //       let total = 0;

        //       return 

        //     }
        //   }
        // },
        labelLine: {
          show: false
        },
        data: [
          { value: 135, name: '剩余' },
          { value: 165, name: '完成' }
        ]
      }
    ]
  };


  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });

})();
//饼图右
(function () {

  // 1. 实例化对象
  let myChart = echarts.init(document.querySelector(".distribution-pie"));

  let color = ['#1F4A32', '#A85F0B', '#0091A2', '#004065'];
  // 2. 指定配置和数据
  let option = {
    color: color,
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c} ({d}%)'
    },
    series: [
      {
        type: 'pie',
        radius: ['75%', '100%'],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: 'inner',
          formatter: params => {
            let total = 0;
            console.log(params);

            return parseInt(params.percent) + "%"

          },
          fontFamily: 'Impact',
          fontSize: 15,
          fontWeight: 'bold',
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 105, name: 'A档' },
          { value: 65, name: 'B档' },
          { value: 52, name: 'C档' },
          { value: 18, name: 'D档' }
        ]
      }
    ]
  };


  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });

})();

//柱状图右
(function () {

  // 1. 实例化对象
  let myChart = echarts.init(document.querySelector(".grade-bar"));

  let option = {
    xAxis: {
      show: true,
      type: 'category',
      // data: ['-', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
    },
    grid: {
      left: 40,
      top: 20,
      height: 100
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: false
      }
    },
    series: [{
      data: [20, 27, 15, 110, 70, 50, 30, 80, 90, 42, 66, 77],
      type: 'bar',
      itemStyle: {
        color: '#27A75F',
        barBorderRadius: [10, 10, 0, 0]
      }
    }]
  };


  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });

})();

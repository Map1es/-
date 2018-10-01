var wxCharts = require('../../../utils/wxcharts.js');
var app = getApp();
var pieChart = null;
var lineChart = null;
Page({
  data: {
  },
  onLoad: function (e) {
    wx.request({
      url: 'http://123.207.227.239:81/Users/HealthAPI/', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var windowWidth = 320;
        var data = res.data;
        pieChart = new wxCharts({

          animation: true,
          canvasId: 'pieCanvas',
          type: 'pie',
          series: [{
            name: '脂肪',
            data: data.pie.fat,
            color: "#13A752",
          }, {
            name: '蛋白质',
            data: data.pie.protein,
            color: "#2BD071",
          }, {
            name: '碳水化合物',
            data: data.pie.carbohydrate,
            color: "#7FE3A9",
          }, {
            name: '微量元素',
            data: data.pie.sodium,
            color: "#D4F5E2",
          },],
          width: 300,
          height: 220,
          dataLabel: true,
        });
        lineChart = new wxCharts({
          canvasId: 'lineCanvas',
          type: 'line',
          categories: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
          animation: true,
          series: [{
            name: '能量',
            data: data.line.energys,
          }, {
            name: '蛋白质',
            data: data.line.proteins,
          },
          {
            name: '脂肪',
            data: data.line.fats,
          },
          {
            name: '碳水化合物',
            data: data.line.carbohydrates,
          },
          {
            name: '微量元素',
            data: data.line.sodiums,
          },],
          xAxis: {
            disableGrid: true
          },
          yAxis: {
            title: '每份内营养含量',
            format: function (val) {
              return val.toFixed(2);
            },
            min: 0
          },
          width: windowWidth,
          height: 200,
          dataLabel: false,
          dataPointShape: true,
          extra: {
            lineStyle: 'curve'
          }
        });
      }
    })
  }
});


// pages/quan/quan.js
Page({

  data: {
    style: "",
    items: [{
        "title": "鲜多多超市水果优惠券",
        "price": "20",
        "status": 1
      },
      {
        "title": "鲜多多超市蛋奶优惠券",
        "price": "40",
        "status": 1
      },
      {
        "title": "鲜多多超市猪肉优惠券",
        "price": "50",
        "status": 1
      },
      {
        "title": "鲜多多超市鸡禽优惠券",
        "price": "8",
        "status": 1
      },
      {
        "title": "鲜多多超市蔬菜优惠券",
        "price": "15",
        "status": 1
      },
      {
        "title": "鲜多多超市海鲜优惠券",
        "price": "80",
        "status": 1
      },
      {
        "title": "鲜多多超市牛肉优惠券",
        "price": "30",
        "status": 1
      },
      {
        "title": "鲜多多超市猪肉优惠券",
        "price": "10",
        "status": 1
      },
      {
        "title": "全场通用优惠券",
        "price": "40",
        "status": 1
      },
      {
        "title": "鲜多多超市鱼类优惠券",
        "price": "30",
        "status": 1
      }
    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  click: function(e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    var status = that.data.items[index].status;
    var item = 'items['+index+'].status'
    if (status === 1) {
        that.setData({
         [item]:0
        })
    } 
  }
})
Page({
  data: {
    property: [{
        "text": "余额",
        "num": "2000元"
      },
      {
        "text": "红包",
        "num": "2个"
      },
      {
        "text": "积分",
        "num": "2000分"
      },
    ],
    order: [{
        name: "待付款",
        url: '../../images/login/fukuang.png',
      },
      {
        name: "待收货",
        url: '../../images/login/car.png'
      },
      {
        name: "待评价",
        url: '../../images/login/message.png'
      },
      {
        name: "全部订单",
        url: '../../images/login/zhangdan.png',
        link: './pay/pay'
      }
    ],
    tags: [
      "养颜", "排毒", "美容", "祛斑", "降血糖", "降低免疫力"
    ]
  },
  onLoad: function(options) {
    var that = this;
    wx.request({
        url: 'http://123.207.227.239:8882/api/UserInfo',
        data: {
          UserID: 2
        },
        success: function(res) {
          that.setData({
            user: res.data.Data.user
          })
        }
      })
  },
  onShow: function (options) {
    var that = this;
    wx.request({
      url: 'http://123.207.227.239:8882/api/UserInfo',
      data: {
        UserID: 2
      },
      success: function (res) {
        that.setData({
          user: res.data.Data.user
        })
      }
    })
  },
  tapAdd: function(e) {
    wx.navigateTo({
      url: './address/address'
    })
  },

  tapYy: function(e) {
    wx.navigateTo({
      url: './area/area'
    })
  },
  tapQuan: function (e) {
    wx.navigateTo({
      url: './quan/quan'
    })
  },
  tapFn:function(e){
    wx.navigateTo({
      url: './pay/pay'
    })
  }
})
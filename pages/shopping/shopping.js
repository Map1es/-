// pages/shopping/shopping.js
Page({
  data: {
    num: 1,
    minusStatus: 'disable'
  },
  onLoad: function(options) {
    var that = this;
    that.flush();
  },
  onShow: function(options) {
    var that = this;
    that.flush();
  },
  tapAdd: function(e) {
    var that = this;
    var id = e.currentTarget.dataset.id;
    var num = e.currentTarget.dataset.num;
    wx.request({
      url: 'http://123.207.227.239:8882/api/AddShoppingGoods',
      data: {
        "UserID": 2, 		//用户ID
        'GoodsID': id,    //商品ID
        'GoodsNumber': 1 //商品数量
      },
      success: function (res) {
        that.flush();
      }
    })
  },
  tapSub: function(e) {
    var that = this;
    var id = e.currentTarget.dataset.id;
    var num = e.currentTarget.dataset.num;
    wx.request({
      url: 'http://123.207.227.239:8882/api/DeleteShoppingGoods',
      data: {
        "UserID": 2, 		//用户ID
        'GoodsID': id,    //商品ID
        'GoodsNumber': 1 //商品数量
      },
      success: function (res) {
        that.flush();
      }
    })
  },
  sumbit: function(e) {
    var that = this;
    wx.request({
      url: 'http://123.207.227.239:8882/api/UserSettlement',
      data: {
        'UserID': 2
      },
      success: function(res) {
        wx.showToast({
          title: '结算成功',
          icon: 'success',
          duration: 500
        })
        that.flush();
      },
      fail: function(res) {
        wx.showToast({
          title: '结算失败',
          icon: 'success',
          duration: 500
        })
      }
    })
  },
  flush:function(){
    var that = this;
    wx.request({
      url: 'http://123.207.227.239:8882/api/UserShopping',
      data: {
        UserID: 2
      },
      success: function (res) {
        that.setData({
          shop: res.data.Data
        })
      }
    })
  }
})
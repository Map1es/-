var app = getApp()
Page({
  data: {
    slider: [{
      "picUrl": "../../images/index/siwper_2.jpg"
    }, {
      "picUrl": "../../images/index/siwper_3.jpg"
    }, {
      "picUrl": "../../images/index/siwper_4.jpg"
    }],
  },
  onLoad: function(options) {
    var that = this;
    //请求推荐数据
    wx.request({
      url: 'http://123.207.227.239:8882/api/ConditionRecommend',
      data: {
        "UserID": 2,
        "Num": 8
      },
      success: function(res) {
        that.setData({
          jx: res.data.Data
        })
      }
    })
    //请求精选数据
    wx.request({
      url: 'http://123.207.227.239:8882/api/TopScoreForAll',
      data: {
        Num: 10
      },
      success: function(res) {
        that.setData({
          rm: res.data.Data
        })
      }
    })
  },
  tapItem: function(e) {
    var item = e.currentTarget.dataset.item;
    getApp().item = item;
    var id = e.currentTarget.dataset.item.id;
    wx.navigateTo({
      url: "../item/item?id="+id
    })
  },
  tapSearch:function(e){
    wx.navigateTo({
      url: './search/search',
    })
  }
})
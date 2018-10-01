// page/index/index.js
Page({
  data: {
    movies: [{
        "url": '../../images/type/swiper_1.jpg'
      },
      {
        "url": '../../images/type/swiper_2.jpg'
      },
      {
        "url": '../../images/type/swiper_3.jpg'
      },
      {
        "url": '../../images/type/swiper_4.jpg'
      }
    ],
    type_title:[
      {
        "name": "肉类",
        "type":1
      },
      {
        "name": "蛋、奶类",
        "type":2
      },
      {
        "name": "鱼类",
        "type":3
      },
      {
        "name": "蔬菜类",
        "type":4
      },
      {
        "name": "果品类",
        "type":5
      }
    ],
    currentType:1,
    foods:[]
  },
  onLoad: function (options){
    var that = this;
    //请求推荐数据
    wx.request({
      url: 'http://123.207.227.239:8882/api/GoodsByGoodsClassID',
      data: { GoodsClassID: 1 },
      success: function (res) {
        that.setData({
          foods:res.data.Data
        })
      }
    })
  },
  tabTap: function (e) {
    var type = e.target.dataset.type;
    this.setData({
      currentType: type
    });
    var that = this;
    wx.request({
      url: "http://123.207.227.239:8882/api/GoodsByGoodsClassID?GoodsClassID=" + type,
      success: function (res) {
        that.setData({
          foods: res.data.Data
        })
      }, 
      fail:function(res){
        console.log("数据错误")
        that.setData({
          foods: []
        })
      }
    })
  },
  tapItem: function (e) {
    var item = e.currentTarget.dataset.item;
    getApp().item = item;
    var id = e.currentTarget.dataset.item.id;
    wx.navigateTo({
      url: "../item/item?id=" + id
    })
  }

})
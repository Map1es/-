Page({
  data: {
  
  },
  onLoad: function (options) {
    var that=this;
    that.flush();
  },
  onShow: function (options) {
    var that = this;
    that.flush();
  },
  tapDel:function(e){
    var that = this;
    var id = e.currentTarget.dataset.id
    wx.request({
      url: 'http://123.207.227.239:8882/api//DeleteUserOrder',
      data: {
        UserID: 2,
        OrdersID:id
      },
      success: function (res) {
        wx.showToast({
          title: '删除成功',
          icon: 'success',
          duration: 500
        })
        that.flush()
      }
    })
  },
  flush: function(){
    var that = this;
    wx.request({
      url: 'http://123.207.227.239:8882/api//UserOrder',
      data: {
        UserID: 2
      },
      success: function (res) {
        that.setData({
          list: res.data.Data
        })
      }
    })
  }
})
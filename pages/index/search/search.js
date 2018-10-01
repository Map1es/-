Page({
  data: {

  },
  onLoad: function(options) {

  },
  search: function(e) {
    var that = this;
    this.data.voteTitle = e.detail.value;
    wx.request({
      url: 'http://123.207.227.239:8882/api/SearchGoodsByName',
      data: {
        "SearchName": this.data.voteTitle
      },
      success: function(res) {
          that.setData({
            sum: res.data.Data
          })
      }
    })
  },
  tapItem: function(e) {
    var item = e.currentTarget.dataset.item;
    getApp().item = item;
    var id = e.currentTarget.dataset.item.id;
    wx.navigateTo({
      url: "../../item/item?id=" + id
    })
  }
})
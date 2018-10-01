Page({
  data: {
    introduce_content: [{
      "content": "利水、清热、解毒、生津、寒性、甘味、酸味、归肺经、归胃经、富含胡萝卜素",
      "img": "../../images/item/164.jpg",
      "name": "杨桃",
      "price": "99.90",
      "score": "★★★",
      "k_x_d": [{
        "kuaidi": "88.88",
        "xiaoliang": "789879件",
        "dizhi": "北京"
      }],
      "tuijian": [{
          "name": "草莓",
          "img": "../../images/item/straberry.png"
        },
        {
          "name": "奇异果",
          "img": "../../images/item/3.png"
        },
        {
          "name": "榴莲",
          "img": "../../images/item/durian.png"
        },
      ],
      "yes_content": [{
          "content": "紫菜"
        },
        {
          "content": "玉米"
        },
        {
          "content": "小米"
        },
        {
          "content": "百合"
        },
      ],
      "no_content": [{
          "content": "桂圆"
        },
        {
          "content": "菠萝"
        },
        {
          "content": "甲鱼"
        },
        {
          "content": "柿子"
        },
      ],
      "chandi": [{
        "content": "马来西亚",
        "func": "苹果酸、柠檬酸、草酸、多种维他命、维生素B、C微量脂肪及蛋白质等"
      }, ]
    }, ]

  },
  onLoad: function(options) {
    var items = getApp().item;
    this.setData({
      items: items
    })
  },
  tapShop: function(e) {
    var id = e.currentTarget.dataset.id
    wx.request({
      url: 'http://123.207.227.239:8882/api/AddShoppingGoods',
      data: {
        "UserID": 2,
        "GoodsID": id,
        "GoodsNumber": 1
      },
      success: function(res) {
          wx.showToast({
            title: '添加成功',
            icon: 'success',
            duration: 500
          })
      }
    })
  }
})
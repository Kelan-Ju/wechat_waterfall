//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    start: 0,
    loading: false,
    dataArray: null,
  },

  onLoad: function () {
    this.getData();
  },


  getData: function () {
    var that = this
    wx.request({
      url: 'https://api.apiopen.top/todayVideo',
      success: function (res) {
        console.log('视频数据请求成功：', res.data.result)
        var array = res.data.result
        // 将空数据清除
        for (var i = 0; i < array.length; i++) {
          if (array[i].data.content == null) {
            array.splice(i, 1)
          }
        }
        that.setData({
          dataArray: array
        })
      }
    })
  },
})

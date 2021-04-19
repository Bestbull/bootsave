// pages/person_helped/person_helped.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Height: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;//定义此处的this,以备在别处使用
    var that = this;
    wx.getSystemInfo({//获取用户设备信息
      type: 'wgs84',
      success: function (res) {
        _this.setData({
          view: {
            Height: res.windowHeight
          }

        })

      }
    });//获取用户设备信息
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
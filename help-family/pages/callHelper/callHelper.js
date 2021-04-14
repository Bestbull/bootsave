// pages/callHelper/callHelper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    findtime:"2021-03-19",
    findAddress:"西湖区XX街道xx超市",
    helperPhone:"17816134129"
  },
  CallHelper:function(options){
    wx.makePhoneCall({
      phoneNumber: this.data.helperPhone,
      success:function(){
        console.log("拨号成功!")
      },
      fial:function(){
        wx.showToast({
          title: '拨号失败',
          confirmText:'请手动报警',
          duration:1500
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
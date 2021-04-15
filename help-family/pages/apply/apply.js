// pages/apply/apply.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
 apply2:function(){
   wx.navigateTo({
     url: '/pages/apply2/apply2',
   })
 },
 apply_result:function(){
  wx.navigateTo({
//随机
    url: Math.floor(Math.random()*50 + 50)%2==1?'/pages/apply_result/apply_result':'/pages/apply_result2/apply_result2',
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    
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
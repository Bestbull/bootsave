// pages/person_myStautsNot/person_myStautsNot.js
Page({
  onShareAppMessage() {
    return {
      title: 'label',
      path: 'page/component/pages/label/label'
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    checkboxItems: [
      {name: '1'},
      {name: '2'},
      {name: '3'},
    ],
    hidden: false
  },
  checkboxChange(e) {
    const checked = e.detail.value
    const changed = {}
    for (let i = 0; i < this.data.checkboxItems.length; i++) {
      if (checked.indexOf(this.data.checkboxItems[i].name) !== -1) {
        changed['checkboxItems[' + i + '].checked'] = true
      } else {
        changed['checkboxItems[' + i + '].checked'] = false
      }
    }
    this.setData(changed)
  },

  apply_result:function(){
    wx.showToast({
      title: '已反馈',
    })
    setTimeout(function(){
      wx.navigateBack({
        delta: 0,
      })
    },1500)
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
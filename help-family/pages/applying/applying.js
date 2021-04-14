// pages/applying/applying.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    first_date:"2021-04-03",
    first_time:"09: 35: 45",
    isfind:"搜寻中",
    findingColor:"#F99902",
    unisfind:"未执行",
    unfindingColor:"#3B9DEC",
    message:"发现一位疑似",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setTimeout(function(){
      wx.showModal({
        title:"走失时间太长",
        confirmColor:'#EE2A2A',
        confirmText:'立即报警',
        cancelText:'取消',
        success:function(res){
          if(res.confirm){
            // 唤起拨号
            wx.makePhoneCall({
              phoneNumber: '110',
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
          }else if(res.cancel){
            wx.showToast({
              title: '您取消了操作',
              icon:'success',
              duration:1500
            })
          }
        }
      })
    },2000)
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
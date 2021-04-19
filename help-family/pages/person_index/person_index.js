// pages/person_index/person_index.js
//获取应用实例
var amapFile = require('./amap-wx.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weather: {},
    imgUrls:[
      '../../img/1.png',
      '../../img/2.png'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // gotoPage1: function(){ 
  //   wx.navigateTo({ url: '/pages/teammate/1_1', })
  //  },
  // toupper:function(){
  //   console.log("触发了toupper");
  //  },
  onLoad: function () {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({ key: '5633856f2fa5fa0b53a773b633912a72' });//高德key
    myAmapFun.getWeather({
      success: function (data) {
        that.setData({
          weather: data
        });
      },
      fail: function (info) {
        // wx.showModal({title:info.errMsg})
      }
    })
    
    const ctx = wx.createCanvasContext('myCanvas');
    ctx.setFillStyle('#F0F8FF');
    ctx.fillRect(0, 90, 377, 50);
    ctx.draw();
    const ctx_2 = wx.createCanvasContext('myCanvas_2');
    ctx_2.setFillStyle('#000000');
    ctx_2.fillRect(0, 110, 350, 5);
    ctx_2.draw();
    
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
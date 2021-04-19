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
    ],
    is_display:'none',

    is_display_up:'none',
    array: ['良好', '一般', '欠佳', '难受'],
    objectArray: [
      {
        id: 0,
        name: '良好'
      },
      {
        id: 1,
        name: '一般'
      },
      {
        id: 2,
        name: '欠佳'
      },
      {
        id: 3,
        name: '难受'
      }
    ],
    index: 0,

    array2: ['是', '否'],
    objectArray2: [
      {
        id: 0,
        name: '是'
      },
      {
        id: 1,
        name: '否'
      }
    ],
    index2: 0,

    array3: ['是', '否'],
    objectArray3: [
      {
        id: 0,
        name: '是'
      },
      {
        id: 1,
        name: '否'
      }
    ],
    index3: 0,

    array4: ['电动车', '自行车', '自驾车', '公交车'],
    objectArray4: [
      {
        id: 0,
        name: '电动车'
      },
      {
        id: 1,
        name: '自行车'
      },
      {
        id: 2,
        name: '自驾车'
      },
      {
        id: 3,
        name: '公交车'
      }
    ],
    index4: 0,
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerChange2: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index2: e.detail.value
    })
  },
  bindPickerChange3: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index3: e.detail.value
    })
  },
  bindPickerChange4: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index4: e.detail.value
    })
  },
  help_togo:function(){
    var that = this;
    that.setData({
      is_display:'none',
      is_display_up:'block'
    })

    setTimeout(function(){
      that.setData({
        is_display_up:'none'
      })
    },5000)
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
    

    // 一定时间后弹出救援提示
    setTimeout(function(){
      
      wx.vibrateLong({//振动
        success: (res) => {//成功振动--显示救援申请
          that.setData({
            is_display:'block'
          })

          setTimeout(function(){
            that.setData({
              is_display:'none'
            })
          },5000)
        },
      })
    },3000)
  },
  myStutusNot:function(){
    wx.navigateTo({
      url: '/pages/person_myStautsNot/person_myStautsNot',
    })
  },
  helpInfo:function(){
    wx.navigateTo({
      url: '/pages/person_helpInfo/person_helpInfo',
    })
  },
  helped:function(){
    wx.navigateTo({
      url: '/pages/person_helped/person_helped',
    })
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
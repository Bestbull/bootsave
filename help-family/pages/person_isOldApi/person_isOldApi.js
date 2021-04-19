// pages/person_isOldApi/person_isOldApi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: 'back',
    src:''//图片的信息
  },
  switch1Change: function (e) {//前后摄像头
    if (e.detail.value) {
      this.setData({ show: 'back' })
    } else {
      this.setData({ show: 'front' })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.ctx = wx.createCameraContext()
  },

  //拍照-->将照片保存进本地相册->获得照片路径->照片转为base64格式
  //-->处理base64码-->上传图片至github仓库->使用外链->调用人脸识别API
  
//人脸检测
// 请求人脸检测服务
detectface: function() {
  wx.serviceMarket.invokeService({
    service: 'wx2d1fd8562c42cebb',
    api: 'detectFace',
    data: {
      "Action": "DetectFace",
      "Url": "https://cdn.jsdelivr.net/gh//wzc520pyfm/Picbed_PicGo@master/img/mybabyphoto2.jpg",
      "MaxFaceNum": 1,
	    "MinFaceSize": 80,
	    "NeedFaceAttributes": 1,
	    "NeedQualityDetection": 1
    },
  }).then(res => {
    console.log('invokeService success', res.data.FaceInfos[0].FaceAttributesInfo.Age)//返回检测年龄
  }).catch(err => {
    console.error('invokeService fail', err)
  })
},

  //拍照--暂未启用
  takePhoto() {
    this.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
 
        wx.uploadFile({
          url: '自己的接口', //仅为示例，非真实的接口地址
          filePath: this.data.src,
 
          name: 'file',
          formData: {
            
          },
          success: function (res) {
            // var data = res.data
            // console.log(res.data);
            //do something
            wx.showModal({
              title: '提示',
              content: res.data,
            })
          }
        })
 
      }
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
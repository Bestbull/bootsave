// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    tempFilePaths:"",
  },
  // 申请救援点击跳转事件
  apply_help:function(){
    wx.navigateTo({
      url: '/pages/apply/apply',
    })

    // 从本地相册选择图片或拍摄
    // var _this=this;
    // wx.chooseImage({
    //   count: 1,
    //   sourceType: 'album',
    //   success(res){
    //     // tempFilePath可以作为img标签的src属性显示图片
    //     _this.setData({
    //       tempFilePaths: res.tempFilePaths
    //     })
    //   }
    // })

    // 浏览图片实例
    // wx.previewImage({
    //   current: 'https://img1.gtimg.com/10/1048/104857/10485726_980x1200_0.jpg',
    //   urls: [ // 所有图片的URL列表，数组格式
    //     'https://img1.gtimg.com/10/1048/104857/10485731_980x1200_0.jpg',
    //     'https://img1.gtimg.com/10/1048/104857/10485726_980x1200_0.jpg',
    //     'https://img1.gtimg.com/10/1048/104857/10485729_980x1200_0.jpg'
    //   ],
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })
  },
  applying:function(){
    wx.navigateTo({
      url: '/pages/helping/helping',
    })
  },
  surrHelp:function(){
    wx.navigateTo({
      url: '/pages/surrHelp/surrHelp',
    })
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

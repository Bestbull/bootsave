// pages/person_helpInfo/person_helpInfo.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //页面初始数据
    Height: 0,
    scale: 14,
    persons:[
      "老人失踪区域",
      "队员2号",
      "队员3号"
    ],
    latitude: "",
    longitude: "",
    // latitude_2:"",
    // longitude_2:"",
    markers: [],
    controls: [{//两个缩放图标信息
      id: 1,
      iconPath: '../../img/help_family_jian.png',//图标
      position: {//页面布局位置
        left: 320,
        top: 100 - 50,
        width: 20,
        height: 20
      },
      clickable: true//是否可点击
    },
    {
      id: 2,
      iconPath: '../../img/help_family_jia.png',//图标
      position: {//页面布局位置
        left: 340,
        top: 100 - 50,
        width: 20,
        height: 20
      },
      clickable: true//是否可点击
    }
    ],
    circles: [],//圆
  },

  oldmanInfo:function(){
    wx.navigateTo({
      url: '/pages/person_oldmanInfo/person_oldmanInfo',
    })
  },
  isOldApi:function(){
    wx.navigateTo({
      url: '/pages/person_isOldApi/person_isOldApi',
    })
  },
  onLoad: function () {//页面加载完成回调
    var _this = this;//定义此处的this,以备在别处使用
    var that = this;
        that.setData({
          url: app.globalData.url
        })
    
    wx.getSystemInfo({//获取用户设备信息
      type: 'wgs84',
      success: function (res) {
        //设置map高度，根据当前设备宽高满屏显示
        _this.setData({
          view: {
            Height: res.windowHeight
          }

        })

      }
    });//获取用户设备信息


    wx.getLocation({//获取用户位置信息
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {//如果成功

        _this.setData({//设置页面数据
          latitude: res.latitude,
          longitude: res.longitude,
          // latitude_2: res.latitude+0.01,
          // longitude_2: res.longitude+0.01,
          markers: [{//设置markers
            id: "1",//老人失踪位置
            latitude: res.latitude,
            longitude: res.longitude,
            width: 30,
            height: 30,
            iconPath: "../../img/help_family_tapIcon1.png",
          //   customCallout:{//自定义气泡---他存在时将忽略title和callout
          //     display:"ALWAYS",//显示方式，可选值BYCLICK
          // anchorX:0,//横向偏移
          // anchorY:0,
          // },
          title:"标题",//标题，点击的时候展示
            callout:{//不适用自定义气泡的东西，在这里面写样式和内容
              content:"走失点",//显示的文字
              textAlign:"center",//文字对齐方式
              color:"#101010",//文字颜色
              borderWidth:2,//边框宽度
              borderColor:'#4B96F3',//边框色
              borderRadius:5,//边框圆角
              padding:5,//文字留白
              // bgColor:'rgba(0.2,0.2,0.4,0.2)',//背景颜色，可使用rgba
              anchorY:0,//纵轴偏移量
              fontSize:12,//文字大小
              display:"BYCLICK",//显示方式--点击显示
            }, 
          },{
            id: "2",//队员位置
            latitude: res.latitude+0.01,
            longitude: res.longitude+0.01,
            width: 30,
            height: 30,
            iconPath: "../../img/help_family_tapIcon2.png",
           //   customCallout:{//自定义气泡---他存在时将忽略title和callout
          //     display:"ALWAYS",//显示方式，可选值BYCLICK
          // anchorX:0,//横向偏移
          // anchorY:0,
          // },
          title:"标题",//标题，点击的时候展示
            callout:{//不适用自定义气泡的东西，在这里面写样式和内容
              content:_this.data.persons[1],
              textAlign:"center",
              color:"#101010",
              borderWidth:2,
              borderColor:'#4B96F3',
              borderRadius:5,
              padding:5,
              // bgColor:'rgba(0.2,0.2,0.4,0.2)',//背景颜色，可使用rgba
              anchorY:0,
              fontSize:12,
              display:"BYCLICK",
            }, 
          },{
            id: "3",//队员位置
            latitude: res.latitude+0.015,
            longitude: res.longitude-0.010,
            width: 30,
            height: 30,
            iconPath: "../../img/help_family_tapIcon2.png",
          //   customCallout:{//自定义气泡---他存在时将忽略title和callout
          //     display:"ALWAYS",//显示方式，可选值BYCLICK
          // anchorX:0,//横向偏移
          // anchorY:0,
          // },
          title:"标题",//标题，点击的时候展示
            callout:{//不适用自定义气泡的东西，在这里面写样式和内容
              content:_this.data.persons[2],
              textAlign:"center",
              color:"#101010",
              borderWidth:2,
              borderColor:'#4B96F3',
              borderRadius:5,
              padding:5,
              // bgColor:'rgba(0.2,0.2,0.4,0.2)',//背景颜色，可使用rgba
              anchorY:0,
              fontSize:12,
              display:"BYCLICK",
            }, 
          },{
            id: "4",//安全区
            latitude: res.latitude-0.015,
            longitude: res.longitude-0.010,
            width: 30,
            height: 30,
            //iconPath: "../../img/help_family_tapIcon2.png",
          //   customCallout:{//自定义气泡---他存在时将忽略title和callout
          //     display:"ALWAYS",//显示方式，可选值BYCLICK
          // anchorX:0,//横向偏移
          // anchorY:0,
          // },
          title:"已搜寻区域",//标题，点击的时候展示
            callout:{//不适用自定义气泡的东西，在这里面写样式和内容
              content:"已搜寻区域",
              textAlign:"center",
              color:"#101010",
              borderWidth:2,
              borderColor:'#4B96F3',
              borderRadius:5,
              padding:5,
              // bgColor:'rgba(0.2,0.2,0.4,0.2)',//背景颜色，可使用rgba
              anchorY:0,
              fontSize:12,
              display:"BYCLICK",
            }, 
          }],//设置markers  end
          circles: [{//画圆
            latitude: res.latitude,
            longitude: res.longitude,
            color: '#FF0000DD',
            fillColor: '#7cb5ec88',
            radius: 300,//半径,单位米
            strokeWidth: 1
          },{//画圆
            latitude: res.latitude+0.01,
            longitude: res.longitude+0.01,
            color: '#0993ECDD',
            fillColor: '#A5F9AF88',
            radius: 300,//半径,单位米
            strokeWidth: 1
          },{//画圆
            latitude: res.latitude+0.015,
            longitude: res.longitude-0.01,
            color: '#0993ECDD',
            fillColor: '#A5F9AF88',//后两位表示透明度
            radius: 300,//半径,单位米
            strokeWidth: 1
          },{//画圆
            latitude: res.latitude-0.015,
            longitude: res.longitude-0.01,
            color: '#0993ECDD',
            fillColor: '#00FF1D88',//后两位表示透明度
            radius: 300,//半径,单位米
            strokeWidth: 1
          }]//画圆end

        })
      }

    })

  },
//控制台输出点击位置
  regionchange(e) {
    console.log("regionchange===" + e.type)
  },

  //点击merkers
  markertap(e) {
    console.log(e.markerId)

    wx.showActionSheet({
      // itemList: [e.markerId=="1"?this.data.persons[0]:e.markerId=="2"?this.data.persons[1]:this.data.persons[2]],//点击时显示的信息
      //成功显示的回调:
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
//点击markers  end
  //点击缩放按钮动态请求数据
  controltap(e) {
    var that = this;
    console.log("scale===" + this.data.scale)
    if (e.controlId === 1) {
      // if (this.data.scale === 13) {
      that.setData({
        scale: --this.data.scale
      })
      // }
    } else {
      //  if (this.data.scale !== 13) {
      that.setData({
        scale: ++this.data.scale
      })
      // }
    }

  },
//缩放end
})